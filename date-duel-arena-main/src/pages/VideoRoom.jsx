import { useEffect, useRef } from "react";

export default function VideoRoom() {
  const localVideo = useRef(null);

  useEffect(() => {
    console.log("REQUESTING CAMERA");

    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        console.log("CAMERA GRANTED");
        localVideo.current.srcObject = stream;
      })
      .catch((err) => {
        console.error("CAMERA ERROR:", err);
        alert("Camera error: " + err.message);
      });
  }, []);

  return (
    <div className="p-4">
      <video
        ref={localVideo}
        autoPlay
        muted
        playsInline
        className="w-1/2 bg-black"
      />
    </div>
  );
}
