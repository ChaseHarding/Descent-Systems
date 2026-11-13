# Descent Systems

![A soft landing on the Moon: the lander touches down on a ×5 pad, slows to slow motion, and plants a flag](media/landing.gif)

A Lunar Lander–style browser game. Pick a world, fight its gravity and weather, and set your lander down on a flat pad before the fuel runs out.

**▶ Play it here: [chaseharding.github.io/Descent-Systems](https://chaseharding.github.io/Descent-Systems/)**

The whole game is a single `index.html` file: plain HTML, CSS and JavaScript on a canvas, with no frameworks, build step or server.

## Features

- **Eight worlds** with real surface gravity, each with its own sky, terrain and atmosphere, plus geysers on Europa, eruptions on Io and blinding clouds on Venus
- **Guided tutorial** that teaches a first landing step by step
- **Wind and air drag** on worlds with an atmosphere, shown on a live wind gauge
- **Auto-zoom** that eases the camera in for the final approach
- **Landing replays**: rewatch any touchdown or crash with a close camera and slow motion, plus dust, screen shake and a slow-motion beat on soft landings
- **Credits and a hangar** where you spend your banked points on hull finishes and engine flames
- **Mission campaign**: 12 hand-built missions with precision landings, cargo runs, canyon flying and rescues, each rated 1–3 stars, plus a story told over the radio by a small pixel-art cast
- **Side missions**: four optional jobs from the crew, each with its own twist: fragile cargo, a coffee countdown, a cat passenger and a survey route through the clouds of Venus
- **Break room**: hang out with the crew between flights. They chat about how your career is going, and Apogee the cat naps somewhere new every visit
- **Hot-seat mode** for two players taking turns on the same descents
- **Ghost replay** that lets you race a see-through copy of your friend's run, or your own last attempt
- **Synthesized sound**: engine rumble, thrusters, wind, a low-fuel alarm, touchdowns and crashes, with no audio files
- **Daily challenge**: the same world and terrain for every pilot each day, with a shareable result
- **23 badges** to earn, 14 of which unlock exclusive cosmetics
- **Pause** with P or Esc, and automatic pausing when you switch tabs
- **Touch controls** on phones and tablets
- **Saved progress** for best scores, credits and unlocks, kept in your browser

## Worlds

| World | Gravity | Conditions | Score bonus |
|---|---|---|---|
| Pluto | 0.62 m/s² | No atmosphere, slow and floaty | ×0.75 |
| Moon | 1.62 m/s² | No atmosphere, the classic | ×1 |
| Europa | 1.31 m/s² | Vapor geysers burst from the ice and shove you upward | ×1.25 |
| Titan | 1.35 m/s² | Thick air drag, light wind | ×1 |
| Io | 1.80 m/s² | Volcanic vents glow, then erupt. Touching an eruption is a crash | ×1.75 |
| Mars | 3.71 m/s² | Thin air, gusting dust storms | ×1.5 |
| Earth | 9.81 m/s² | Fast falls, strong wind | ×2.5 |
| Venus | 8.87 m/s² | Extreme mode: crushing air, hurricane winds, and clouds that hide everything except the pad beacons | ×3 |

## Menus

The main menu has four modes: **Free flight**, **Missions**, **Daily challenge** and **Hot-seat**. Below them are links to the **Hangar**, **Badges**, **Break room**, **Settings** and **How to play**, which replays the tutorial.

New players are offered the **tutorial** first. It holds the lander in place while you learn to fire the engine and tilt, then switches gravity on and walks you through your first landing.

**Settings** has switches for full 360° rotation, auto-zoom, story scenes, ghosts and sound, plus a list of the controls.

## How to play

Land with **both feet on a pad** while staying inside the safe limits:

- Vertical speed under **2 m/s**
- Horizontal speed under **1 m/s**
- Tilt under **10°**

The HUD readouts turn amber, then red, as you go past each limit. If you crash, the game tells you which limit you broke.

### Controls

| Key | Action |
|---|---|
| ↑ / W | Main engine |
| ← → / A D | Rotate |
| ← → (world picker) | Switch world |
| Space / Enter | Start or continue |
| H | Open the hangar |
| Z | Toggle auto-zoom |
| G | Toggle ghosts |
| M | Toggle sound |
| P / Esc | Pause and resume (Esc also backs out of menus) |
| B | Open badges |
| Esc | Back out of a menu screen |

On touch screens, on-screen **ROT / THRUST / ROT** buttons appear below the game, and a **Pause** button sits in the corner while you fly.

### Scoring

- Pads pay **×5**, **×3** or **×2**. The narrowest pad pays the most.
- Unused fuel adds a bonus, and a touchdown under 0.8 m/s adds another 50 points.
- The world's score bonus multiplies the total.
- In solo, you have 3 landers. Each new site has rougher terrain and less fuel.

## Hangar

Every point you score is banked as credits the moment you touch down. Spend them in the hangar on cosmetics. Click any item to try it on in the live preview before you buy it. Cosmetics never change how the lander flies.

- **Hull finishes:** Mission White, Gold Foil, Mars Rust, Titan Amber, Chrome
- **Engine flames:** Methane Blue, Boron Green, White-Hot, Rainbow, Pulsing Plasma
- **Landing flags:** Pennant (free), Tricolor, Lone Star, Checkered, Jolly Roger, Waving Banner. Your flag plants itself beside the lander after every touchdown.

Badge rewards (Grand Tour, Champion, Pathfinder, Spa Day, Wren's Original and more) appear in the hangar once you earn them.

## Missions

Open **Missions** from the start screen. The campaign has 12 hand-built missions across all five worlds, and finishing one unlocks the next.

| # | Mission | World | Type |
|---|---|---|---|
| 1 | First Steps | Pluto | Precision |
| 2 | Tranquility | Moon | Precision |
| 3 | Supply Run | Moon | Cargo |
| 4 | Lifeline | Moon | Rescue |
| 5 | Haze Delivery | Titan | Cargo |
| 6 | Methane Canyon | Titan | Canyon |
| 7 | Dust Ledge | Mars | Precision |
| 8 | Valles Run | Mars | Canyon |
| 9 | Storm Rescue | Mars | Rescue |
| 10 | Heavy Lift | Earth | Cargo |
| 11 | The Needle | Earth | Canyon |
| 12 | Last Light | Earth | Rescue |

- **Precision:** land on the marked pad, LZ.
- **Cargo:** land on PICKUP and hold still while the crate loads, then fly it to DROP. The crate makes the lander heavier and slower to turn.
- **Canyon:** fly beneath rock overhangs to reach the pad. Touching the rock overhead is a crash.
- **Rescue:** land on CREW and hold still while they board, then climb out of the top of the screen to reach orbit.

The campaign tells a story over the radio. You fly for Descent Systems, the smallest landing agency in the solar system, alongside Flight Director Dottie Reyes and engineer Gus, who named the lander Biscuit. A mysterious signal on Biscuit's old call sign leads from the Moon across Titan and Mars to Earth. Each character has a pixel-art portrait that talks as their lines type out. Short radio scenes play before each mission (replay them anytime with **Radio log**), mission control reacts to how you flew, and finishing the last mission unlocks an epilogue. Story scenes can be turned off in Settings.

![Meet the crew: Dottie Reyes, flight director; Gus Tran, engineering; Wren Aldana, founder](media/crew.png)

![A radio scene before The Needle mission, with Wren's first transmission and the crew's pixel portraits](media/story.png)

### Side missions

Below the campaign is a row of optional side missions. Each one is a favor for someone on the crew, unlocks partway through the campaign, and has its own rule on top of the usual landing limits.

| Side mission | From | World | Unlocks after | The twist |
|---|---|---|---|---|
| Biscuit's Spa Day | Gus | Moon | Tranquility | Fragile cargo: with the crate aboard, touch down slower than 1.2 m/s or it cracks |
| The Coffee Crisis | Dottie | Mars | Dust Ledge | Timed delivery: get a fresh pot to DROP within 70 seconds, while Dottie counts down on the radio |
| Stowaway | Gus | Titan | Haze Delivery | Passenger: Apogee the cat rides along. Turning, tilting past 20° or flying faster than 6 m/s makes her queasy, and her comfort shows in the goal box |
| The Long Way Round | Wren | Venus | Last Light | Survey route: fly through Wren's three numbered markers in order, then land |

Side missions pay their own credits and have their own stars, but they don't count toward the campaign badges.

You can set down safely on any pad and lift off again. Each mission awards up to three stars: one for finishing, one for fuel left, and one for time. Every new star pays credits. If you fail, your last attempt flies beside you as a ghost.

## Badges

Open **Badges** from the start screen to see your progress. Fourteen badges unlock exclusive cosmetics that can't be bought:

| Badge | How to earn it | Reward |
|---|---|---|
| First contact | Land on any pad | |
| Grand Tour | Land on all eight worlds | Grand Tour hull |
| Earthling | Land on Earth | |
| Feather | Touch down slower than 0.3 m/s | Feather Light flame |
| Plumb line | Land within 1° of level, drifting under 0.2 m/s | |
| Bullseye | Land on a ×5 pad on Mars or Earth | Bullseye flame |
| Running on fumes | Land with less than 5 kg of fuel left | |
| Clean sweep | Land at 5 sites in one solo mission | |
| Veteran | Land 25 times | Veteran flag |
| Perfect day | Finish a daily challenge without crashing | Laurel flag |
| Rival | Win a hot-seat match | Champion hull |
| Ghostbuster | In hot-seat, outscore the ghost you're racing | |
| Collector | Buy 10 items in the hangar | |
| Saver | Hold 5,000 credits at once | |
| Mission ready | Complete your first mission | |
| Campaign hero | Complete all 12 missions | Pathfinder hull |
| Star collector | Earn 24 mission stars | Comet Tail flame |
| Flawless | Earn all 36 mission stars | Mission Patch flag |
| Spa treatment | Deliver Biscuit's spa crate without a crack | Spa Day hull |
| Barista | Finish The Coffee Crisis with 15 seconds to spare | Espresso flame |
| Cat whisperer | Land Stowaway with Apogee at 75% comfort or better | Paw Print flag |
| Surveyor | Fly Wren's whole survey route on Venus | Wren's Original hull |
| Crew favorite | Earn all 12 side-mission stars | The Crew flag |

## Break room

Open **Break room** from the start screen to visit the crew between flights. It's a little pixel-art scene: Dottie and Gus at the table, a coffee machine that sounds like a dying whale, a window looking out on the world you flew last, a poster of Biscuit in her current paint, and a shelf with a trophy for each badge you've earned.

- Click someone, or use the buttons below the scene, to hear what's on their mind. Their lines change as you play: Dottie keeps a tally of your crashes, Gus comments on your feather landings and paint jobs, and side missions you've finished come up in conversation.
- Until you finish the campaign, Wren's chair is empty, with a reserved card on the table and her photo on the wall. After the finale, she's there in person.
- Apogee the cat sleeps somewhere different every visit. Click her to pet her. She purrs, usually.

### Bulletin board

Click the corkboard on the break room wall, or the **Bulletin board** button, to read the notes the crew pins up. They keep track of you:

- Dottie's pad notice ("WHO KEEPS LANDING ON THE ×2 PAD") counts which free-flight pads you land on, with tally marks.
- **Landing of the week** shows your best free-flight landing: the score, the world, the pad and how softly you touched down.
- **Days since last crash** resets every time you crash.
- A lost-cat poster for Apogee, a karaoke sign-up sheet (with your name on it if you set one in hot-seat), Gus's yogurt experiment, today's daily challenge and a progress chart. Some notes change once you've finished certain missions.

## Hot-seat mode

Switch to **Hot-seat · 2P** on the start screen and enter both names.

- A match is 3 rounds, and both pilots fly the exact same descent each round: same terrain, same starting drift, same wind.
- Whoever goes second races a ghost of the first pilot's run.
- The first pilot alternates every round, and the highest total after three rounds wins.

In solo, retrying after a crash also restarts you from the same spot with a ghost of your last attempt.

## Daily challenge

Choose **Daily** on the start screen. Everyone who plays on the same day gets the same world, terrain, starting drift and wind.

- You fly 3 sites in a row with one lander. A crash ends the run.
- Retry as often as you like. Your best score for the day is saved.
- **Copy result** gives you a spoiler-free summary to send to friends:
  ```
  Descent Systems daily 2026-11-12
  Mars 🟩🟩🟥 1,240 pts
  ```
- The world rotates daily through all eight. The challenge changes at midnight UTC, so friends in different time zones always get the same one.

## Install it on your phone

Descent Systems is an installable web app, so it can live on your home screen and play offline.

- **Android (Chrome):** tap **Install app** on the main menu, or use the browser menu's **Install app** / **Add to Home screen**.
- **iPhone/iPad (Safari):** tap **Install app** on the main menu for a reminder, then tap the **Share** button and choose **Add to Home Screen**.

Once installed, it opens full-screen and works without a connection. When you're online, it picks up new versions automatically. On iPhone, the home-screen app keeps its own save data, separate from Safari.

## Running locally

1. Clone the repo:
   ```
   git clone https://github.com/ChaseHarding/Descent-Systems.git
   ```
2. Open `index.html` in a browser.

For live reloading while you edit, use the **Live Server** extension in VS Code (right-click `index.html` → *Open with Live Server*).

## Tweaking the game

Most of the tuning lives near the top of the `<script>` block in `index.html`:

- **`WORLDS`**: gravity, engine thrust, drag, wind, colors and terrain roughness for each world. Add an entry here to create a new world.
- **`SAFE_VY`, `SAFE_VX`, `SAFE_ANG`**: the landing limits.
- **`BURN`, `RCS_BURN`**: fuel use for the main engine and rotation.
- **`HULLS`, `FLAMES`**: hangar items and their prices.
- **`ZOOM_MAX`, `ZOOM_START`, `ZOOM_FULL`**: how the auto-zoom camera behaves.
- **`ROUNDS`**: the number of rounds in a hot-seat match.
- **`MISSIONS`, `SIDES`**: the campaign and the side missions. Each entry has its terrain, pads, fuel, star goals and any special rule (`fragile`, `timeLimit`, `comfort`, `rings`).

To give yourself credits while testing, open the browser console on the game page, run the following, and reload:

```js
localStorage.setItem('ds-credits', 5000)
```

## Notes

`manifest.webmanifest`, `sw.js` and the `icon-*.png` / `apple-touch-icon.png` files make the game installable and offline-capable. `sw.js` has a `VERSION` you only need to change if you rename or remove those files.

The `media/` folder holds the images used in this README: `landing.gif`, `crew.png`, `story.png`, and `social-preview.png`, the picture GitHub shows when someone shares the repo link (set it under **Settings → General → Social preview**).

`og-image.png` is the share preview: the picture chat apps and social sites show when someone pastes the game's link. The tags that point to it are at the top of `index.html`.

Progress is saved in your browser's local storage, so it stays on that device and browser. Clearing site data resets it, and players sharing one browser share one wallet.

Fonts are [Chakra Petch](https://fonts.google.com/specimen/Chakra+Petch), [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) and [Caveat](https://fonts.google.com/specimen/Caveat) (the handwriting on the bulletin board), loaded from Google Fonts.
