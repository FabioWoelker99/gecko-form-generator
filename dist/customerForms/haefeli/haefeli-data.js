const geckoHaefeliForm = {
  requestName: 'winno',
  googleConversionCode: 'AW-10827149179/DtmuCIyTnJMYEPve5Koo',
  steps: [{
    type: 'default',
    label: 'Persönliche Daten',
    stepId: 'personal',
    index: 0,
    saveStep: true,
    rows: [{
      elements: [{
        type: 'text',
        name: 'prename',
        label: 'Vorname',
        mailLabel: 'Vorname',
        placeholder: '',
        autocomplete: 'given-name',
        required: true
      }, {
        type: 'text',
        name: 'surname',
        label: 'Nachname',
        mailLabel: 'Nachname',
        placeholder: '',
        autocomplete: 'family-name',
        required: true
      }]
    }, {
      elements: [{
        type: 'email',
        name: 'email',
        label: 'E-Mail',
        mailLabel: 'E-Mail',
        placeholder: '',
        autocomplete: 'email',
        required: true
      }, {
        type: 'tel',
        name: 'phone',
        label: 'Telefonnummer',
        mailLabel: 'Telefonnummer',
        placeholder: '',
        autocomplete: 'tel',
        required: true
      }]
    }, {
      elements: [{
        type: 'textarea',
        name: 'bemerkung',
        label: 'Bemerkung',
        mailLabel: 'Bemerkung',
        placeholder: 'Ihre Nachricht oder Bemerkung'
      }]
    }, {
      elements: [{
        type: 'radio',
        name: 'umzugsart',
        label: 'Art des Umzugs',
        mailLabel: 'Art des Umzugs',
        required: true,
        trigger: true,
        stepGroups: ['privatumzug', 'firmenumzug'],
        options: [{
          id: 'privatumzug',
          label: 'Privatumzug',
          value: 'Privatumzug',
          stepGroup: 'privatumzug'
        }, {
          id: 'firmenumzug',
          label: 'Firmenumzug',
          value: 'Firmenumzug',
          stepGroup: 'firmenumzug'
        }, {
          id: 'kein_umzug',
          label: 'Kein Umzug',
          value: 'Kein Umzug',
          stepGroup: '',
          default: true
        }]
      }]
    }]
  }, {
    type: 'hidden',
    label: 'Auszugsort',
    stepId: 'auszugsort',
    stepGroup: 'privatumzug',
    index: 1,
    rows: [{
      elements: [{
        type: 'text',
        name: 'auszug_street',
        label: 'Strasse/Hausnummer',
        mailLabel: 'Strasse/Hausnummer',
        placeholder: '',
        autocomplete: 'street-address'
      }]
    }, {
      elements: [{
        type: 'text',
        name: 'auszug_adresszusatz',
        label: 'Adresszusatz',
        mailLabel: 'Adresszusatz',
        placeholder: '',
        autocomplete: ''
      }]
    }, {
      elements: [{
        type: 'text',
        name: 'auszug_ort',
        label: 'Ort',
        mailLabel: 'Ort',
        placeholder: '',
        autocomplete: 'address-level2'
      }, {
        type: 'text',
        name: 'auszug_plz',
        label: 'PLZ',
        mailLabel: 'PLZ',
        placeholder: '',
        autocomplete: 'postal-code'
      }]
    }, {
      elements: [{
        type: 'text',
        name: 'auszug_raeume',
        label: 'Anzahl der Räume',
        mailLabel: 'Anzahl Räume',
        placeholder: 'z.B. 2.5 Zimmer',
        autocomplete: ''
      }, {
        type: 'text',
        name: 'auszug_flaeche',
        label: 'Gesamtfläche',
        mailLabel: 'Gesamtfläche',
        placeholder: 'z.B. 100 m²',
        autocomplete: ''
      }]
    }, {
      elements: [{
        type: 'text',
        name: 'auszug_etage',
        label: 'Etage(n)',
        mailLabel: 'Etage(n)',
        placeholder: 'z.B. 5 oder 3-5',
        autocomplete: ''
      }, {
        type: 'text',
        name: 'auszug_personen',
        label: 'Umziehende Personen',
        mailLabel: 'Umziehende Personen',
        placeholder: 'z.B. 2 Erw. 3 Kinder',
        autocomplete: ''
      }]
    }, {
      elements: [{
        type: 'radio',
        name: 'auszug_umzugsart',
        label: 'Art des Umzugs',
        mailLabel: 'Art des Umzugs',
        required: true,
        trigger: true,
        stepGroups: '',
        options: [{
          id: 'auszug_haus',
          label: 'Haus',
          value: 'Haus',
          stepGroup: ''
        }, {
          id: 'auszug_wohnung',
          label: 'Wohnung',
          value: 'Wohnung',
          stepGroup: ''
        }, {
          id: 'auszug_anderes',
          label: 'Anderes',
          value: 'Anderes',
          stepGroup: '',
          default: true
        }]
      }, {
        type: 'checkbox',
        name: 'auszug_aufzug',
        label: 'Aufzug',
        mailLabel: 'Aufzug',
        trigger: true,
        options: [{
          id: 'auszug_aufzug_vorhanden',
          label: 'Vorhanden',
          value: 'Vorhanden',
          stepGroup: ''
        }]
      }]
    }, {
      elements: [{
        type: 'checkbox',
        name: 'auszug_zusaetzliche_raeume',
        label: 'Zusätzliche Räume',
        mailLabel: 'Zusätzliche Räume',
        trigger: true,
        options: [{
          id: 'auszug_dachboden',
          label: 'Dachboden',
          value: 'Dachboden',
          stepGroup: ''
        }, {
          id: 'auszug_keller',
          label: 'Keller',
          value: 'Keller',
          stepGroup: ''
        }]
      }, {
        type: 'checkbox',
        name: 'auszug_zusaetzliche_leistungen',
        label: 'Zusätzliche Leistungen',
        mailLabel: 'Zusätzliche Leistungen',
        trigger: true,
        options: [{
          id: 'auszug_demontage',
          label: 'Demontage',
          value: 'Demontage',
          stepGroup: ''
        }, {
          id: 'auszug_karton',
          label: 'Karton einpacken',
          value: 'Karton einpacken',
          stepGroup: ''
        }, {
          id: 'auszug_moebel',
          label: 'Möbel abbauen',
          value: 'Möbel abbauen',
          stepGroup: ''
        }]
      }]
    }, {
      elements: [{
        type: 'text',
        name: 'auszug_bezahlung',
        label: 'Der Umzug wird bezahlt von',
        mailLabel: 'Bezahlung',
        placeholder: 'z.B. Privat, Firma, Sozial, etc.',
        autocomplete: ''
      }, {
        type: 'text',
        name: 'auszug_datum',
        label: 'gewünschtes Auszugsdatum',
        mailLabel: 'Auszugsdatum',
        placeholder: 'dd.mm.yyyy',
        autocomplete: ''
      }]
    }, {
      elements: [{
        type: 'textarea',
        name: 'auszug_bemerkung',
        label: 'Bemerkung',
        mailLabel: 'Bemerkung',
        placeholder: 'Ihre Nachricht oder Bemerkung'
      }]
    }]
  }, {
    type: 'hidden',
    label: 'Einzugsort',
    stepId: 'einzugsort',
    stepGroup: 'privatumzug',
    index: 1,
    rows: [{
      elements: [{
        type: 'text',
        name: 'einzug_street',
        label: 'Strasse/Hausnummer',
        mailLabel: 'Strasse/Hausnummer',
        placeholder: '',
        autocomplete: ''
      }]
    }, {
      elements: [{
        type: 'text',
        name: 'einzug_adresszusatz',
        label: 'Adresszusatz',
        mailLabel: 'Adresszusatz',
        placeholder: '',
        autocomplete: ''
      }]
    }, {
      elements: [{
        type: 'text',
        name: 'einzug_ort',
        label: 'Ort',
        mailLabel: 'Ort',
        placeholder: '',
        autocomplete: ''
      }, {
        type: 'text',
        name: 'einzug_plz',
        label: 'PLZ',
        mailLabel: 'PLZ',
        placeholder: '',
        autocomplete: ''
      }]
    }, {
      elements: [{
        type: 'text',
        name: 'einzug_etage',
        label: 'Etage(n)',
        mailLabel: 'Etage(n)',
        placeholder: 'z.B. 5 oder 3-5',
        autocomplete: ''
      }, {
        type: 'text',
        name: 'einzug_datum',
        label: 'gewünschtes Einzugsdatum',
        mailLabel: 'Einzugsdatum',
        placeholder: 'dd.mm.yyyy',
        autocomplete: ''
      }]
    }, {
      elements: [{
        type: 'radio',
        name: 'einzug_umzugsart',
        label: 'Art des Umzugs',
        mailLabel: 'Art des Umzugs',
        required: true,
        trigger: true,
        stepGroups: '',
        options: [{
          id: 'einzug_haus',
          label: 'Haus',
          value: 'Haus',
          stepGroup: ''
        }, {
          id: 'einzug_wohnung',
          label: 'Wohnung',
          value: 'Wohnung',
          stepGroup: ''
        }, {
          id: 'einzug_anderes',
          label: 'Anderes',
          value: 'Anderes',
          stepGroup: '',
          default: true
        }]
      }, {
        type: 'checkbox',
        name: 'einzug_aufzug',
        label: 'Aufzug',
        mailLabel: 'Aufzug',
        trigger: true,
        options: [{
          id: 'einzug_aufzug_vorhanden',
          label: 'Vorhanden',
          value: 'Vorhanden',
          stepGroup: ''
        }]
      }]
    }, {
      elements: [{
        type: 'checkbox',
        name: 'einzug_zusaetzliche_leistungen',
        label: 'Zusätzliche Leistungen',
        mailLabel: 'Zusätzliche Leistungen',
        trigger: true,
        options: [{
          id: 'einzug_küche',
          label: 'Küche aufbauen',
          value: 'Küche aufbauen',
          stepGroup: ''
        }, {
          id: 'einzug_montage',
          label: 'Montage',
          value: 'Montage',
          stepGroup: ''
        }, {
          id: 'einzug_karton',
          label: 'Karton auspacken',
          value: 'Karton auspacken',
          stepGroup: ''
        }, {
          id: 'einzug_moebel',
          label: 'Möbel aufbauen',
          value: 'Möbel aufbauen',
          stepGroup: ''
        }]
      }]
    }, {
      elements: [{
        type: 'textarea',
        name: 'einzug_bemerkung',
        label: 'Bemerkung',
        mailLabel: 'Bemerkung',
        placeholder: 'Ihre Nachricht oder Bemerkung'
      }]
    }]
  }, {
    type: 'hidden',
    label: 'Auszugsort Firma',
    stepId: 'firma_auszugsort',
    stepGroup: 'firmenumzug',
    index: 1,
    rows: [{
      elements: [{
        type: 'text',
        name: 'firma_auszug_street',
        label: 'Strasse/Hausnummer',
        mailLabel: 'Strasse/Hausnummer',
        placeholder: '',
        autocomplete: 'street-address'
      }]
    }, {
      elements: [{
        type: 'text',
        name: 'firma_auszug_adresszusatz',
        label: 'Adresszusatz',
        mailLabel: 'Adresszusatz',
        placeholder: '',
        autocomplete: ''
      }]
    }, {
      elements: [{
        type: 'text',
        name: 'firma_auszug_ort',
        label: 'Ort',
        mailLabel: 'Ort',
        placeholder: '',
        autocomplete: 'address-level2'
      }, {
        type: 'text',
        name: 'firma_auszug_plz',
        label: 'PLZ',
        mailLabel: 'PLZ',
        placeholder: '',
        autocomplete: 'postal-code'
      }]
    }, {
      elements: [{
        type: 'text',
        name: 'firma_auszug_raeume',
        label: 'Anzahl der Räume',
        mailLabel: 'Anzahl Räume',
        placeholder: 'z.B. 2.5 Zimmer',
        autocomplete: ''
      }, {
        type: 'text',
        name: 'firma_auszug_flaeche',
        label: 'Gesamtfläche',
        mailLabel: 'Gesamtfläche',
        placeholder: 'z.B. 200 m²',
        autocomplete: ''
      }]
    }, {
      elements: [{
        type: 'text',
        name: 'firma_auszug_etage',
        label: 'Etage(n)',
        mailLabel: 'Etage(n)',
        placeholder: 'z.B. 5 oder 3-5',
        autocomplete: ''
      }, {
        type: 'text',
        name: 'firma_auszug_arbeitsplaetze',
        label: 'Arbeitsplätze',
        mailLabel: 'Arbeitsplätze',
        placeholder: 'z.B. 20',
        autocomplete: ''
      }]
    }, {
      elements: [{
        type: 'text',
        name: 'firma_auszug_datum',
        label: 'gewünschtes Auszugsdatum',
        mailLabel: 'Auszugsdatum',
        placeholder: 'dd.mm.yyyy',
        autocomplete: ''
      }, {
        type: 'checkbox',
        name: 'firma_auszug_aufzug',
        label: 'Aufzug',
        mailLabel: 'Aufzug',
        trigger: true,
        options: [{
          id: 'auszug_aufzug_vorhanden',
          label: 'Vorhanden',
          value: 'Vorhanden',
          stepGroup: ''
        }]
      }, {
        type: 'checkbox',
        name: 'firma_auszug_zusaetzliche_leistungen',
        label: 'Zusätzliche Leistungen',
        mailLabel: 'Zusätzliche Leistungen',
        trigger: true,
        options: [{
          id: 'firma_auszug_demontage',
          label: 'Demontage',
          value: 'Demontage',
          stepGroup: ''
        }, {
          id: 'firma_auszug_karton',
          label: 'Karton einpacken',
          value: 'Karton einpacken',
          stepGroup: ''
        }, {
          id: 'firma_auszug_moebel',
          label: 'Möbel abbauen',
          value: 'Möbel abbauen',
          stepGroup: ''
        }]
      }]
    }, {
      elements: [{
        type: 'textarea',
        name: 'firma_auszug_bemerkung',
        label: 'Bemerkung',
        mailLabel: 'Bemerkung',
        placeholder: 'Ihre Nachricht oder Bemerkung'
      }]
    }]
  }, {
    type: 'hidden',
    label: 'Einzugsort Firma',
    stepId: 'firma_einzugsort',
    stepGroup: 'firmenumzug',
    index: 1,
    rows: [{
      elements: [{
        type: 'text',
        name: 'firma_einzug_street',
        label: 'Strasse/Hausnummer',
        mailLabel: 'Strasse/Hausnummer',
        placeholder: '',
        autocomplete: ''
      }]
    }, {
      elements: [{
        type: 'text',
        name: 'firma_einzug_adresszusatz',
        label: 'Adresszusatz',
        mailLabel: 'Adresszusatz',
        placeholder: '',
        autocomplete: ''
      }]
    }, {
      elements: [{
        type: 'text',
        name: 'firma_einzug_ort',
        label: 'Ort',
        mailLabel: 'Ort',
        placeholder: '',
        autocomplete: ''
      }, {
        type: 'text',
        name: 'firma_einzug_plz',
        label: 'PLZ',
        mailLabel: 'PLZ',
        placeholder: '',
        autocomplete: ''
      }]
    }, {
      elements: [{
        type: 'text',
        name: 'firma_einzug_etage',
        label: 'Etage(n)',
        mailLabel: 'Etage(n)',
        placeholder: 'z.B. 5 oder 3-5',
        autocomplete: ''
      }, {
        type: 'text',
        name: 'firma_einzug_datum',
        label: 'gewünschtes Einzugsdatum',
        mailLabel: 'Einzugsdatum',
        placeholder: 'dd.mm.yyyy',
        autocomplete: ''
      }]
    }, {
      elements: [{
        type: 'checkbox',
        name: 'firma_einzug_aufzug',
        label: 'Aufzug',
        mailLabel: 'Aufzug',
        trigger: true,
        options: [{
          id: 'firma_einzug_aufzug_vorhanden',
          label: 'Vorhanden',
          value: 'Vorhanden',
          stepGroup: ''
        }]
      }, {
        type: 'checkbox',
        name: 'firma_einzug_zusaetzliche_leistungen',
        label: 'Zusätzliche Leistungen',
        mailLabel: 'Zusätzliche Leistungen',
        trigger: true,
        options: [{
          id: 'firma_einzug_montage',
          label: 'Montage',
          value: 'Montage',
          stepGroup: ''
        }, {
          id: 'firma_einzug_karton',
          label: 'Karton auspacken',
          value: 'Karton auspacken',
          stepGroup: ''
        }, {
          id: 'firma_einzug_moebel',
          label: 'Möbel aufbauen',
          value: 'Möbel aufbauen',
          stepGroup: ''
        }]
      }]
    }, {
      elements: [{
        type: 'textarea',
        name: 'firma_einzug_bemerkung',
        label: 'Bemerkung',
        mailLabel: 'Bemerkung',
        placeholder: 'Ihre Nachricht oder Bemerkung'
      }]
    }]
  }, {
    type: 'default',
    label: 'Leistungen',
    stepId: 'leistungen',
    index: 2,
    rows: [{
      elements: [{
        type: 'checkbox',
        name: 'leistungen',
        label: 'Weitere Leistungen',
        mailLabel: 'Leistungen',
        trigger: true,
        options: [{
          id: 'reinigung',
          label: 'Reinigung',
          value: 'Reinigung',
          stepGroup: 'reinigung'
        }, {
          id: 'lagerung',
          label: 'Lagerung',
          value: 'Lagerung',
          stepGroup: 'lagerung'
        }, {
          id: 'treppensteiger',
          label: 'Treppensteiger',
          value: 'Treppensteiger',
          stepGroup: 'treppensteiger'
        }, {
          id: 'moebellift',
          label: 'Möbellift',
          value: 'Möbellift',
          stepGroup: 'moebellift'
        }, {
          id: 'entsorgung',
          label: 'Entsorgung',
          value: 'Entsorgung',
          stepGroup: 'entsorgung'
        }]
      }]
    }]
  }, {
    type: 'hidden',
    label: 'Reinigung',
    stepId: 'reinigung',
    stepGroup: 'reinigung',
    index: 3,
    rows: [{
      elements: [{
        type: 'text',
        name: 'reinigung_beginn_datum',
        label: 'Reinigungstermin',
        mailLabel: 'Reinigungstermin',
        placeholder: 'dd.mm.yyyy',
        autocomplete: ''
      }, {
        type: 'text',
        name: 'reinigung_beginn_uhrzeit',
        label: 'Uhrzeit',
        mailLabel: 'Uhrzeit',
        placeholder: 'z.B. 07:30 Uhr',
        autocomplete: ''
      }]
    }, {
      elements: [{
        type: 'text',
        name: 'reinigung_ende_datum',
        label: 'Abgabetermin',
        mailLabel: 'Abgabetermin',
        placeholder: 'dd.mm.yyyy',
        autocomplete: ''
      }, {
        type: 'text',
        name: 'reinigung_ende_uhrzeit',
        label: 'Uhrzeit',
        mailLabel: 'Uhrzeit',
        placeholder: 'z.B. 14:00 Uhr',
        autocomplete: ''
      }]
    }, {
      elements: [{
        type: 'text',
        name: 'reinigung_raeume',
        label: 'Anzahl der Räume',
        mailLabel: 'Anzahl Räume',
        placeholder: 'z.B. 2.5 Zimmer',
        autocomplete: ''
      }, {
        type: 'text',
        name: 'reinigung_flaeche',
        label: 'Gesamtfläche',
        mailLabel: 'Gesamtfläche',
        placeholder: 'z.B. 200 m²',
        autocomplete: ''
      }]
    }, {
      elements: [{
        type: 'checkbox',
        name: 'reinigung_zusaetzliche_leistungen',
        label: 'Zusätzliche Leistungen',
        mailLabel: 'Zusätzliche Leistungen',
        trigger: true,
        options: [{
          id: 'reinigung_teppich_schamponieren',
          label: 'Teppich schamponieren',
          value: 'Teppich schamponieren',
          stepGroup: ''
        }, {
          id: 'reinigung_steinplatten',
          label: 'Steinplatten',
          value: 'Steinplatten',
          stepGroup: ''
        }, {
          id: 'reinigung_parkett',
          label: 'Parkett',
          value: 'Parkett',
          stepGroup: ''
        }, {
          id: 'reinigung_wintergarten',
          label: 'Wintergarten',
          value: 'Wintergarten',
          stepGroup: ''
        }, {
          id: 'reinigung_aussensitzplatz',
          label: 'Aussensitzplatz',
          value: 'Aussensitzplatz',
          stepGroup: ''
        }, {
          id: 'reinigung_entsorgung',
          label: 'Entsorgung',
          value: 'Entsorgung',
          stepGroup: ''
        }]
      }]
    }, {
      elements: [{
        type: 'textarea',
        name: 'reinigung_bemerkung',
        label: 'Bemerkung',
        mailLabel: 'Bemerkung',
        placeholder: 'Ihre Nachricht oder Bemerkung'
      }]
    }]
  }, {
    type: 'hidden',
    label: 'Lagerung',
    stepId: 'lagerung',
    stepGroup: 'lagerung',
    index: 3,
    rows: [{
      elements: [{
        type: 'text',
        name: 'lagerung_beginn_datum',
        label: 'Lagerungs Beginn',
        mailLabel: 'Lagerungs Beginn',
        placeholder: 'dd.mm.yyyy',
        autocomplete: ''
      }, {
        type: 'text',
        name: 'lagerung_ende_datum',
        label: 'Lagerungs Ende',
        mailLabel: 'Lagerungs Ende',
        placeholder: 'dd.mm.yyyy',
        autocomplete: ''
      }]
    }, {
      elements: [{
        type: 'text',
        name: 'lagerung_volumen',
        label: 'Volumen',
        mailLabel: 'Volumen',
        placeholder: 'z.B. 10m³',
        autocomplete: ''
      }, {
        type: 'checkbox',
        name: 'lagerung_abholung',
        label: 'Abholung',
        mailLabel: 'Abholung',
        trigger: true,
        options: [{
          id: 'ja',
          label: 'Ja',
          value: 'Ja',
          stepGroup: ''
        }]
      }]
    }, {
      elements: [{
        type: 'text',
        name: 'lagerung_street',
        label: 'Strasse/Hausnummer',
        mailLabel: 'Strasse/Hausnummer',
        placeholder: '',
        autocomplete: 'street-address'
      }]
    }, {
      elements: [{
        type: 'text',
        name: 'lagerung_adresszusatz',
        label: 'Adresszusatz',
        mailLabel: 'Adresszusatz',
        placeholder: '',
        autocomplete: ''
      }]
    }, {
      elements: [{
        type: 'text',
        name: 'lagerung_ort',
        label: 'Ort',
        mailLabel: 'Ort',
        placeholder: '',
        autocomplete: 'address-level2'
      }, {
        type: 'text',
        name: 'lagerung_plz',
        label: 'PLZ',
        mailLabel: 'PLZ',
        placeholder: '',
        autocomplete: 'postal-code'
      }]
    }, {
      elements: [{
        type: 'textarea',
        name: 'lagerung_bemerkung',
        label: 'Bemerkung',
        mailLabel: 'Bemerkung',
        placeholder: 'Ihre Nachricht oder Bemerkung'
      }]
    }]
  }, {
    type: 'hidden',
    label: 'Treppensteiger',
    stepId: 'treppensteiger',
    stepGroup: 'treppensteiger',
    index: 3,
    rows: [{
      elements: [{
        type: 'text',
        name: 'treppensteiger_beginn_datum',
        label: 'Startdatum',
        mailLabel: 'Startdatum',
        placeholder: 'dd.mm.yyyy',
        autocomplete: ''
      }, {
        type: 'text',
        name: 'treppensteiger_beginn_uhrzeit',
        label: 'Uhrzeit',
        mailLabel: 'Uhrzeit',
        placeholder: 'z.B. 07:30 Uhr',
        autocomplete: ''
      }]
    }, {
      elements: [{
        type: 'text',
        name: 'treppensteiger_ende_datum',
        label: 'Enddatum',
        mailLabel: 'Enddatum',
        placeholder: 'dd.mm.yyyy',
        autocomplete: ''
      }, {
        type: 'text',
        name: 'treppensteiger_ende_uhrzeit',
        label: 'Uhrzeit',
        mailLabel: 'Uhrzeit',
        placeholder: 'z.B. 14:00 Uhr',
        autocomplete: ''
      }]
    }, {
      elements: [{
        type: 'text',
        name: 'treppensteiger_helfer',
        label: 'Anzahl Umzugshelfer',
        mailLabel: 'Anzahl Umzugshelfer',
        placeholder: 'mind. 1',
        autocomplete: ''
      }]
    }, {
      elements: [{
        type: 'textarea',
        name: 'treppensteiger_bemerkung',
        label: 'Bemerkung',
        mailLabel: 'Bemerkung',
        placeholder: 'Ihre Nachricht oder Bemerkung'
      }]
    }]
  }, {
    type: 'hidden',
    label: 'Möbellift',
    stepId: 'moebellift',
    stepGroup: 'moebellift',
    index: 3,
    rows: [{
      elements: [{
        type: 'text',
        name: 'moebellift_beginn_datum',
        label: 'Startdatum',
        mailLabel: 'Startdatum',
        placeholder: 'dd.mm.yyyy',
        autocomplete: ''
      }, {
        type: 'text',
        name: 'moebellift_beginn_uhrzeit',
        label: 'Uhrzeit',
        mailLabel: 'Uhrzeit',
        placeholder: 'z.B. 07:30 Uhr',
        autocomplete: ''
      }]
    }, {
      elements: [{
        type: 'text',
        name: 'moebellift_ende_datum',
        label: 'Enddatum',
        mailLabel: 'Enddatum',
        placeholder: 'dd.mm.yyyy',
        autocomplete: ''
      }, {
        type: 'text',
        name: 'moebellift_ende_uhrzeit',
        label: 'Uhrzeit',
        mailLabel: 'Uhrzeit',
        placeholder: 'z.B. 14:00 Uhr',
        autocomplete: ''
      }]
    }, {
      elements: [{
        type: 'text',
        name: 'moebellift_helfer',
        label: 'Anzahl Umzugshelfer',
        mailLabel: 'Anzahl Umzugshelfer',
        placeholder: 'mind. 1',
        autocomplete: ''
      }]
    }, {
      elements: [{
        type: 'textarea',
        name: 'moebellift_bemerkung',
        label: 'Bemerkung',
        mailLabel: 'Bemerkung',
        placeholder: 'Ihre Nachricht oder Bemerkung'
      }]
    }]
  }, {
    type: 'hidden',
    label: 'Entsorgung',
    stepId: 'entsorgung',
    stepGroup: 'entsorgung',
    index: 3,
    rows: [{
      elements: [{
        type: 'text',
        name: 'entsorgung_datum',
        label: 'Entsorgungstermin',
        mailLabel: 'Entsorgungstermin',
        placeholder: 'dd.mm.yyyy',
        autocomplete: ''
      }, {
        type: 'text',
        name: 'entsorgung_uhrzeit',
        label: 'Uhrzeit',
        mailLabel: 'Uhrzeit',
        placeholder: 'z.B. 07:30 Uhr',
        autocomplete: ''
      }]
    }, {
      elements: [{
        type: 'text',
        name: 'entsorgung_stuecke',
        label: 'Packstücke',
        mailLabel: 'Packstücke',
        placeholder: 'z.B. 1 Tisch, Büroausstattung, etc.',
        autocomplete: ''
      }, {
        type: 'text',
        name: 'entsorgung_gewicht',
        label: 'Gewicht',
        mailLabel: 'Gewicht',
        placeholder: 'z.B. 250kg',
        autocomplete: ''
      }, {
        type: 'text',
        name: 'entsorgung_volumen',
        label: 'Volumen',
        mailLabel: 'Volumen',
        placeholder: 'z.B. 10m³',
        autocomplete: ''
      }]
    }, {
      elements: [{
        type: 'text',
        name: 'entsorgung_street',
        label: 'Strasse/Hausnummer',
        mailLabel: 'Strasse/Hausnummer',
        placeholder: '',
        autocomplete: 'street-address'
      }]
    }, {
      elements: [{
        type: 'text',
        name: 'entsorgung_adresszusatz',
        label: 'Adresszusatz',
        mailLabel: 'Adresszusatz',
        placeholder: '',
        autocomplete: ''
      }]
    }, {
      elements: [{
        type: 'text',
        name: 'entsorgung_ort',
        label: 'Ort',
        mailLabel: 'Ort',
        placeholder: '',
        autocomplete: 'address-level2'
      }, {
        type: 'text',
        name: 'entsorgung_plz',
        label: 'PLZ',
        mailLabel: 'PLZ',
        placeholder: '',
        autocomplete: 'postal-code'
      }]
    }, {
      elements: [{
        type: 'textarea',
        name: 'entsorgung_bemerkung',
        label: 'Bemerkung',
        mailLabel: 'Bemerkung',
        placeholder: 'Ihre Nachricht oder Bemerkung'
      }]
    }]
  }, {
    type: 'hidden',
    label: 'Transport',
    stepId: 'transport',
    stepGroup: 'transport',
    index: 3,
    rows: [{
      elements: [{
        type: 'text',
        name: 'transport_datum',
        label: 'Transporttermin',
        mailLabel: 'Transporttermin',
        placeholder: 'dd.mm.yyyy',
        autocomplete: ''
      }, {
        type: 'text',
        name: 'transport_uhrzeit',
        label: 'Uhrzeit',
        mailLabel: 'Uhrzeit',
        placeholder: 'z.B. 07:30 Uhr',
        autocomplete: ''
      }]
    }, {
      elements: [{
        type: 'text',
        name: 'transport_Warenbezeichnung',
        label: 'Warenbezeichnung',
        mailLabel: 'Warenbezeichnung',
        placeholder: 'z.B. 1 Tisch, Büroausstattung, etc.',
        autocomplete: ''
      }, {
        type: 'text',
        name: 'transport_gewicht',
        label: 'Gewicht',
        mailLabel: 'Gewicht',
        placeholder: 'z.B. 250kg',
        autocomplete: ''
      }, {
        type: 'text',
        name: 'transport_volumen',
        label: 'Volumen',
        mailLabel: 'Volumen',
        placeholder: 'z.B. 10m³',
        autocomplete: ''
      }]
    }, {
      elements: [{
        type: 'text',
        name: 'transport_auflade_street',
        label: 'Auflade Strasse/Hausnummer',
        mailLabel: 'Auflade Strasse/Hausnummer',
        placeholder: '',
        autocomplete: 'street-address'
      }]
    }, {
      elements: [{
        type: 'text',
        name: 'transport_auflade_adresszusatz',
        label: 'Auflade Adresszusatz',
        mailLabel: 'Auflade Adresszusatz',
        placeholder: '',
        autocomplete: ''
      }]
    }, {
      elements: [{
        type: 'text',
        name: 'transport_auflade_ort',
        label: 'Auflade Ort',
        mailLabel: 'Auflade Ort',
        placeholder: '',
        autocomplete: 'address-level2'
      }, {
        type: 'text',
        name: 'transport_auflade_plz',
        label: 'Auflade PLZ',
        mailLabel: 'Auflade PLZ',
        placeholder: '',
        autocomplete: 'postal-code'
      }]
    }, {
      elements: [{
        type: 'text',
        name: 'transport_ablade_street',
        label: 'Ablade Strasse/Hausnummer',
        mailLabel: 'Ablade Strasse/Hausnummer',
        placeholder: '',
        autocomplete: ''
      }]
    }, {
      elements: [{
        type: 'text',
        name: 'transport_ablade_adresszusatz',
        label: 'Ablade Adresszusatz',
        mailLabel: 'Ablade Adresszusatz',
        placeholder: '',
        autocomplete: ''
      }]
    }, {
      elements: [{
        type: 'text',
        name: 'transport_ablade_ort',
        label: 'Ablade Ort',
        mailLabel: 'Ablade Ort',
        placeholder: '',
        autocomplete: ''
      }, {
        type: 'text',
        name: 'transport_ablade_plz',
        label: 'Ablade PLZ',
        mailLabel: 'Ablade PLZ',
        placeholder: '',
        autocomplete: ''
      }]
    }, {
      elements: [{
        type: 'textarea',
        name: 'transport_bemerkung',
        label: 'Bemerkung',
        mailLabel: 'Bemerkung',
        placeholder: 'Ihre Nachricht oder Bemerkung'
      }]
    }]
  }]
};