const geckoHaefeliForm = {
    requestName: 'winno',
    steps: [
        {
            type: 'default',
            label: 'Persönliche Daten',
            stepId: 'personal',
            rows: [
                {
                    elements: [
                        {
                            type: 'text',
                            placeholder: 'Vorname',
                            required: true,
                            autocomplete: 'given-name',
                            label: 'Name',
                            name: 'surname',
                        },
                        {
                            type: 'text',
                            placeholder: 'Nachname',
                            required: true,
                            autocomplete: 'family-name',
                            name: 'name',
                        }
                    ]
                },
                {
                    elements: [
                        {
                            type: 'email',
                            placeholder: 'max.muster@company.com',
                            required: true,
                            autocomplete: 'email',
                            label: 'E-Mail',
                            name: 'email',
                        },
                    ]
                },
                {
                    elements: [
                        {
                            type: 'tel',
                            placeholder: '+41 00 000 00 00',
                            required: true,
                            autocomplete: 'tel',
                            label: 'Telefonnummer',
                            name: 'telefon',
                        },
                    ]
                },
                {
                    elements: [
                        {
                            type: 'textarea',
                            placeholder: 'Ihre Nachricht oder Bemerkung',
                            required: false,
                            label: 'Nachricht',
                            name: 'nachricht',
                        },
                    ]
                },
                {
                    elements: [
                        {
                            type: 'radio',
                            required: true,
                            label: 'Art des Umzugs',
                            name: 'umzugsart',
                            trigger: true,
                            stepGroups: ['privatumzug', 'firmenumzug'],
                            options: [
                                {
                                    label: 'Privatumzug',
                                    value: 'privatumzug',
                                    id: 'privatumzug',
                                    stepGroup: 'privatumzug',
                                },
                                {
                                    label: 'Firmenumzug',
                                    value: 'firmenumzug',
                                    id: 'firmenumzug',
                                    stepGroup: 'firmenumzug',
                                },
                                {
                                    label: 'Kein Umzug',
                                    value: 'kein_umzug',
                                    id: 'kein_umzug',
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            type: 'hidden',
            label: 'Auszugsort',
            stepId: 'auszugsort',
            stepGroup: 'privatumzug',
            rows: [
                {
                    elements: [
                        {
                            type: 'text',
                            placeholder: 'Musterstrasse',
                            required: false,
                            label: 'Strasse',
                            name: 'auszug_strasse',
                        },
                        {
                            type: 'text',
                            placeholder: 'Hausnummer',
                            required: false,
                            label: 'Hausnummer',
                            name: 'auszug_hausnummer',
                        }
                    ]
                },
                {
                    elements: [
                        {
                            type: 'text',
                            placeholder: 'Adresszusatz',
                            required: false,
                            label: 'Adresszusatz',
                            name: 'auszug_adresszusatz',
                        }
                    ]
                },
                {
                    elements: [
                        {
                            type: 'text',
                            placeholder: 'Ort',
                            required: false,
                            label: 'Ort',
                            name: 'auszug_ort',
                        },
                        {
                            type: 'text',
                            placeholder: '0000',
                            required: false,
                            label: 'PLZ',
                            name: 'auszug_plz',
                        }
                    ]
                },
                {
                    elements: [
                        {
                            type: 'text',
                            placeholder: '2.5 Zimmer',
                            required: false,
                            label: 'Anzahl der Räume',
                            name: 'auszug_anzahl_räume',
                        },
                        {
                            type: 'text',
                            placeholder: '100 m²',
                            required: false,
                            label: 'Gesamtfläche',
                            name: 'auszug_gesamtfläche',
                        },
                    ]
                },
                {
                    elements: [
                        {
                            type: 'text',
                            placeholder: 'Etage',
                            required: false,
                            label: 'Etage',
                            name: 'auszug_etage',
                        },
                        {
                            type: 'text',
                            placeholder: 'Personen',
                            required: false,
                            label: 'Anzahl der umziehenden Personen',
                            name: 'auszug_personen',
                        }
                    ]
                },
                {
                    elements: [
                        {
                            type: 'text',
                            placeholder: 'dd.mm.yyyy',
                            required: false,
                            label: 'Der Umzug wird bezahlt von',
                            name: 'auszug_bezahlung',
                        },
                        {
                            type: 'text',
                            placeholder: 'dd.mm.yyyy',
                            required: false,
                            label: 'gewünschtes Datum Auszug',
                            name: 'auszug_datum',
                        }
                    ]
                },
                {
                    elements: [
                        {
                            type: 'textarea',
                            placeholder: 'Ihre Nachricht',
                            required: false,
                            label: 'Bemerkung',
                            name: 'auszug_bemerkung',
                        }
                    ]
                },
            ]
        },
        {
            type: 'hidden',
            label: 'Einzugsort',
            stepId: 'einzugsort',
            stepGroup: 'privatumzug',
            rows: [
                {
                    elements: [
                        {
                            type: 'text',
                            placeholder: 'Musterstrasse',
                            required: false,
                            label: 'Strasse',
                            name: 'einzug_strasse',
                        },
                        {
                            type: 'text',
                            placeholder: 'Hausnummer',
                            required: false,
                            label: 'Hausnummer',
                            name: 'einzug_hausnummer',
                        }
                    ]
                },
                {
                    elements: [
                        {
                            type: 'text',
                            placeholder: 'Adresszusatz',
                            required: false,
                            label: 'Adresszusatz',
                            name: 'einzug_adresszusatz',
                        }
                    ]
                },
                {
                    elements: [
                        {
                            type: 'text',
                            placeholder: 'Ort',
                            required: false,
                            label: 'Ort',
                            name: 'einzug_ort',
                        },
                        {
                            type: 'text',
                            placeholder: '0000',
                            required: false,
                            label: 'PLZ',
                            name: 'einzug_plz',
                        }
                    ]
                },
                {
                    elements: [
                        {
                            type: 'text',
                            placeholder: 'Etage',
                            required: false,
                            label: 'Etage',
                            name: 'einzug_etage',
                        },
                        {
                            type: 'text',
                            placeholder: 'dd.mm.yyyy',
                            required: false,
                            label: 'gewünschtes Datum Einzug',
                            name: 'einzug_datum',
                        }
                    ]
                },
                {
                    elements: [
                        {
                            type: 'textarea',
                            placeholder: 'Ihre Nachricht',
                            required: false,
                            label: 'Bemerkung',
                            name: 'einzug_bemerkung',
                        }
                    ]
                },
            ]
        },
        {
            type: 'hidden',
            label: 'Auszugsort Firma',
            stepId: 'auszugsort_firma',
            stepGroup: 'firmenumzug',
            rows: [
                {
                    elements: [
                        {
                            type: 'text',
                            placeholder: 'Musterstrasse',
                            required: false,
                            label: 'Strasse',
                            name: 'auszug_firma_strasse',
                        },
                        {
                            type: 'text',
                            placeholder: 'Hausnummer',
                            required: false,
                            label: 'Hausnummer',
                            name: 'auszug_firma_hausnummer',
                        }
                    ]
                },
                {
                    elements: [
                        {
                            type: 'text',
                            placeholder: 'Adresszusatz',
                            required: false,
                            label: 'Adresszusatz',
                            name: 'auszug_firma_adresszusatz',
                        }
                    ]
                },
                {
                    elements: [
                        {
                            type: 'text',
                            placeholder: 'Ort',
                            required: false,
                            label: 'Ort',
                            name: 'auszug_firma_ort',
                        },
                        {
                            type: 'text',
                            placeholder: '0000',
                            required: false,
                            label: 'PLZ',
                            name: 'auszug_firma_plz',
                        }
                    ]
                },
                {
                    elements: [
                        {
                            type: 'text',
                            placeholder: '2.5 Zimmer',
                            required: false,
                            label: 'Anzahl der Räume',
                            name: 'auszug_firma_anzahl_räume',
                        },
                        {
                            type: 'text',
                            placeholder: '100 m²',
                            required: false,
                            label: 'Gesamtfläche',
                            name: 'auszug_firma_gesamtfläche',
                        }
                    ]
                },
                {
                    elements: [
                        {
                            type: 'text',
                            placeholder: 'Etage',
                            required: false,
                            label: 'Etage',
                            name: 'auszug_firma_etage',
                        },
                        {
                            type: 'text',
                            placeholder: 'Personen',
                            required: false,
                            label: 'Anzahl der Arbeitsplätze',
                            name: 'auszug_firma_personen',
                        }
                    ]
                },
                {
                    elements: [
                        {
                            type: 'text',
                            placeholder: 'dd.mm.yyyy',
                            required: false,
                            label: 'gewünschtes Datum Auszug',
                            name: 'auszug_firma_datum',
                        }
                    ]
                },
                {
                    elements: [
                        {
                            type: 'textarea',
                            placeholder: 'Ihre Nachricht',
                            required: false,
                            label: 'Bemerkung',
                            name: 'auszug_bemerkung',
                        }
                    ]
                },
            ]
        },
        {
            type: 'hidden',
            label: 'Einzugsort Firma',
            stepId: 'einzugsort_firma',
            stepGroup: 'firmenumzug',
            rows: [
                {
                    elements: [
                        {
                            type: 'text',
                            placeholder: 'Musterstrasse',
                            required: false,
                            label: 'Strasse',
                            name: 'einzug_firma_strasse',
                        },
                        {
                            type: 'text',
                            placeholder: 'Hausnummer',
                            required: false,
                            label: 'Hausnummer',
                            name: 'einzug_firma_hausnummer',
                        }
                    ]
                },
                {
                    elements: [
                        {
                            type: 'text',
                            placeholder: 'Adresszusatz',
                            required: false,
                            label: 'Adresszusatz',
                            name: 'einzug_firma_adresszusatz',
                        }
                    ]
                },
                {
                    elements: [
                        {
                            type: 'text',
                            placeholder: 'Ort',
                            required: false,
                            label: 'Ort',
                            name: 'einzug_firma_ort',
                        },
                        {
                            type: 'text',
                            placeholder: '0000',
                            required: false,
                            label: 'PLZ',
                            name: 'einzug_firma_plz',
                        }
                    ]
                },
                {
                    elements: [
                        {
                            type: 'text',
                            placeholder: 'Etage',
                            required: false,
                            label: 'Etage',
                            name: 'einzug_firma_etage',
                        },
                        {
                            type: 'text',
                            placeholder: 'dd.mm.yyyy',
                            required: false,
                            label: 'gewünschtes Datum Einzug',
                            name: 'einzug_firma_datum',
                        }
                    ]
                },
                {
                    elements: [
                        {
                            type: 'textarea',
                            placeholder: 'Ihre Nachricht',
                            required: false,
                            label: 'Bemerkung',
                            name: 'einzug_firma_bemerkung',
                        }
                    ]
                },
            ]
        },
        {
            type: 'hidden',
            label: 'Reinigung',
            stepId: 'reinigung',
            rows: [
                {
                    elements: [
                        {
                            type: 'text',
                            placeholder: 'dd.mm.yyyy',
                            required: false,
                            label: 'Reinigungstermin',
                            name: 'reinigung_termin',
                        },
                        {
                            type: 'text',
                            placeholder: '07:30 Uhr',
                            required: false,
                            label: 'Uhrzeit',
                            name: 'reinigung_termin_uhrzeit',
                        }
                    ]
                },
                {
                    elements: [
                        {
                            type: 'text',
                            placeholder: 'dd.mm.yyyy',
                            required: false,
                            label: 'Abgabetermin',
                            name: 'abgabe_termin',
                        },
                        {
                            type: 'text',
                            placeholder: '14:00 Uhr',
                            required: false,
                            label: 'Uhrzeit',
                            name: 'abgabe_termin_uhrzeit',
                        }
                    ]
                },
                {
                    elements: [
                        {
                            type: 'text',
                            placeholder: '2.5 Zimmer',
                            required: false,
                            label: 'Anzahl der Räume',
                            name: 'reinigung_anzahl_räume',
                        },
                        {
                            type: 'text',
                            placeholder: '100 m²',
                            required: false,
                            label: 'Gesamtfläche',
                            name: 'reinigung_gesamtfläche',
                        }
                    ]
                },
                {
                    elements: [
                        {
                            type: 'textarea',
                            placeholder: 'Ihre Nachricht',
                            required: false,
                            label: 'Bemerkung',
                            name: 'reinigung_bemerkung',
                        }
                    ]
                },
            ]
        },
        {
            type: 'hidden',
            label: 'Lagerung',
            stepId: 'lagerung',
            rows: [
                {
                    elements: [
                        {
                            type: 'text',
                            placeholder: 'dd.mm.yyyy',
                            required: false,
                            label: 'Lagerungs Beginn',
                            name: 'lagerung_beginn',
                        },
                        {
                            type: 'text',
                            placeholder: 'dd.mm.yyyy',
                            required: false,
                            label: 'Voraussichtliches Lagerungs Ende',
                            name: 'lagerung_ende',
                        },
                    ]
                },
                {
                    elements: [
                        {
                            type: 'text',
                            placeholder: '10m³',
                            required: false,
                            label: 'Volumen',
                            name: 'lagerung_volumen',
                        },
                    ]
                },
                {
                    elements: [
                        {
                            type: 'textarea',
                            placeholder: 'Ihre Nachricht',
                            required: false,
                            label: 'Bemerkung',
                            name: 'lagerung_bemerkung',
                        }
                    ]
                },
            ]
        },
        {
            type: 'hidden',
            label: 'Treppensteiger',
            stepId: 'treppensteiger',
            rows: [
                {
                    elements: [
                        {
                            type: 'text',
                            placeholder: 'dd.mm.yyyy',
                            required: false,
                            label: 'Miete Beginn',
                            name: 'treppensteiger_miete_beginn',
                        },
                        {
                            type: 'text',
                            placeholder: '07:30 Uhr',
                            required: false,
                            label: 'Uhrzeit',
                            name: 'treppensteiger_miete_beginn_uhrzeit',
                        }
                    ]
                },
                {
                    elements: [
                        {
                            type: 'text',
                            placeholder: 'dd.mm.yyyy',
                            required: false,
                            label: 'Miete Ende',
                            name: 'treppensteiger_miete_ende',
                        },
                        {
                            type: 'text',
                            placeholder: '14:00 Uhr',
                            required: false,
                            label: 'Uhrzeit',
                            name: 'treppensteiger_miete_ende_uhrzeit',
                        }
                    ]
                },
                {
                    elements: [
                        {
                            type: 'text',
                            placeholder: '2',
                            required: false,
                            label: 'Anzahl benötigter Helfer',
                            name: 'treppensteiger_helfer',
                        }
                    ]
                },
                {
                    elements: [
                        {
                            type: 'textarea',
                            placeholder: 'Ihre Nachricht',
                            required: false,
                            label: 'Bemerkung',
                            name: 'treppensteiger_bemerkung',
                        }
                    ]
                },
            ]
        },
        {
            type: 'hidden',
            label: 'Möbellift',
            stepId: 'moebellift',
            rows: [
                {
                    elements: [
                        {
                            type: 'text',
                            placeholder: 'dd.mm.yyyy',
                            required: false,
                            label: 'Miete Beginn',
                            name: 'möbellift_miete_beginn',
                        },
                        {
                            type: 'text',
                            placeholder: '07:30 Uhr',
                            required: false,
                            label: 'Uhrzeit',
                            name: 'möbellift_miete_beginn_uhrzeit',
                        }
                    ]
                },
                {
                    elements: [
                        {
                            type: 'text',
                            placeholder: 'dd.mm.yyyy',
                            required: false,
                            label: 'Miete Ende',
                            name: 'möbellift_miete_ende',
                        },
                        {
                            type: 'text',
                            placeholder: '14:00 Uhr',
                            required: false,
                            label: 'Uhrzeit',
                            name: 'möbellift_miete_ende_uhrzeit',
                        }
                    ]
                },
                {
                    elements: [
                        {
                            type: 'text',
                            placeholder: 'mind. 1',
                            required: false,
                            label: 'Anzahl benötigter Helfer',
                            name: 'möbellift_helfer',
                        }
                    ]
                },
                {
                    elements: [
                        {
                            type: 'textarea',
                            placeholder: 'Ihre Nachricht',
                            required: false,
                            label: 'Bemerkung',
                            name: 'möbellift_bemerkung',
                        }
                    ]
                },
            ]
        },
        {
            type: 'hidden',
            label: 'Entsorgung',
            stepId: 'entsorgung',
            rows: [
                {
                    elements: [
                        {
                            type: 'text',
                            placeholder: 'dd.mm.yyyy',
                            required: false,
                            label: 'Entsorgung Termin',
                            name: 'entsorgung_termin',
                        },
                        {
                            type: 'text',
                            placeholder: '07:30 Uhr',
                            required: false,
                            label: 'Uhrzeit',
                            name: 'entsorgung_uhrzeit',
                        }
                    ]
                },
                {
                    elements: [
                        {
                            type: 'text',
                            placeholder: '10',
                            required: false,
                            label: 'Anzahl der Packstücke',
                            name: 'entsorgung_packstuecke',
                        },
                        {
                            type: 'text',
                            placeholder: '100 kg',
                            required: false,
                            label: 'Gewicht',
                            name: 'entsorgung_gewicht',
                        },
                        {
                            type: 'text',
                            placeholder: '10m³',
                            required: false,
                            label: 'Volumen',
                            name: 'entsorgung_volumen',
                        }
                    ]
                },
                {
                    elements: [
                        {
                            type: 'text',
                            placeholder: 'Musterstrasse',
                            required: false,
                            label: 'Strasse Abholung',
                            name: 'entsorgung_strasse_abholung',
                        },
                        {
                            type: 'text',
                            placeholder: 'Hausnummer',
                            required: false,
                            label: 'Hausnummer Abholung',
                            name: 'entsorgung_hausnummer_abholung',
                        }
                    ]
                },
                {
                    elements: [
                        {
                            type: 'text',
                            placeholder: 'Adresszusatz',
                            required: false,
                            label: 'Adresszusatz Abholung',
                            name: 'entsorgung_adresszusatz_abholung',
                        }
                    ]
                },
                {
                    elements: [
                        {
                            type: 'text',
                            placeholder: 'Ort',
                            required: false,
                            label: 'Ort Abholung',
                            name: 'entsorgung_ort_abholung',
                        },
                        {
                            type: 'text',
                            placeholder: 'PLZ',
                            required: false,
                            label: 'PLZ Abholung',
                            name: 'entsorgung_plz_abholung',
                        }
                    ]
                },
                {
                    elements: [
                        {
                            type: 'textarea',
                            placeholder: 'Ihre Nachricht',
                            required: false,
                            label: 'Bemerkung',
                            name: 'entsorgung_bemerkung',
                        }
                    ]
                },
            ]
        }
    ]
};
