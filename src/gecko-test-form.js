const testForm = {
    rows: [
        {
            elements: [
                {
                    type: 'text',
                    placeholder: 'Vorname',
                    required: true,
                    autocomplete: 'given-name',
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
                },
            ]
        },
        {
            elements: [
                {
                    type: 'textarea',
                    placeholder: 'Ihre Nachricht oder Bemerkung',
                    required: false,
                },
            ]
        },
        {
            elements: [
                {
                    type: 'text',
                },
            ]
        },
    ]
};