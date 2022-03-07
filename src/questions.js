const questions = [
  {
    question: 'Sprechfunknachrichten werden nach Vorrangstufen unterteilt in:',
    answers: [
      { text: 'Einfachnachrichten, Eilnachrichten', correct: false },
      { text: 'Einfachnachrichten, wichtige Nachrichten', correct: false },
      {
        text: 'Einfach-, Sofort-, Blitz-, Staatsnotnachrichten',
        correct: true,
      },
      { text: 'Sofort-, Eilnachrichten, Einfachnachrichten', correct: false },
    ],
  },
  {
    question: 'Wo ist mit schlechten Übertragungsbedingungen zu rechnen?',
    answers: [
      { text: 'in Tiefgaragenanlagen', correct: true },
      {
        text: 'hinter natürlichen oder künstlichen Hindernissen',
        correct: true,
      },
      {
        text: 'in der Nähe von Metallzäunen oder Hochspannungsleitungen',
        correct: true,
      },
    ],
  },
  {
    question:
      'Bei welcher Aufzählung gehören sämtliche Behörden/Organisationen zu den Behörden und Organisationen mit Sicherheitsaufgaben(BOS)?',
    answers: [
      { text: 'Berufsfeuerwehr, Telekom, Bundespolizei', correct: false },
      {
        text: 'Polizei, Freiwillige Feuerwehr, Bundeszollverwaltung',
        correct: true,
      },
      {
        text: 'THW, Förster, Militärpolizei (Feldjäger)',
        correct: false,
      },
      {
        text: 'Malteser-Hilfsdienst, Landeskriminalamt, DLRG',
        correct: true,
      },
    ],
  },
  {
    question: 'Bei der Verkehrsabwicklung ist folgendes zu beachten:',
    answers: [
      {
        text: 'Abwicklung diszipliniert und so kurz wie m glich',
        correct: true,
      },
      {
        text: 'langsam und deutlich sprechen, Abkürzungen vermeiden',
        correct: true,
      },
      {
        text: 'bei Übungen in Zeitabständen auf den Übungsverkehr hinweisen',
        correct: true,
      },
    ],
  },
  {
    question: 'In welcher Reihenfolge werden Koordinaten angegeben?',
    answers: [
      { text: 'Erst Ostwert, dann Nordwert', correct: true },
      {
        text: 'Erst Linkswert, dann Hochwert',
        correct: false,
      },
      {
        text: 'Erst Nordwert, dann Ostwert',
        correct: false,
      },
    ],
  },
  {
    question:
      'Welches der folgenden Beispiele zur Verkehrsabwicklung ist vorschriftsmäßig?',
    answers: [
      {
        text: 'Florian Niedersachsen für Florian Niedersachsen 8-40-2 bitte kommen',
        correct: false,
      },
      {
        text: 'Leitstelle Niedersachsen von Florian Niedersachsen 8-40-2 kommen',
        correct: true,
      },
      {
        text: 'Florentine Niedersachsen an Florian Niedersachsen 8-40-2 kommen',
        correct: false,
      },
    ],
  },
  {
    question:
      'Von welchen Faktoren ist die Reichweite einer Funkverbindung abhängig?',
    answers: [
      { text: 'von der Geländeform', correct: true },
      {
        text: 'von Art, Lage und Standort der Antenne',
        correct: true,
      },
      {
        text: 'von der Senderleistung und der Empfängerempfindlichkeit',
        correct: true,
      },
    ],
  },
  {
    question:
      'Die Waldbrandeinsatzkarten der Feuerwehren besitzen den Maßstab:',
    answers: [
      { text: '1:5 000', correct: false },
      {
        text: '1:50 000',
        correct: true,
      },
      {
        text: '1:100 000',
        correct: false,
      },
      {
        text: '1:250 000',
        correct: false,
      },
    ],
  },
];
