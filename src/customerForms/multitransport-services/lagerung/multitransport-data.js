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
                            name: 'beginn',
                            mailLabel: 'Beginn Lagerung',
                            placeholder: 'Beginn der Lagerung',
                            required: true
                        },
                        {
                            type: 'text',
                            name: 'ende',
                            mailLabel: 'Ende Lagerung',
                            placeholder: 'Ende der Lagerung',
                            required: true
                        },
                    ]
                },
                {
                    elements: [
                        {
                            type: 'text',
                            name: 'beladeort',
                            mailLabel: 'Beladeort',
                            placeholder: 'Beladeort',
                            required: true
                        },
                        {
                            type: 'text',
                            name: 'anzahl_zimmer',
                            mailLabel: 'Anzahl Zimmer',
                            placeholder: 'Anzahl Zimmer / Räume',
                            required: true
                        },
                    ]
                },
                {
                    elements: 
                    [
                        {
                            type: 'text',
                            name: 'etage',
                            label: 'Etage',
                            mailLabel: 'Etage',
                            placeholder: 'Etage'
                        },
                        {
                            type: 'radio',
                            required: true,
                            label: 'Lift',
                            name: 'lift',
                            options: [
                                {
                                    label: 'Ja',
                                    value: 'Ja',
                                    id: 'auszug_lift_ja',
                                },
                                {
                                    label: 'Nein',
                                    value: 'Nein',
                                    id: 'auszug_lift_nein',
                                    default: true,
                                }
                            ]
                        }
                    ]
                },
                {
                    elements: [
                        {
                            type: 'textarea',
                            name: 'was_lagern',
                            label: 'Was möchten Sie einlagern?',
                            mailLabel: 'Was möchten Sie einlagern?',
                            placeholder: ''
                        }
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
                            placeholder: 'Unternehmen'
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
                            name: 'aufmerksam_durch',
                            label: 'Wie sind Sie auf uns aufmerksam geworden?',
                            mailLabel: 'Wie sind Sie auf uns aufmerksam geworden?',
                            placeholder: ''
                        }
                    ]
                }
            ]
        },
    ]
};
