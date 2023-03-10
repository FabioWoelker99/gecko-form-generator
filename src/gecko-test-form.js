const testForm = {
    steps: [
        {
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
                            label: 'Name'
                        },
                        {
                            type: 'text',
                            placeholder: 'Nachname',
                            required: true,
                            autocomplete: 'family-name',
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
                            label: 'E-Mail'
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
                            label: 'Telefonnummer'
                        },
                    ]
                },
                {
                    elements: [
                        {
                            type: 'textarea',
                            placeholder: 'Ihre Nachricht oder Bemerkung',
                            required: false,
                            label: 'Nachricht'
                        },
                    ]
                }
            ]
        },
        {
            label: 'Privatumzug',
            stepId: 'private',
            rows: [
                {
                    elements: [
                        {
                            type: 'text',
                            placeholder: 'Musterstrasse',
                            required: true,
                            label: 'Strasse'
                        },
                        {
                            type: 'text',
                            placeholder: 'Hausnummer',
                            required: true,
                            label: 'Hausnummer'
                        }
                    ]
                },
            ]
        }
    ]
};