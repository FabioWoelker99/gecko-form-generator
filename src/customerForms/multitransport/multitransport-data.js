const geckoMultitransportForm = {
    requestName: 'multitransport',
    googleConversionCode: 'AW-302772059/5YcMCPKDiJ8YENver5AB',
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
                            name: 'prename',
                            label: 'Vorname',
                            mailLabel: 'Vorname',
                            placeholder: '',
                            autocomplete: 'given-name',
                            required: true
                        },
                        {
                            type: 'text',
                            name: 'surname',
                            label: 'Nachname',
                            mailLabel: 'Nachname',
                            placeholder: '',
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
                            label: 'E-Mail',
                            mailLabel: 'E-Mail',
                            placeholder: '',
                            autocomplete: 'email',
                            required: true
                        },
                        {
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
                },
                {
                    elements: [
                        {
                            type: 'radio',
                            name: 'umzugsart',
                            label: 'Art des Umzugs',
                            mailLabel: 'Art des Umzugs',
                            required: true,
                            trigger: true,
                            stepGroups: ['privatumzug', 'firmenumzug'],
                            options: [
                                {
                                    id: 'privatumzug',
                                    label: 'Privatumzug',
                                    value: 'Privatumzug',
                                    stepGroup: 'privatumzug'
                                },
                                {
                                    id: 'firmenumzug',
                                    label: 'Firmenumzug',
                                    value: 'Firmenumzug',
                                    stepGroup: 'firmenumzug'
                                },
                                {
                                    id: 'kein_umzug',
                                    label: 'Kein Umzug',
                                    value: 'Kein Umzug',
                                    stepGroup: '',
                                    default: true
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};
