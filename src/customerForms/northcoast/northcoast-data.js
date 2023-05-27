const geckoNorthcoastForm = {
    requestName: 'northcoast',
    googleConversionCode: '',
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
                            name: 'name',
                            label: 'Name',
                            mailLabel: 'Name',
                            placeholder: 'Name',
                            autocomplete: 'given-name',
                            required: true
                        },
                        {
                            type: 'text',
                            name: 'surname',
                            label: 'Surname',
                            mailLabel: 'Surname',
                            placeholder: 'Surname',
                            autocomplete: 'family-name',
                            required: true
                        }
                    ]
                },
                {
                    elements: [
                        {
                            type: 'text',
                            name: 'countrycode',
                            label: 'Country code',
                            mailLabel: 'Country Code',
                            placeholder: 'Country Code',
                            required: true
                        },
                        {
                            type: 'tel',
                            name: 'phone',
                            label: 'Phone number',
                            mailLabel: 'Phone number',
                            placeholder: 'Phone number',
                            autocomplete: 'tel',
                            required: true
                        }
                    ]
                },
                {
                    elements: [
                        {
                            type: 'email',
                            name: 'email',
                            label: 'E-Mail',
                            mailLabel: 'E-Mail',
                            placeholder: 'E-Mail',
                            autocomplete: 'email',
                            required: true
                        },
                    ]
                },
                {
                    elements: [
                        {
                            type: 'text',
                            name: 'time',
                            label: 'How much time do you have per day?',
                            mailLabel: 'Daily Time',
                            placeholder: 'Daily Time',
                            required: true
                        }
                    ]
                },
                {
                    elements: [
                        {
                            type: 'textarea',
                            name: 'message',
                            label: 'Your Message',
                            mailLabel: 'Message',
                            placeholder: 'Message',
                            required: true
                        }
                    ]
                },
            ]
        }
    ]
};
