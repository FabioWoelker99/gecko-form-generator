const geckoMultitransportForm = {
  requestName: 'multitransport',
  googleConversionCode: '',
  steps: [{
    type: 'default',
    label: 'Persönliche Daten',
    stepId: 'personal',
    mailLabel: 'Persönliche Daten',
    index: 0,
    saveStep: true,
    rows: [{
      elements: [{
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
      }]
    }, {
      elements: [{
        type: 'textarea',
        name: 'nachricht',
        label: 'Nachricht',
        mailLabel: 'Nachricht',
        placeholder: 'Ihre Nachricht...'
      }]
    }]
  }]
};