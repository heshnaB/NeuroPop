
import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import * as tmImage from "@teachablemachine/image";

const socket = io("http://localhost:3001");

const servers = {
  iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
};

export default function Video() {
  const localVideo = useRef(null);
  const remoteVideo = useRef(null);

  const peerRef = useRef(null);
  const localStreamRef = useRef(null);
  const modelRef = useRef(null);

  const [refCall, setRefCall] = useState("Referee warming up...");

  useEffect(() => {
    startCamera();
  }, []);

  async function startCamera() {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });

    localStreamRef.current = stream;
    localVideo.current.srcObject = stream;

    socket.on("match", (partnerId) => {
      createPeer(partnerId, true);
    });

    socket.on("signal", async ({ from, data }) => {
      if (!peerRef.current) createPeer(from, false);

      const peer = peerRef.current;

      if (data.offer) {
        await peer.setRemoteDescription(data.offer);
        const answer = await peer.createAnswer();
        await peer.setLocalDescription(answer);
        socket.emit("signal", { to: from, data: { answer } });
      }

      if (data.answer) {
        await peer.setRemoteDescription(data.answer);
      }

      if (data.candidate) {
        await peer.addIceCandidate(data.candidate);
      }
    });
  }

  function createPeer(partnerId, initiator) {
    const peer = new RTCPeerConnection(servers);
    peerRef.current = peer;

    localStreamRef.current.getTracks().forEach((track) =>
      peer.addTrack(track, localStreamRef.current)
    );

    peer.onicecandidate = (e) => {
      if (e.candidate) {
        socket.emit("signal", {
          to: partnerId,
          data: { candidate: e.candidate },
        });
      }
    };

    peer.ontrack = (e) => {
      remoteVideo.current.srcObject = e.streams[0];
    };

    if (initiator) {
      peer.createOffer().then((offer) => {
        peer.setLocalDescription(offer);
        socket.emit("signal", {
          to: partnerId,
          data: { offer },
        });
      });
    }
  }

  // ✅ JSX (THIS is what “add it inside JSX” means)
  return (
    <div>
      <p>{refCall}</p>

      <video
        ref={localVideo}
        autoPlay
        playsInline
        muted
        style={{ width: "300px" }}
      />

      <video
        ref={remoteVideo}
        autoPlay
        playsInline
        style={{ width: "300px" }}
      />
    </div>
  );
}
