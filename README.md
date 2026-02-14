# NeuroPop
A Sillycon Hackathon Project 


# 🌹 Inspiration
Dating apps have become a chore—a repetitive cycle of swiping and small talk. We wanted to bring back the high-stakes energy of a game show. We took the anxiety of a first date, the chaos of a Twitch stream, and the judgment of an AI referee to create a "Dating Gladiator" arena where the goal isn't just to find love, but to survive the "cringe.

# ⚔️ What it does
-Roses are RED (FLAGS) is a live-spectated video dating platform.
-The Arena: Two strangers enter a 3-minute video chat.
-The AI Referee: Lovable AI monitors the audio in real-time, flagging "Red Flags" (talking about exes, being boring), awarding "Smooth Moves," and providing live commentary.
-The Spectators: Friends can watch the date live in a private "War Room" and use Sabotage Tools to send embarrassing questions or trigger "Truth or Dare" challenges to test the daters' composure.

# ⚔️  How we built it
We utilized a modern, high-performance stack to ensure the "Arena" never lags:
-Frontend: React 18 + Vite for speed.
-Styling: Tailwind CSS for that deep black (#050505) and neon pink (#FF007F) aesthetic.
-Motion: Framer Motion for the signature falling rose petals.
-Real-time Logic: ```javascript
// Example of the Sabotage Broadcast Logic
-const sendSabotage = async (type) => {
await supabase.channel('arena_room').send({
type: 'broadcast',
event: 'SABOTAGE_TRIGGERED',
payload: { effect: type, timestamp: Date.now() }
});
};-

# Challenges we ran into
1. The "Live" Interaction Paradox
The biggest hurdle was building a stable Two-Way Video Arena. Most dating apps are asynchronous (swiping), but our "Gladiator" concept requires daters to be live, in sync, and reactive.
-Standard video streaming often has a 5-10 second delay. If an AI Referee roasts a dater 10 seconds after they said something "cringe," the joke dies and the momentum is lost.-
2. Balancing the "Vibe Check"
We needed a way to measure the quality of a date that was more sophisticated than a simple "thumbs up."
-How do you reward a "Smooth Operator" while still allowing for the occasional awkward silence? We had to design a logic system that could distinguish between a "dead conversation" and a "meaningful pause."-
3. Syncing the Spectator War Room
-Having 12+ spectators in a "War Room" all trying to trigger sound effects and "Red Flags" at once could easily crash a browser.-

# Accomplishments that we're proud of
-The Neon-Noir Aesthetic: We successfully created a "Strict Dark Mode" that feels premium, chaotic, and high-energy all at once.
-The Sabotage System: Making the spectators feel like "Dating Gods" who can influence the outcome of the date in real-time.
-Platform Fluidity: Navigating from a landing page into a live-action video arena feels seamless, with no jarring loading screens or broken flows.

# What we learned
Building this project taught us that UX is more than just buttons. In a live environment, UX is about timing. We learned how to manage real-time data streams and how to use AI not just as a tool, but as a "character" in the social experience.

# What's next for Roses are RED (FLAGS)
-AI Voice Commentary: Giving the AI Referee a physical voice to roast daters out loud.
-Gauntlet Mode: A survival-style mode where one dater must stay on camera as challengers are rotated in.
-Global Leaderboards: Ranking the world's "Red Flag Champions" and "Smooth Operators."
