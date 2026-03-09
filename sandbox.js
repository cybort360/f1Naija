'use strict';

const races = [
  {
    round: 1,
    slug: 'australia',
    name: 'Australian Grand Prix',
    venue: 'Albert Park, Melbourne',
    country: 'Australia',
    raceDate: '2026-03-08T15:00:00+11:00',
    weekend: '06 - 08 Mar 2026',
    sessions: [
      {
        label: 'Practice 1',
        start: '2026-03-06T01:30:00+01:00',
        end: '2026-03-06T02:30:00+01:00',
      },
      {
        label: 'Practice 2',
        start: '2026-03-06T05:00:00+01:00',
        end: '2026-03-06T06:00:00+01:00',
      },
      {
        label: 'Practice 3',
        start: '2026-03-07T01:30:00+01:00',
        end: '2026-03-07T02:30:00+01:00',
      },
      {
        label: 'Qualifying',
        start: '2026-03-07T05:00:00+01:00',
        end: '2026-03-07T06:00:00+01:00',
      },
      { label: 'Race', start: '2026-03-08T15:00:00+11:00' },
    ],
  },
  {
    round: 2,
    slug: 'china',
    name: 'Chinese Grand Prix',
    venue: 'Shanghai International Circuit',
    country: 'China',
    raceDate: '2026-03-15T15:00:00+08:00',
    weekend: '13 - 15 Mar 2026',
    sprint: true,
    sessions: [
      {
        label: 'Practice 1',
        start: '2026-03-13T03:30:00+01:00',
        end: '2026-03-13T04:30:00+01:00',
      },
      {
        label: 'Sprint Qualifying',
        start: '2026-03-13T07:30:00+01:00',
        end: '2026-03-13T08:14:00+01:00',
      },
      {
        label: 'Sprint',
        start: '2026-03-14T03:00:00+01:00',
        end: '2026-03-14T04:00:00+01:00',
      },
      {
        label: 'Qualifying',
        start: '2026-03-14T07:00:00+01:00',
        end: '2026-03-14T08:00:00+01:00',
      },
      { label: 'Race', start: '2026-03-15T15:00:00+08:00' },
    ],
  },
  {
    round: 3,
    slug: 'japan',
    name: 'Japanese Grand Prix',
    venue: 'Suzuka Circuit',
    country: 'Japan',
    raceDate: '2026-03-29T14:00:00+09:00',
    weekend: '27 - 29 Mar 2026',
    sessions: [
      {
        label: 'Practice 1',
        start: '2026-03-27T02:30:00+01:00',
        end: '2026-03-27T03:30:00+01:00',
      },
      {
        label: 'Practice 2',
        start: '2026-03-27T06:00:00+01:00',
        end: '2026-03-27T07:00:00+01:00',
      },
      {
        label: 'Practice 3',
        start: '2026-03-28T02:30:00+01:00',
        end: '2026-03-28T03:30:00+01:00',
      },
      {
        label: 'Qualifying',
        start: '2026-03-28T06:00:00+01:00',
        end: '2026-03-28T07:00:00+01:00',
      },
      { label: 'Race', start: '2026-03-29T14:00:00+09:00' },
    ],
  },
  {
    round: 4,
    slug: 'bahrain',
    name: 'Bahrain Grand Prix',
    venue: 'Bahrain International Circuit, Sakhir',
    country: 'Bahrain',
    raceDate: '2026-04-12T19:00:00+03:00',
    weekend: '10 - 12 Apr 2026',
    sessions: [
      {
        label: 'Practice 1',
        start: '2026-04-10T11:30:00+01:00',
        end: '2026-04-10T12:30:00+01:00',
      },
      {
        label: 'Practice 2',
        start: '2026-04-10T15:00:00+01:00',
        end: '2026-04-10T16:00:00+01:00',
      },
      {
        label: 'Practice 3',
        start: '2026-04-11T12:30:00+01:00',
        end: '2026-04-11T13:30:00+01:00',
      },
      {
        label: 'Qualifying',
        start: '2026-04-11T16:00:00+01:00',
        end: '2026-04-11T17:00:00+01:00',
      },
      { label: 'Race', start: '2026-04-12T19:00:00+03:00' },
    ],
  },
  {
    round: 5,
    slug: 'saudi-arabia',
    name: 'Saudi Arabian Grand Prix',
    venue: 'Jeddah Corniche Circuit',
    country: 'Saudi Arabia',
    raceDate: '2026-04-19T20:00:00+03:00',
    weekend: '17 - 19 Apr 2026',
    sessions: [
      {
        label: 'Practice 1',
        start: '2026-04-17T13:30:00+01:00',
        end: '2026-04-17T14:30:00+01:00',
      },
      {
        label: 'Practice 2',
        start: '2026-04-17T17:00:00+01:00',
        end: '2026-04-17T18:00:00+01:00',
      },
      {
        label: 'Practice 3',
        start: '2026-04-18T13:30:00+01:00',
        end: '2026-04-18T14:30:00+01:00',
      },
      {
        label: 'Qualifying',
        start: '2026-04-18T17:00:00+01:00',
        end: '2026-04-18T18:00:00+01:00',
      },
      { label: 'Race', start: '2026-04-19T20:00:00+03:00' },
    ],
  },
  {
    round: 6,
    slug: 'miami',
    name: 'Miami Grand Prix',
    venue: 'Miami International Autodrome',
    country: 'United States',
    raceDate: '2026-05-03T16:00:00-04:00',
    weekend: '01 - 03 May 2026',
    sprint: true,
    sessions: [
      {
        label: 'Practice 1',
        start: '2026-05-01T16:30:00+01:00',
        end: '2026-05-01T17:30:00+01:00',
      },
      {
        label: 'Sprint Qualifying',
        start: '2026-05-01T20:30:00+01:00',
        end: '2026-05-01T21:14:00+01:00',
      },
      {
        label: 'Sprint',
        start: '2026-05-02T16:00:00+01:00',
        end: '2026-05-02T17:00:00+01:00',
      },
      {
        label: 'Qualifying',
        start: '2026-05-02T20:00:00+01:00',
        end: '2026-05-02T21:00:00+01:00',
      },
      { label: 'Race', start: '2026-05-03T16:00:00-04:00' },
    ],
  },
  {
    round: 7,
    slug: 'canada',
    name: 'Canadian Grand Prix',
    venue: 'Circuit Gilles Villeneuve, Montreal',
    country: 'Canada',
    raceDate: '2026-05-24T16:00:00-04:00',
    weekend: '22 - 24 May 2026',
    sprint: true,
    sessions: [
      {
        label: 'Practice 1',
        start: '2026-05-22T16:30:00+01:00',
        end: '2026-05-22T17:30:00+01:00',
      },
      {
        label: 'Sprint Qualifying',
        start: '2026-05-22T20:30:00+01:00',
        end: '2026-05-22T21:14:00+01:00',
      },
      {
        label: 'Sprint',
        start: '2026-05-23T16:00:00+01:00',
        end: '2026-05-23T17:00:00+01:00',
      },
      {
        label: 'Qualifying',
        start: '2026-05-23T20:00:00+01:00',
        end: '2026-05-23T21:00:00+01:00',
      },
      { label: 'Race', start: '2026-05-24T16:00:00-04:00' },
    ],
  },
  {
    round: 8,
    slug: 'monaco',
    name: 'Monaco Grand Prix',
    venue: 'Circuit de Monaco',
    country: 'Monaco',
    raceDate: '2026-06-07T15:00:00+02:00',
    weekend: '05 - 07 Jun 2026',
    sessions: [
      {
        label: 'Practice 1',
        start: '2026-06-05T11:30:00+01:00',
        end: '2026-06-05T12:30:00+01:00',
      },
      {
        label: 'Practice 2',
        start: '2026-06-05T15:00:00+01:00',
        end: '2026-06-05T16:00:00+01:00',
      },
      {
        label: 'Practice 3',
        start: '2026-06-06T10:30:00+01:00',
        end: '2026-06-06T11:30:00+01:00',
      },
      {
        label: 'Qualifying',
        start: '2026-06-06T14:00:00+01:00',
        end: '2026-06-06T15:00:00+01:00',
      },
      { label: 'Race', start: '2026-06-07T15:00:00+02:00' },
    ],
  },
  {
    round: 9,
    slug: 'barcelona-catalunya',
    name: 'Barcelona-Catalunya Grand Prix',
    venue: 'Circuit de Barcelona-Catalunya',
    country: 'Spain',
    raceDate: '2026-06-14T15:00:00+02:00',
    weekend: '12 - 14 Jun 2026',
    sessions: [
      {
        label: 'Practice 1',
        start: '2026-06-12T11:30:00+01:00',
        end: '2026-06-12T12:30:00+01:00',
      },
      {
        label: 'Practice 2',
        start: '2026-06-12T15:00:00+01:00',
        end: '2026-06-12T16:00:00+01:00',
      },
      {
        label: 'Practice 3',
        start: '2026-06-13T10:30:00+01:00',
        end: '2026-06-13T11:30:00+01:00',
      },
      {
        label: 'Qualifying',
        start: '2026-06-13T14:00:00+01:00',
        end: '2026-06-13T15:00:00+01:00',
      },
      { label: 'Race', start: '2026-06-14T15:00:00+02:00' },
    ],
  },
  {
    round: 10,
    slug: 'austria',
    name: 'Austrian Grand Prix',
    venue: 'Red Bull Ring, Spielberg',
    country: 'Austria',
    raceDate: '2026-06-28T15:00:00+02:00',
    weekend: '26 - 28 Jun 2026',
    sessions: [
      {
        label: 'Practice 1',
        start: '2026-06-26T11:30:00+01:00',
        end: '2026-06-26T12:30:00+01:00',
      },
      {
        label: 'Practice 2',
        start: '2026-06-26T15:00:00+01:00',
        end: '2026-06-26T16:00:00+01:00',
      },
      {
        label: 'Practice 3',
        start: '2026-06-27T10:30:00+01:00',
        end: '2026-06-27T11:30:00+01:00',
      },
      {
        label: 'Qualifying',
        start: '2026-06-27T14:00:00+01:00',
        end: '2026-06-27T15:00:00+01:00',
      },
      { label: 'Race', start: '2026-06-28T15:00:00+02:00' },
    ],
  },
  {
    round: 11,
    slug: 'great-britain',
    name: 'British Grand Prix',
    venue: 'Silverstone Circuit',
    country: 'Great Britain',
    raceDate: '2026-07-05T15:00:00+01:00',
    weekend: '03 - 05 Jul 2026',
    sprint: true,
    sessions: [
      {
        label: 'Practice 1',
        start: '2026-07-03T11:30:00+01:00',
        end: '2026-07-03T12:30:00+01:00',
      },
      {
        label: 'Sprint Qualifying',
        start: '2026-07-03T15:30:00+01:00',
        end: '2026-07-03T16:14:00+01:00',
      },
      {
        label: 'Sprint',
        start: '2026-07-04T11:00:00+01:00',
        end: '2026-07-04T12:00:00+01:00',
      },
      {
        label: 'Qualifying',
        start: '2026-07-04T15:00:00+01:00',
        end: '2026-07-04T16:00:00+01:00',
      },
      { label: 'Race', start: '2026-07-05T15:00:00+01:00' },
    ],
  },
  {
    round: 12,
    slug: 'belgium',
    name: 'Belgian Grand Prix',
    venue: 'Spa-Francorchamps',
    country: 'Belgium',
    raceDate: '2026-07-19T15:00:00+02:00',
    weekend: '17 - 19 Jul 2026',
    sessions: [
      {
        label: 'Practice 1',
        start: '2026-07-17T11:30:00+01:00',
        end: '2026-07-17T12:30:00+01:00',
      },
      {
        label: 'Practice 2',
        start: '2026-07-17T15:00:00+01:00',
        end: '2026-07-17T16:00:00+01:00',
      },
      {
        label: 'Practice 3',
        start: '2026-07-18T10:30:00+01:00',
        end: '2026-07-18T11:30:00+01:00',
      },
      {
        label: 'Qualifying',
        start: '2026-07-18T14:00:00+01:00',
        end: '2026-07-18T15:00:00+01:00',
      },
      { label: 'Race', start: '2026-07-19T15:00:00+02:00' },
    ],
  },
  {
    round: 13,
    slug: 'hungary',
    name: 'Hungarian Grand Prix',
    venue: 'Hungaroring, Budapest',
    country: 'Hungary',
    raceDate: '2026-07-26T15:00:00+02:00',
    weekend: '24 - 26 Jul 2026',
    sessions: [
      {
        label: 'Practice 1',
        start: '2026-07-24T11:30:00+01:00',
        end: '2026-07-24T12:30:00+01:00',
      },
      {
        label: 'Practice 2',
        start: '2026-07-24T15:00:00+01:00',
        end: '2026-07-24T16:00:00+01:00',
      },
      {
        label: 'Practice 3',
        start: '2026-07-25T10:30:00+01:00',
        end: '2026-07-25T11:30:00+01:00',
      },
      {
        label: 'Qualifying',
        start: '2026-07-25T14:00:00+01:00',
        end: '2026-07-25T15:00:00+01:00',
      },
      { label: 'Race', start: '2026-07-26T15:00:00+02:00' },
    ],
  },
  {
    round: 14,
    slug: 'netherlands',
    name: 'Dutch Grand Prix',
    venue: 'Circuit Zandvoort',
    country: 'Netherlands',
    raceDate: '2026-08-23T15:00:00+02:00',
    weekend: '21 - 23 Aug 2026',
    sprint: true,
    sessions: [
      {
        label: 'Practice 1',
        start: '2026-08-21T10:30:00+01:00',
        end: '2026-08-21T11:30:00+01:00',
      },
      {
        label: 'Sprint Qualifying',
        start: '2026-08-21T14:30:00+01:00',
        end: '2026-08-21T15:14:00+01:00',
      },
      {
        label: 'Sprint',
        start: '2026-08-22T10:00:00+01:00',
        end: '2026-08-22T11:00:00+01:00',
      },
      {
        label: 'Qualifying',
        start: '2026-08-22T14:00:00+01:00',
        end: '2026-08-22T15:00:00+01:00',
      },
      { label: 'Race', start: '2026-08-23T15:00:00+02:00' },
    ],
  },
  {
    round: 15,
    slug: 'italy',
    name: 'Italian Grand Prix',
    venue: 'Monza',
    country: 'Italy',
    raceDate: '2026-09-06T15:00:00+02:00',
    weekend: '04 - 06 Sep 2026',
    sessions: [
      {
        label: 'Practice 1',
        start: '2026-09-04T10:30:00+01:00',
        end: '2026-09-04T11:30:00+01:00',
      },
      {
        label: 'Practice 2',
        start: '2026-09-04T14:00:00+01:00',
        end: '2026-09-04T15:00:00+01:00',
      },
      {
        label: 'Practice 3',
        start: '2026-09-05T10:30:00+01:00',
        end: '2026-09-05T11:30:00+01:00',
      },
      {
        label: 'Qualifying',
        start: '2026-09-05T14:00:00+01:00',
        end: '2026-09-05T15:00:00+01:00',
      },
      { label: 'Race', start: '2026-09-06T15:00:00+02:00' },
    ],
  },
  {
    round: 16,
    slug: 'spain',
    name: 'Spanish Grand Prix',
    venue: 'Madring, Madrid',
    country: 'Spain',
    raceDate: '2026-09-13T15:00:00+02:00',
    weekend: '11 - 13 Sep 2026',
    sessions: [
      {
        label: 'Practice 1',
        start: '2026-09-11T11:30:00+01:00',
        end: '2026-09-11T12:30:00+01:00',
      },
      {
        label: 'Practice 2',
        start: '2026-09-11T15:00:00+01:00',
        end: '2026-09-11T16:00:00+01:00',
      },
      {
        label: 'Practice 3',
        start: '2026-09-12T10:30:00+01:00',
        end: '2026-09-12T11:30:00+01:00',
      },
      {
        label: 'Qualifying',
        start: '2026-09-12T14:00:00+01:00',
        end: '2026-09-12T15:00:00+01:00',
      },
      { label: 'Race', start: '2026-09-13T15:00:00+02:00' },
    ],
  },
  {
    round: 17,
    slug: 'azerbaijan',
    name: 'Azerbaijan Grand Prix',
    venue: 'Baku City Circuit',
    country: 'Azerbaijan',
    raceDate: '2026-09-26T15:00:00+04:00',
    weekend: '24 - 26 Sep 2026',
    sessions: [
      {
        label: 'Practice 1',
        start: '2026-09-24T08:30:00+01:00',
        end: '2026-09-24T09:30:00+01:00',
      },
      {
        label: 'Practice 2',
        start: '2026-09-24T12:00:00+01:00',
        end: '2026-09-24T13:00:00+01:00',
      },
      {
        label: 'Practice 3',
        start: '2026-09-25T08:30:00+01:00',
        end: '2026-09-25T09:30:00+01:00',
      },
      {
        label: 'Qualifying',
        start: '2026-09-25T12:00:00+01:00',
        end: '2026-09-25T13:00:00+01:00',
      },
      { label: 'Race', start: '2026-09-26T15:00:00+04:00' },
    ],
  },
  {
    round: 18,
    slug: 'singapore',
    name: 'Singapore Grand Prix',
    venue: 'Marina Bay Street Circuit',
    country: 'Singapore',
    raceDate: '2026-10-11T20:00:00+08:00',
    weekend: '09 - 11 Oct 2026',
    sprint: true,
    sessions: [
      {
        label: 'Practice 1',
        start: '2026-10-09T08:30:00+01:00',
        end: '2026-10-09T09:30:00+01:00',
      },
      {
        label: 'Sprint Qualifying',
        start: '2026-10-09T12:30:00+01:00',
        end: '2026-10-09T13:14:00+01:00',
      },
      {
        label: 'Sprint',
        start: '2026-10-10T09:00:00+01:00',
        end: '2026-10-10T10:00:00+01:00',
      },
      {
        label: 'Qualifying',
        start: '2026-10-10T13:00:00+01:00',
        end: '2026-10-10T14:00:00+01:00',
      },
      { label: 'Race', start: '2026-10-11T20:00:00+08:00' },
    ],
  },
  {
    round: 19,
    slug: 'united-states',
    name: 'United States Grand Prix',
    venue: 'Circuit of The Americas, Austin',
    country: 'United States',
    raceDate: '2026-10-25T15:00:00-05:00',
    weekend: '23 - 25 Oct 2026',
    sessions: [
      {
        label: 'Practice 1',
        start: '2026-10-23T17:30:00+01:00',
        end: '2026-10-23T18:30:00+01:00',
      },
      {
        label: 'Practice 2',
        start: '2026-10-23T21:00:00+01:00',
        end: '2026-10-23T22:00:00+01:00',
      },
      {
        label: 'Practice 3',
        start: '2026-10-24T17:30:00+01:00',
        end: '2026-10-24T18:30:00+01:00',
      },
      {
        label: 'Qualifying',
        start: '2026-10-24T21:00:00+01:00',
        end: '2026-10-24T22:00:00+01:00',
      },
      { label: 'Race', start: '2026-10-25T15:00:00-05:00' },
    ],
  },
  {
    round: 20,
    slug: 'mexico',
    name: 'Mexico City Grand Prix',
    venue: 'Autódromo Hermanos Rodríguez',
    country: 'Mexico',
    raceDate: '2026-11-01T14:00:00-06:00',
    weekend: '30 Oct - 01 Nov 2026',
    sessions: [
      {
        label: 'Practice 1',
        start: '2026-10-30T18:30:00+01:00',
        end: '2026-10-30T19:30:00+01:00',
      },
      {
        label: 'Practice 2',
        start: '2026-10-30T22:00:00+01:00',
        end: '2026-10-30T23:00:00+01:00',
      },
      {
        label: 'Practice 3',
        start: '2026-10-31T17:30:00+01:00',
        end: '2026-10-31T18:30:00+01:00',
      },
      {
        label: 'Qualifying',
        start: '2026-10-31T21:00:00+01:00',
        end: '2026-10-31T22:00:00+01:00',
      },
      { label: 'Race', start: '2026-11-01T14:00:00-06:00' },
    ],
  },
  {
    round: 21,
    slug: 'brazil',
    name: 'São Paulo Grand Prix',
    venue: 'Interlagos',
    country: 'Brazil',
    raceDate: '2026-11-08T14:00:00-03:00',
    weekend: '06 - 08 Nov 2026',
    sessions: [
      {
        label: 'Practice 1',
        start: '2026-11-06T15:30:00+01:00',
        end: '2026-11-06T16:30:00+01:00',
      },
      {
        label: 'Practice 2',
        start: '2026-11-06T19:00:00+01:00',
        end: '2026-11-06T20:00:00+01:00',
      },
      {
        label: 'Practice 3',
        start: '2026-11-07T14:30:00+01:00',
        end: '2026-11-07T15:30:00+01:00',
      },
      {
        label: 'Qualifying',
        start: '2026-11-07T18:00:00+01:00',
        end: '2026-11-07T19:00:00+01:00',
      },
      { label: 'Race', start: '2026-11-08T14:00:00-03:00' },
    ],
  },
  {
    round: 22,
    slug: 'las-vegas',
    name: 'Las Vegas Grand Prix',
    venue: 'Las Vegas Strip Circuit',
    country: 'United States',
    raceDate: '2026-11-21T20:00:00-08:00',
    weekend: '19 - 21 Nov 2026',
    sessions: [
      {
        label: 'Practice 1',
        start: '2026-11-20T00:30:00+01:00',
        end: '2026-11-20T01:30:00+01:00',
      },
      {
        label: 'Practice 2',
        start: '2026-11-20T04:00:00+01:00',
        end: '2026-11-20T05:00:00+01:00',
      },
      {
        label: 'Practice 3',
        start: '2026-11-21T00:30:00+01:00',
        end: '2026-11-21T01:30:00+01:00',
      },
      {
        label: 'Qualifying',
        start: '2026-11-21T04:00:00+01:00',
        end: '2026-11-21T05:00:00+01:00',
      },
      { label: 'Race', start: '2026-11-21T20:00:00-08:00' },
    ],
  },
  {
    round: 23,
    slug: 'qatar',
    name: 'Qatar Grand Prix',
    venue: 'Lusail International Circuit',
    country: 'Qatar',
    raceDate: '2026-11-29T19:00:00+03:00',
    weekend: '27 - 29 Nov 2026',
    sessions: [
      {
        label: 'Practice 1',
        start: '2026-11-27T13:30:00+01:00',
        end: '2026-11-27T14:30:00+01:00',
      },
      {
        label: 'Practice 2',
        start: '2026-11-27T17:00:00+01:00',
        end: '2026-11-27T18:00:00+01:00',
      },
      {
        label: 'Practice 3',
        start: '2026-11-28T14:30:00+01:00',
        end: '2026-11-28T15:30:00+01:00',
      },
      {
        label: 'Qualifying',
        start: '2026-11-28T18:00:00+01:00',
        end: '2026-11-28T19:00:00+01:00',
      },
      { label: 'Race', start: '2026-11-29T19:00:00+03:00' },
    ],
  },
  {
    round: 24,
    slug: 'united-arab-emirates',
    name: 'Abu Dhabi Grand Prix',
    venue: 'Yas Marina Circuit',
    country: 'United Arab Emirates',
    raceDate: '2026-12-06T17:00:00+04:00',
    weekend: '04 - 06 Dec 2026',
    sessions: [
      {
        label: 'Practice 1',
        start: '2026-12-04T09:30:00+01:00',
        end: '2026-12-04T10:30:00+01:00',
      },
      {
        label: 'Practice 2',
        start: '2026-12-04T13:00:00+01:00',
        end: '2026-12-04T14:00:00+01:00',
      },
      {
        label: 'Practice 3',
        start: '2026-12-05T10:30:00+01:00',
        end: '2026-12-05T11:30:00+01:00',
      },
      {
        label: 'Qualifying',
        start: '2026-12-05T14:00:00+01:00',
        end: '2026-12-05T15:00:00+01:00',
      },
      { label: 'Race', start: '2026-12-06T17:00:00+04:00' },
    ],
  },
];

