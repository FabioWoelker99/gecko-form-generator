const geckoMultitransportForm = {
    requestName: 'multitransport',
    googleConversionCode: 'AW-10827149179/DtmuCIyTnJMYEPve5Koo',
    steps: [
        {
            type: 'default',
            label: 'Persönliche Daten',
            stepId: 'personal',
            mailLabel: 'Persönliche Daten',
            index: 0,
            saveStep: true,
            rows: [
                {
                    elements: [
                        {
                            type: 'text',
                            name: 'adresse',
                            mailLabel: 'Adresse',
                            placeholder: 'Adresse (Strasse/PLZ/Ort)',
                            required: true
                        }
                    ]
                },
                {
                    elements: [
                        {
                            type: 'text',
                            name: 'anzahl',
                            mailLabel: 'Anzahl Zimmer',
                            placeholder: 'Anazhl Zimmer/Räume',
                            required: true
                        }
                    ]
                },
                {
                    elements: [
                        {
                            type: 'text',
                            name: 'groesse',
                            mailLabel: 'Größe',
                            placeholder: 'Größe in m2',
                            required: true
                        },
                        {
                            type: 'text',
                            name: 'termin',
                            mailLabel: 'Termin',
                            placeholder: 'Reinigungstermin',
                            required: true
                        },
                    ]
                },
                {
                    elements: 
                    [
                        {
                            type: 'text',
                            name: 'unternehmen',
                            label: 'Unternehmen',
                            mailLabel: 'Unternehmen',
                            placeholder: 'Unternehmen',
                        }
                    ]
                },
                {
                    elements: [
                        {
                            type: 'radio',
                            required: true,
                            label: 'Anrede',
                            name: 'anrede',
                            options: [
                                {
                                    label: 'Herr',
                                    value: 'Herr',
                                    id: 'Herr',
                                },
                                {
                                    label: 'Frau',
                                    value: 'Frau',
                                    id: 'Frau',
                                    default: true,
                                }
                            ]
                        },
                    ]
                },
                {
                    elements: 
                    [
                        {
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
                        }
                    ]
                }, {
                    elements: [
                        {
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
                        }
                    ]
                }, 
                {
                    elements: [
                        {
                            type: 'textarea',
                            name: 'bemerkung',
                            label: 'Bemerkung',
                            mailLabel: 'Bemerkung',
                            placeholder: 'Ihre Nachricht oder Bemerkung'
                        }
                    ]
                }
            ]
        },
    ]
};
