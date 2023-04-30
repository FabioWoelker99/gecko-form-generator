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
                            mailLabel: 'Name',
                            placeholder: 'Name',
                            autocomplete: 'given-name',
                            required: true
                        },
                        {
                            type: 'text',
                            name: 'surname',
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
                            type: 'email',
                            name: 'email',
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
                            name: 'experience',
                            mailLabel: 'OnlyFans Experience',
                            placeholder: 'Do you have experience with OnlyFans?',
                            required: true
                        }
                    ]
                },
                {
                    elements: [
                        {
                            type: 'text',
                            name: 'time',
                            mailLabel: 'Daily Time',
                            placeholder: 'How much time do you have per day?',
                            required: true
                        }
                    ]
                },
                {
                    elements: [
                        {
                            type: 'text',
                            name: 'limits',
                            mailLabel: 'Content Creation Limits',
                            placeholder: 'What are your content creation limits?',
                            required: true
                        }
                    ]
                },
                {
                    elements: [
                        {
                            type: 'textarea',
                            name: 'message',
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
