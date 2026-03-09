# F1Naija

F1Naija is a lightweight Formula 1 schedule website built with **HTML, CSS, and vanilla JavaScript**. It is designed for fans in Nigeria who want to view the F1 calendar in **Africa/Lagos time (WAT / UTC+1)** without doing timezone math in their heads like a sleep-deprived race engineer.

## What it does

F1Naija displays the 2026 Formula 1 race calendar with:

- race weekends
- circuit and country information
- featured next race section
- search by race or circuit
- filter by month
- dark and light mode toggle
- countdown to the next race
- all displayed times formatted for **Africa/Lagos**

## Tech stack

This project uses:

- **HTML** for structure
- **CSS** for styling
- **Vanilla JavaScript** for data rendering, filtering, theme switching, and countdown logic

## Project structure

A simple version of the project can be organized like this:

```text
F1Naija/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Getting started

### Option 1: Open directly in the browser

Because this is a static site, you can open `index.html` directly in your browser.

### Option 2: Run a local server

Using Python:

```bash
python3 -m http.server
```

Using Node:

```bash
npx serve .
```

Then open the local URL shown in your terminal.

## How it works

The race data lives in `script.js` as an array of race objects.

Each race includes:

- round number
- slug
- race name
- venue
- country
- race date
- weekend label
- sprint flag where applicable
- session list

The UI is rendered dynamically with JavaScript.

### Main functions

- `formatDate()` formats a date for **Africa/Lagos**
- `getMonthName()` extracts the month for filtering
- `getCountdown()` calculates the remaining time to the next race
- `getNextRace()` finds the next upcoming race
- `createStats()` renders the stats cards
- `renderFeaturedRace()` renders the highlighted next race
- `renderRaceGrid()` renders all filtered race cards
- `applyTheme()` switches between dark and light mode

## Timezone note

This part matters.

Nigeria uses:

- **WAT**
- **UTC+1**
- **Africa/Lagos**

Nigeria does **not** use daylight saving time.

That means the safest way to handle F1 times is:

1. store race/session times in their **real source timezone** or in **UTC**
2. convert them for display using `Africa/Lagos`

Example:

```js
new Intl.DateTimeFormat('en-NG', {
  timeZone: 'Africa/Lagos',
  hour: '2-digit',
  minute: '2-digit',
  hour12: true,
}).format(new Date(raceDate));
```

If you hardcode every race as `+01:00`, you are no longer converting time properly. You are just pretending, which is a bold strategy until Australia shows up and ruins your morning.

## Features to improve next

Here are sensible next upgrades:

- fix all session source times using official local circuit timezones
- add a live countdown that updates every second
- add an “Add to Calendar” button
- split data into a separate `races.js` file
- add race status badges like `Upcoming`, `Live`, and `Completed`
- add team colors or track imagery for a more premium F1 feel
- make the featured next race section update automatically after a race passes

## Customization

You can easily customize:

- colors in `:root` inside `style.css`
- layout spacing in `.hero`, `.stats`, `.card`, and `.race-grid`
- displayed copy in `index.html`
- race/session data inside `script.js`

## Known issue

At the moment, the project data may still contain some manually entered session timestamps that should be verified against official Formula 1 schedules. The rendering logic is fine, but incorrect source timestamps will still produce incorrect displayed times.

In plain English: the clock is honest, but bad input still makes it say nonsense.

## Why this project exists

F1Naija exists because global sports schedules are often published in local venue time, UTC, or platform-specific time formats, which is mildly annoying and occasionally cursed. This project makes the schedule immediately useful for Nigerian fans.

## License

This project is open for personal use, learning, and customization.

If you want to publish it publicly, add a proper license such as MIT.
