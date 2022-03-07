const questions = [
  // Seite 2
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
        text: 'Abwicklung diszipliniert und so kurz wie möglich',
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
  // Seite 3
  {
    question:
      'Ein Sprech- oder Durchsagefehler ist sofort zu berichtigen mit der Ankündigung:',
    answers: [
      { text: 'Ich wiederhole', correct: false },
      {
        text: 'Ich wiederhole',
        correct: false,
      },
      {
        text: 'Ich bestätige',
        correct: false,
      },
      {
        text: 'Ich berichtige',
        correct: true,
      },
    ],
  },
  {
    question: 'Die PDV/DV 810.3 gilt für:',
    answers: [
      {
        text: 'nichtöffentlichen beweglichen Landfunkdienst der BOS',
        correct: true,
      },
      {
        text: 'Polizei und Feuerwehr, nicht für andere BOS',
        correct: false,
      },
      {
        text: 'den Fernsprechdienst der Deutschen Post AG',
        correct: false,
      },
    ],
  },
  {
    question: 'Der Maßstab 1: 50 000 bedeutet:',
    answers: [
      {
        text: '1 cm auf der Karte entspricht 500 m in der Natur',
        correct: true,
      },
      {
        text: '5 cm auf der Karte entsprechen 1 km in der Natur',
        correct: false,
      },
      {
        text: '1 cm auf der Karte entspricht 5 km in der Natur',
        correct: false,
      },
    ],
  },
  {
    question: 'Jeder Teilnehmer am Sprechfunkverkehr unterliegt:',
    answers: [
      { text: 'der Abgabenpflicht', correct: false },
      {
        text: 'der Verschwiegenheitspflicht',
        correct: true,
      },
      {
        text: 'der Verpflichtung, bestehende Vorschriften einzuhalten',
        correct: true,
      },
    ],
  },
  {
    question: 'Eigenmächtiges ändern einer Nachricht ist dem Betriebspersonal:',
    answers: [
      { text: 'in Einzelfällen erlaubt', correct: false },
      {
        text: 'verboten',
        correct: true,
      },
      {
        text: 'freigestellt',
        correct: false,
      },
      {
        text: 'immer erlaubt, wenn es der schnellen Verkehrsabwicklung dient',
        correct: false,
      },
    ],
  },
  {
    question: 'Ein Anruf beginnt mit den Worten:',
    answers: [
      { text: 'Florian Y von Florian X kommen', correct: true },
      {
        text: 'Florian Y für Florian X kommen',
        correct: false,
      },
      {
        text: 'Florian X an Florian Y kommen',
        correct: false,
      },
      {
        text: 'Moin Moin',
        correct: false,
      },
    ],
  },
  {
    question:
      'Ein Anruf ist sofort durch die Anrufantwort mit den Worten zu bestätigen:',
    answers: [
      { text: 'Hier Florian Y sprechen', correct: false },
      {
        text: 'Moin , was kann ich tun',
        correct: false,
      },
      {
        text: 'Florian Y hört, kommen',
        correct: false,
      },
      {
        text: 'Hier Florian Y kommen',
        correct: true,
      },
    ],
  },
  {
    question: 'Das Funkgespr ch wird beendet mit dem Wort:',
    answers: [
      { text: 'Verstanden', correct: false },
      {
        text: 'Ende',
        correct: true,
      },
      {
        text: 'Over',
        correct: false,
      },
      {
        text: 'Roger',
        correct: false,
      },
    ],
  },
  // Seite 4
  {
    question: 'Die Abkürzung UTM hat die Bedeutung:',
    answers: [
      { text: 'Ungenaue Taktische Maßangabe', correct: false },
      {
        text: 'Universelle Technische Maßeinheit',
        correct: false,
      },
      {
        text: 'Universale Transversale Mercatorprojektion',
        correct: true,
      },
    ],
  },
  {
    question: 'Eine Frage wird eingeleitet mit dem Wort / Worten:',
    answers: [
      { text: 'Kommen, ob verstanden', correct: false },
      {
        text: 'Frage',
        correct: true,
      },
      {
        text: 'Wiederholen Sie',
        correct: false,
      },
      {
        text: 'Was willst du',
        correct: false,
      },
    ],
  },
  {
    question: 'Maßnahmen der Fernmeldesicherheit sollen verhindern, dass:',
    answers: [
      {
        text: 'Unbefugte schutzbedürftige Informationen gewinnen',
        correct: true,
      },
      {
        text: 'Unbefugte am Fernmeldeverkehr teilnehmen',
        correct: true,
      },
      {
        text: 'der Fernmeldeverkehr gestört wird',
        correct: true,
      },
    ],
  },
  {
    question: 'Der Sprechfunkverkehr wird eröffnet durch:',
    answers: [
      { text: 'die Anrufantwort', correct: false },
      {
        text: 'den Anruf',
        correct: true,
      },
      {
        text: 'den Einsatzleiter',
        correct: false,
      },
      {
        text: 'die Gegenstelle',
        correct: false,
      },
    ],
  },
  {
    question:
      'Welche Aussage(n) ist oder sind richtig? Die Koordinate 32 U ND 662 217',
    answers: [
      { text: '32 die Zone und U das Band', correct: true },
      {
        text: '32 das Band und U die Zone',
        correct: false,
      },
      {
        text: 'ND das 100 km Quadrat',
        correct: true,
      },
      {
        text: 'MD das 10 km Quadrat',
        correct: false,
      },
    ],
  },
  {
    question: 'Die Bezeichnung BOS bedeutet:',
    answers: [
      { text: 'Brand-, Ordnungs- und Sicherheitsbehörden', correct: false },
      {
        text: 'Brandschutzoberaufsicht',
        correct: false,
      },
      {
        text: 'Behörden und Organisationen mit Sicherheitsaufgaben',
        correct: true,
      },
    ],
  },
  {
    question: 'Die unbefugte Weitergabe von Fernsprechgeheimnissen:',
    answers: [
      {
        text: 'ist nur bei dringenden Einsatznachrichten erlaubt',
        correct: false,
      },
      {
        text: 'wird mit Freiheitsstrafe oder mit Geldstrafe bestraft',
        correct: true,
      },
      {
        text: 'darf nur der Leiter der Fernmeldezentrale anordnen',
        correct: false,
      },
    ],
  },
  {
    question:
      'Welche Aussage(n) ist oder sind richtig? Die Koordinate 32 U ND 662 217',
    answers: [
      { text: '662 den Ostwert', correct: true },
      {
        text: '217 den Nordwert',
        correct: true,
      },
      {
        text: '217 den Ostwert',
        correct: false,
      },
      {
        text: '662 den Nordwert',
        correct: false,
      },
    ],
  },
  // Seite 5
  {
    question:
      'Welches ist das aktuelle Lagebezugssystem bei topographischen Karten?',
    answers: [
      { text: 'WGS 84', correct: true },
      {
        text: 'ED 50',
        correct: false,
      },
      {
        text: 'UTM',
        correct: false,
      },
      {
        text: 'GPS',
        correct: false,
      },
    ],
  },
  {
    question:
      'Bei der Durchsage einer Nachricht hat sich der Sprechfunker versprochen und will den Fehler richtig stellen. Welche Formulierung ist richtig?',
    answers: [
      {
        text: 'Die Verpflegung trifft in einer Stunde – ich bessere – in einer halben Stunde ein, kommen',
        correct: false,
      },
      {
        text: 'Die Verpflegung trifft in einer Stunde – ich korrigiere – in Kürze ein',
        correct: false,
      },
      {
        text: 'Die Verpflegung trifft in einer Stunde – ich berichtige – in einer halben Stunde ein, kommen',
        correct: true,
      },
      {
        text: 'Wiederhole – in einer halben Stunde ein, kommen',
        correct: false,
      },
    ],
  },
  {
    question: 'Welches ist die richtige Buchstabierweise des Wortes „Duplex“?',
    answers: [
      { text: 'Delta-Ulrich-Paula-Ludwig-Erich-Xantippe', correct: false },
      {
        text: 'Dora-Ulrich-Paula-Ludwig-Emil-Xantippe',
        correct: true,
      },
      {
        text: 'Dora-Uwe-Paula-Ludwig-Emil-X-Ray',
        correct: false,
      },
      {
        text: 'Dora-Ulrich-Paul-Ludwig-Emil-Xantippe',
        correct: false,
      },
    ],
  },
  {
    question:
      'Welche Eigenschaften elektromagnetischer Wellen werden ma geblich von der Frequenz beeinflusst?',
    answers: [
      { text: 'die Wellenlänge', correct: true },
      {
        text: 'die Ausbreitungsgeschwindigkeit',
        correct: false,
      },
      {
        text: 'die Reichweite',
        correct: true,
      },
      {
        text: 'die Art der Ausbreitung der Wellen',
        correct: true,
      },
    ],
  },
  {
    question: 'Erh hte Antennenstandorte von Funkgeräten führen zu …',
    answers: [
      { text: 'einer größeren Reichweite der Funkverbindung', correct: true },
      {
        text: 'einer größeren Anzahl nutzbarer Frequenzen',
        correct: false,
      },
      {
        text: 'eventuellen Störungen benachbarter Funkverkehrskreise',
        correct: true,
      },
      {
        text: 'einer größeren Ausbreitungsgeschwindigkeit der Funkwellen',
        correct: false,
      },
    ],
  },
  {
    question: 'Die Menüeinstellung „TMO“ im Gerät zeigt an:',
    answers: [
      {
        text: 'das sich das Ger t im Netzbetrieb (Trunked Mode Operation) befindet',
        correct: true,
      },
      {
        text: 'das ein Repeater geschaltet wurde',
        correct: false,
      },
      {
        text: 'das nur jetzt ein Direktruf zwischen zwei Geräten möglich ist',
        correct: false,
      },
    ],
  },
  {
    question: 'Welche Statusmeldungen sind richtig?',
    answers: [
      { text: 'Status 3 = Einsatzübernahme', correct: true },
      {
        text: 'Status 5 = Sprechwunsch',
        correct: true,
      },
      {
        text: 'Status 4 = am Einsatzort eingetroffen',
        correct: true,
      },
      {
        text: 'Status 6 = nicht einsatzbereit',
        correct: true,
      },
    ],
  },
  {
    question: 'Ein DMO Repeater ist möglich für',
    answers: [
      {
        text: 'eine Reichweitenvergrößerung an der Einsatzstelle',
        correct: true,
      },
      {
        text: 'Einsätze in Tiefgaragen, Krankenhäusern und Industriebauten',
        correct: false,
      },
      {
        text: 'die Überleitung von einer DMO Rufgruppe in eine TMO Rufgruppe',
        correct: false,
      },
    ],
  },
  // Seite 6
  {
    question: 'Ein MRT Gerät ist',
    answers: [
      { text: 'ein Handsprechfunkgerät im 2m Band', correct: false },
      {
        text: 'dient alleine dem Sprechfunkbetrieb zur Einsatzleitstelle',
        correct: false,
      },
      {
        text: 'ist ein fest eingebautes Fahrzeugfunkgerät',
        correct: true,
      },
    ],
  },
  {
    question:
      'Von welchen Faktoren ist die Reichweite einer Funkverbindung abhängig?',
    answers: [
      { text: 'von der Geländeform/Bebauung', correct: true },
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
    question: 'Der Gesprächsaufbau zur Einsatzleitstelle wird wie eröffnet?',
    answers: [
      {
        text: 'Funkspruch: Leitstelle Niedersachsen von Florian Niedersachsen 8-43-1 kommen',
        correct: true,
      },
      {
        text: 'durch Senden der Statusmeldung 5',
        correct: true,
      },
      {
        text: 'durch Senden der Statusmeldung 3',
        correct: false,
      },
    ],
  },
  {
    question: 'Der Funkrufname der Feuerwehr lautet:',
    answers: [
      {
        text: 'Florian für Feststationen, Florentine für feste Fahrzeugfunkgeräte',
        correct: false,
      },
      {
        text: 'Florian bei MRT Geräten',
        correct: true,
      },
      {
        text: 'Florentine bei HRT-Geräten im TMO-Betrieb',
        correct: false,
      },
    ],
  },
  {
    question:
      'Wie lautet der korrekte Gesprächsaufbau bei einer Notfallsituation',
    answers: [
      {
        text: '„Mayday Mayday Mayday“ hier Florian Niedersachsen 8-43-2',
        correct: true,
      },
      {
        text: 'durch Drücken der Notruftaste für 3 Sekunden',
        correct: false,
      },
      {
        text: 'durch dreimaliges Drücken der Sprechtaste',
        correct: false,
      },
    ],
  },
  {
    question: 'Bei der Abwicklung des Sprechfunkverkehrs ist was zu beachten?',
    answers: [
      {
        text: 'Er ist so kurz wie möglich, aber so umfassend wie nötig abzuwickeln.',
        correct: true,
      },
      {
        text: 'Nichts, jeder kann sagen was er will.',
        correct: false,
      },
      {
        text: 'Es muss immer alles an den Einsatzleiter gefunkt werden.',
        correct: false,
      },
    ],
  },
  {
    question:
      'Welche Aussage zur ISSI = Individual Short Subscriver Identity ist richtig?',
    answers: [
      { text: 'für jedes Gerät nur eine ISSI', correct: true },
      {
        text: 'Länge der ISSI: maximal 8 Dezimalstellen',
        correct: false,
      },
      {
        text: 'ist die OPTA des jeweiligen Gerätes',
        correct: false,
      },
    ],
  },
  {
    question:
      'Welche Aussage trifft für die Rufart „Einzelruf" in der Betriebsart „Netzbetrieb“ (TMO -Trunked Mode Operation) zu?',
    answers: [
      {
        text: 'Der Einzelruf ist in der Betriebsart „Netzbetrieb“ (TMO) nur mit Handfunkgeräten möglich.',
        correct: false,
      },
      {
        text: 'Der Einzelruf entspricht dem Linienverkehr im Analogfunk. Alle Teilnehmer hören das laufende Funkgespräch mit, dürfen jedoch nicht an der Kommunikation teilnehmen.',
        correct: false,
      },
      {
        text: 'Unter dem Einzelruf wird eine Punkt-zu-Punkt-Verbindung zwischen zwei Teilnehmern verstanden.',
        correct: true,
      },
    ],
  },
  // Seite 7
  {
    question:
      'Wer ist für das Endgeräte-Management, die Anwenderbetreuung und für den prozessorientierten Service in seinem Zuständigkeitsbereich für den Digitalfunk in Niedersachsen verantwortlich?',
    answers: [
      {
        text: 'Die Koordinierende Stelle Digitalfunk Niedersachsen (KSDN)',
        correct: false,
      },
      {
        text: 'Die Taktisch Technischen Betriebsstellen (TTB)',
        correct: false,
      },
      {
        text: 'Die Autorisierte Stelle Digitalfunk Niedersachsen (ASDN)',
        correct: true,
      },
    ],
  },
  {
    question:
      'Im Digitalfunknetz der BOS werden die Betriebsarten „Netzbetrieb“ (TMO - Trunked Mode Operation) und „netzunabhängiger Betrieb“ (DMO - Direct Mode Operation) unterschieden. Welche Aussage ist hierzu richtig?',
    answers: [
      {
        text: 'Die Betriebsart „Netzbetrieb“ (TMO) ist für Feuerwehren nicht vorgesehen und wird nur von der Polizei verwendet.',
        correct: false,
      },
      {
        text: 'Die Betriebsart „netzunabhängiger Betrieb“ (DMO) ist ausschließlich in Gebäuden zulässig.',
        correct: false,
      },
      {
        text: 'In der Betriebsart „netzunabhängiger Betrieb“ (DMO) können zwei oder mehrere Teilnehmer direkt miteinander kommunizieren, ohne auf die Netzinfrastruktur selbst zugreifen zu müssen.',
        correct: true,
      },
    ],
  },
  {
    question:
      'Welche Einrichtung ist der funkbetriebliche Mittelpunkt eines Funkverkehrsbereiches?',
    answers: [
      { text: 'die große Relaisfunkstelle', correct: false },
      {
        text: 'die Leitstelle',
        correct: true,
      },
      {
        text: 'das Regierungspräsidium',
        correct: false,
      },
    ],
  },
  {
    question:
      'Sie sind als angerufene Sprechfunkbetriebsstelle nicht in der Lage, eine Nachricht sofort aufzunehmen. Welche Anrufantwort ist zu verwenden?',
    answers: [
      { text: '„Hier (Rufname) - ich habe keine Zeit - ENDE“', correct: false },
      {
        text: '„Hier (Rufname) - ich kann Sie nicht aufnehmen - ENDE“',
        correct: false,
      },
      {
        text: '„Hier (Rufname) - warten!“',
        correct: true,
      },
    ],
  },
  {
    question: 'Was kennen Sie nach der DIN 14011 Teil 8 für Meldungsarten?',
    answers: [
      { text: 'Notrufmeldung, Abmeldung, Zurückmeldung', correct: true },
      {
        text: 'Eintreffmeldung, Lagemeldung, Nachforderung',
        correct: true,
      },
      {
        text: 'Bereitmeldung, Schlussmeldung',
        correct: true,
      },
    ],
  },
  {
    question: 'Was versteht man unter dem Begriff „OPTA?',
    answers: [
      { text: 'Ordnung Polizei Taktik Anweisung', correct: false },
      {
        text: 'Objekt Taktik Ausleuchtung',
        correct: false,
      },
      {
        text: 'Operativ Taktische Adresse (Funkrufname)',
        correct: true,
      },
    ],
  },
  {
    question: 'Was versteht man unter dem Begriff Basisstation?',
    answers: [
      {
        text: 'Es ist wie im Analogfunk eine Art Relaisstelle oder Funkzelle.',
        correct: true,
      },
      {
        text: 'Es ist die Ladestation für alle Funkgeräte.',
        correct: false,
      },
      {
        text: 'Es ist die Überleitung vom DMO in den TMO Modus.',
        correct: false,
      },
    ],
  },
  {
    question: 'In welcher Betriebsart findet der Kontakt zur Leitstelle statt?',
    answers: [
      { text: 'DMO (Direktbetrieb)', correct: false },
      {
        text: 'Repeaterschaltung',
        correct: false,
      },
      {
        text: 'TMO (Netzbetrieb)',
        correct: true,
      },
    ],
  },
  // Seite 8
  {
    question: 'Wie kann man im Digitalfunk einen Notruf auslösen?',
    answers: [
      { text: 'Durch drücken der Kennung „0“.', correct: false },
      {
        text: 'Durch drücken der roten Taste am Bedienteil, oder Funkgerät.',
        correct: true,
      },
      {
        text: 'Durch die Durchsage hier ist ein Notruf.',
        correct: false,
      },
    ],
  },
  {
    question: 'Wie kann man schnell vom DMO in den TMO wechseln?',
    answers: [
      { text: 'Durch drücken der roten Taste.', correct: false },
      {
        text: 'Durch drücken der Raute Taste.',
        correct: true,
      },
      {
        text: 'Das ist nur über den ELW zur Leitstelle möglich.',
        correct: false,
      },
    ],
  },
  {
    question:
      'Über welche TMO Gruppe ist für die Feuerwehr die eigene Leitstelle zu erreichen?',
    answers: [
      { text: 'über die Gruppe P_Celle', correct: false },
      {
        text: 'über die Gruppe K_ Celle_2',
        correct: false,
      },
      {
        text: 'über die Gruppe F_Celle_1',
        correct: true,
      },
    ],
  },
  {
    question: 'Wie kann man zur Leitstelle eine Rückmeldung ankündigen?',
    answers: [
      { text: 'Durch Drücken der Kennung „0“', correct: false },
      {
        text: 'Durch Drücken der Kennung „5“',
        correct: true,
      },
      {
        text: 'Durch den Anruf, Leitstelle XY von Florian YX mit Rückmeldung kommen.',
        correct: true,
      },
    ],
  },
  {
    question: 'Was versteht man unter dem Begriff „ISSI“?',
    answers: [
      { text: 'Internationale Sicherheit sicheres Internet', correct: false },
      {
        text: 'jedes Endgerät hat eine eigene ISSI',
        correct: true,
      },
      {
        text: 'Wie die Telefonnummer von einem Endgerät.',
        correct: true,
      },
    ],
  },
  {
    question: 'Was versteht man unter dem Begriff „OPTA“?',
    answers: [
      { text: 'Jedes Endgerät hat eine eigene OPTA', correct: true },
      {
        text: 'Wird auf der BOS - Sicherheitskarte gespeichert',
        correct: true,
      },
      {
        text: 'Wird beim Drücken der Sendetaste übermittelt',
        correct: true,
      },
      {
        text: 'Aus der OPTA leitet sich der gesprochene Funkrufname ab',
        correct: true,
      },
      {
        text: 'Die OPTA besteht aus 24 alphanumerischen Stellen',
        correct: true,
      },
    ],
  },
  {
    question: 'Wie erhalten wir im Digitalfunk eine Abhörsicherheit ?',
    answers: [
      { text: 'Verschlüsselung der Sprache', correct: true },
      {
        text: 'Ende zu Ende Verschlüsselung',
        correct: true,
      },
      {
        text: 'Nur Registrierte Endgeräte können teilnehmen',
        correct: true,
      },
      {
        text: 'BOS – Sicherheitskarte erforderlich',
        correct: true,
      },
    ],
  },
  {
    question:
      'Welche Aussage ist hier richtig? DMO Rufgruppen – Schutzzone der Radioastronomie',
    answers: [
      { text: '', correct: true },
      {
        text: '',
        correct: true,
      },
    ],
  },
];
