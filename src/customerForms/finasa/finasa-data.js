const geckoFinasaForm = {
    requestName: 'finasa',
    googleConversionCode: '',
    steps: [
        {
            type: 'default',
            label: '',
            stepId: 'personal model',
            mailLabel: 'Personal Data',
            index: 0,
            saveStep: false,
            rows: [
                {
                    elements: [
                        {
                            type: 'text',
                            name: 'prename',
                            label: 'Name',
                            mailLabel: 'Prename',
                            placeholder: '',
                            autocomplete: 'given-name',
                            required: true
                        },
                        {
                            type: 'text',
                            name: 'surname',
                            label: 'Surname',
                            mailLabel: 'Surname',
                            placeholder: '',
                            autocomplete: 'family-name',
                            required: true
                        }
                    ]
                },
                {
                    elements: [
                        {
                            type: 'text',
                            name: 'country-code',
                            label: 'Country Code',
                            mailLabel: 'Country Code',
                            placeholder: '+1',
                            required: true
                        },
                        {
                            type: 'tel_',
                            name: 'phone',
                            label: 'Phone Number',
                            mailLabel: 'Phone Number',
                            placeholder: '',
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
                            placeholder: '',
                            autocomplete: 'email',
                            required: true
                        }
                    ]
                },
                {
                    elements: [
                        {
                            type: 'text',
                            name: 'instagram',
                            label: 'Instagram Profile',
                            mailLabel: 'Instagram Profile',
                            placeholder: '',
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
                            placeholder: 'Your Message'
                        }
                    ]
                }
            ]
        }
    ]
};
