const testForm = {
    requestName: 'winno',
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
                }
            ]
        },
        {
            label: 'Privatumzug',
            stepId: 'privatumzug',
            rows: [
                {
                    elements: [
                        {
                            type: 'text',
                            placeholder: 'Musterstrasse',
                            required: true,
                            label: 'Strasse',
                            name: 'strasse',
                        },
                        {
                            type: 'text',
                            placeholder: 'Hausnummer',
                            required: true,
                            label: 'Hausnummer',
                            name: 'hausnummer',
                        }
                    ]
                },
            ]
        }
    ]
};

const geckoForm = new GeckoForm(testForm, '#test-gecko-form', '.wr_btn--submit', '.lyt--form-steps');
geckoForm.buildGeckoForm();