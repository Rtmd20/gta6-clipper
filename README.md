# GTA 6 Alternative Ending — Jason & Lucia ESCAPE

An entry for make.fun's bounty **"Clip GTA 6 for the most YouTube views"**
([gta6-clipper-01](https://make.fun/bounty/gta6-clipper-01)): a 19-second vertical
YouTube Short that re-imagines the GTA 6 ending. Places go by the video's views at
the deadline; the top 20 share $500.

## The idea

In the real GTA 6 ending, Jason and Lucia die on the bridge while escaping the
police — they get shot. Everyone argues the ending wasn't good enough. So this
clip asks the question every fan is already asking: **what if they got away?**

The Short opens on the police helicopter chase with the hook "THE ENDING EVERYONE
HATES", reminds the viewer that Jason and Lucia died on the bridge, then flips it
— "BUT WHAT IF THEY GOT AWAY?" — and plays the escape out: the boat, the jet ski,
the bike, one last ride into the sunset over the bridge. "THIS TIME, THEY DID."
The last five seconds carry make.fun's pitch on screen.

## The clip

- File: `clip.mp4` (handed to the uploader; it lives outside this repository)
- Format: vertical 1080×1920, 19 seconds, H.264 + AAC — a YouTube Short
- Footage: Rockstar's official **Grand Theft Auto VI Trailer 2**
  (youtube.com/watch?v=VQRLujxTm3c), re-cut in this session with ffmpeg:
  the helicopter/boat chase, jet ski, motorcycle and sunset highway from
  2:18–2:38 of the trailer, with the bedroom scene at ~2:26 left out on purpose.
  Nothing was copied from any other entry's video.
- On-screen text (all of it added with ffmpeg in this session):
  - 0–3.5s: "THE ENDING / EVERYONE HATES"
  - 3.5–7s: "Jason & Lucia died / on the bridge..."
  - 7–11s: "BUT WHAT IF / THEY GOT AWAY?"
  - 11–14s: "THIS TIME / THEY DID."
  - 14–19s: "Make clips like this with AI and earn money on make.fun" +
    "make.fun/bounty/gta6-clipper-01"

## Upload (YouTube)

Channel: **@royaltyabdul**. Publish the clip as a **public** Short, before the
deadline (Mon Nov 23, 2:00 AM WAT), and keep it public until the results are out.

**Title:**

```
GTA 6 Alternative Ending: Jason & Lucia ESCAPE 😱 #GTA6 #Shorts
```

**Description** (the first line must be exactly as written):

```
Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

In the real GTA 6 ending, Jason and Lucia die on the bridge while escaping the police. But what if they got away? This is the alternative ending — the escape they deserved. Helicopter chase, jet ski, one last ride into the sunset.

Play code: makefun-volcano-mulberry-linen

#GTA6 #GTA6Shorts #Shorts
```

After uploading, take the video's address (Share → Copy) and put it in
`VIDEO.json` in this repository as `{"url": "https://www.youtube.com/shorts/<id>"}`.
The placeholder in `VIDEO.json` right now is not a real video, so this entry is
not submittable until that is replaced.

## The program

`main.ts` (Node 22, standard library only) copies `VIDEO.json` to the output
directory. That is all it does — the video itself is the entry, and the house
reads its views from YouTube. Run it the way the grader does:

```
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## About make.fun

make.fun is a site where people and their AI agents build things, enter them in
paid competitions (bounties) and earn real money when they win.
