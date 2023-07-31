const geckoFinasaForm = {
  requestName: 'finasa',
  googleConversionCode: '',
  steps: [{
    type: 'default',
    label: '',
    stepId: 'personal model',
    mailLabel: 'Personal Data',
    index: 0,
    saveStep: false,
    rows: [{
      elements: [{
        type: 'text',
        name: 'prename',
        label: 'Name',
        mailLabel: 'Prename',
        placeholder: '',
        autocomplete: 'given-name',
        required: true
      }, {
        type: 'text',
        name: 'surname',
        label: 'Surname',
        mailLabel: 'Surname',
        placeholder: '',
        autocomplete: 'family-name',
        required: true
      }]
    }, {
      elements: [{
        type: 'text',
        name: 'country-code',
        label: 'Country Code',
        mailLabel: 'Country Code',
        placeholder: '+1'
      }, {
        type: 'tel_',
        name: 'phone',
        label: 'Telefonnummer',
        mailLabel: 'Telefonnummer',
        placeholder: '',
        autocomplete: 'tel'
      }]
    }, {
      elements: [{
        type: 'email',
        name: 'email',
        label: 'E-Mail',
        mailLabel: 'E-Mail',
        placeholder: '',
        autocomplete: 'email',
        required: true
      }]
    }, {
      elements: [{
        type: 'text',
        name: 'workhours',
        label: 'How much time do you have per dayy?',
        mailLabel: 'Workhours',
        placeholder: '6-8 hours'
      }]
    }, {
      elements: [{
        type: 'textarea',
        name: 'message',
        label: 'Your Message',
        mailLabel: 'Message',
        placeholder: 'Your Message'
      }]
    }]
  }]
};