const months = [
  'All',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const statsEl = document.getElementById('stats');
const featuredRaceEl = document.getElementById('featuredRace');
const raceGridEl = document.getElementById('raceGrid');
const searchInput = document.getElementById('searchInput');
const monthSelect = document.getElementById('monthSelect');
const themeToggle = document.getElementById('themeToggle');

let query = '';
let month = 'All';
let dark = true;

function formatDate(dateString, opts = {}) {
  return new Intl.DateTimeFormat('en-NG', {
    timeZone: 'Africa/Lagos',
    weekday: opts.weekday ? 'short' : undefined,
    day: '2-digit',
    month: 'short',
    year: opts.year ? 'numeric' : undefined,
    hour: opts.time ? '2-digit' : undefined,
    minute: opts.time ? '2-digit' : undefined,
    hour12: true,
  }).format(new Date(dateString));
}

function getMonthName(dateString) {
  return new Intl.DateTimeFormat('en-NG', {
    month: 'long',
    timeZone: 'Africa/Lagos',
  }).format(new Date(dateString));
}

function getCountdown(target) {
  const now = Date.now();
  const diff = new Date(target).getTime() - now;

  if (diff <= 0) return 'Live or completed';

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  return days > 0 ? `${days}d ${hours}h ${minutes}m` : `${hours}h ${minutes}m`;
}

function getDetailedCountdown(target) {
  const now = Date.now();
  const diff = new Date(target).getTime() - now;

  if (diff <= 0) return 'Race is live or completed';

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function getNextRace() {
  return (
    races.find((race) => new Date(race.raceDate).getTime() > Date.now()) ||
    races[races.length - 1]
  );
}

function createStats(nextRace) {
  const sprintCount = races.filter((race) => race.sprint).length;

  statsEl.innerHTML = `
    <article class="stat">
      <div class="stat-label">Total races</div>
      <div class="stat-value">${races.length}</div>
    </article>
    <article class="stat">
      <div class="stat-label">Sprint weekends</div>
      <div class="stat-value">${sprintCount}</div>
    </article>
    <article class="stat">
      <div class="stat-label">Local timezone</div>
      <div class="stat-value">Africa/Lagos</div>
    </article>
    <article class="stat">
      <div class="stat-label">Next race countdown</div>
      <div class="stat-value next-race-countdown-value">${getCountdown(nextRace.raceDate)}</div>
    </article>
  `;
}

function createSessionMarkup(race) {
  return race.sessions
    .map((session) => {
      const timeText = session.end
        ? `${formatDate(session.start, { weekday: true, time: true })} — ${formatDate(session.end, { time: true })}`
        : formatDate(session.start, { weekday: true, time: true });

      return `
        <div class="session">
          <div class="session-label">⏱️ ${session.label}</div>
          <div class="session-time">${timeText}</div>
        </div>
      `;
    })
    .join('');
}

function renderFeaturedRace(race) {
  featuredRaceEl.innerHTML = `
    <div class="card-inner">
      <div class="row">
        <span class="pill">Round ${race.round}</span>
        ${race.sprint ? '<span class="pill sprint">Sprint weekend</span>' : ''}
      </div>

      <h2 class="race-title">${race.name}</h2>

      <div class="race-meta">
        <span class="meta-chip">📍 ${race.venue}</span>
        <span class="meta-chip">🗓️ ${race.weekend}</span>
      </div>

      <div class="start-box">
        <div class="start-label">Race start</div>
        <div class="start-time">${formatDate(race.raceDate, {
          weekday: true,
          time: true,
        })}</div>
        <div class="session-time">Africa/Lagos (WAT)</div>
      </div>

      <div class="countdown-box">
        <div class="start-label">Countdown to next race</div>
        <div class="countdown-live" id="featuredCountdown">${getDetailedCountdown(race.raceDate)}</div>
      </div>

      <div class="session-list">
        ${createSessionMarkup(race)}
      </div>
    </div>
  `;
}

function filteredRaces() {
  return races.filter((race) => {
    const q = query.trim().toLowerCase();
    const matchesQuery =
      !q ||
      [race.name, race.country, race.venue].some((field) =>
        field.toLowerCase().includes(q),
      );
    const matchesMonth =
      month === 'All' || getMonthName(race.raceDate) === month;

    return matchesQuery && matchesMonth;
  });
}

function renderRaceGrid() {
  const items = filteredRaces();

  if (!items.length) {
    raceGridEl.innerHTML =
      '<div class="empty">No races match that filter. The search goblin came back empty-handed.</div>';
    return;
  }

  raceGridEl.innerHTML = items
    .map(
      (race) => `
        <article class="card race-card">
          <div class="card-inner">
            <div class="row">
              <span class="pill">Round ${race.round}</span>
              ${race.sprint ? '<span class="pill sprint">Sprint weekend</span>' : ''}
            </div>

            <h3 class="race-title">${race.name}</h3>

            <div class="race-meta">
              <span class="meta-chip">📍 ${race.venue}</span>
              <span class="meta-chip">🗓️ ${race.weekend}</span>
            </div>

            <div class="start-box">
              <div class="start-label">Race start</div>
              <div class="start-time">${formatDate(race.raceDate, {
                weekday: true,
                time: true,
              })}</div>
              <div class="session-time">Africa/Lagos (WAT)</div>
            </div>

            <div class="session-list">
              ${createSessionMarkup(race)}
            </div>
          </div>
        </article>
      `,
    )
    .join('');
}

function populateMonthSelect() {
  monthSelect.innerHTML = months
    .map((item) => `<option value="${item}">${item}</option>`)
    .join('');
}

function applyTheme() {
  document.body.classList.toggle('light', !dark);
  themeToggle.textContent = dark ? '🌙 Dark mode' : '☀️ Light mode';
}

function updateLiveCountdown() {
  const nextRace = getNextRace();

  const featuredCountdownEl = document.getElementById('featuredCountdown');
  if (featuredCountdownEl) {
    featuredCountdownEl.textContent = getDetailedCountdown(nextRace.raceDate);
  }

  const statCountdownEl = document.querySelector('.next-race-countdown-value');
  if (statCountdownEl) {
    statCountdownEl.textContent = getCountdown(nextRace.raceDate);
  }
}

function render() {
  const nextRace = getNextRace();
  createStats(nextRace);
  renderFeaturedRace(nextRace);
  renderRaceGrid();
}

searchInput.addEventListener('input', (event) => {
  query = event.target.value;
  renderRaceGrid();
});

monthSelect.addEventListener('change', (event) => {
  month = event.target.value;
  renderRaceGrid();
});

themeToggle.addEventListener('click', () => {
  dark = !dark;
  applyTheme();
});

populateMonthSelect();
applyTheme();
render();
updateLiveCountdown();
setInterval(updateLiveCountdown, 1000);
