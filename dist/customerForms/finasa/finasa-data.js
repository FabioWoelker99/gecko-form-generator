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
        label: 'Name *',
        mailLabel: 'Prename',
        placeholder: 'Amanda',
        autocomplete: 'given-name',
        required: true
      }, {
        type: 'text',
        name: 'surname',
        label: 'Surname *',
        mailLabel: 'Surname',
        placeholder: 'Smith',
        autocomplete: 'family-name',
        required: true
      }]
    }, {
      elements: [{
        type: 'text',
        name: 'country-code',
        label: 'Country Code *',
        mailLabel: 'Country Code',
        placeholder: '+1 (United States)',
        required: true
      }, {
        type: 'tel_',
        name: 'phone',
        label: 'Phone Number *',
        mailLabel: 'Phone Number',
        placeholder: '123 456 789',
        autocomplete: 'tel',
        required: true
      }]
    }, {
      elements: [{
        type: 'email',
        name: 'email',
        label: 'E-Mail *',
        mailLabel: 'E-Mail',
        placeholder: 'amandasmith@gmail.com',
        autocomplete: 'email',
        required: true
      }]
    }, {
      elements: [{
        type: 'text',
        name: 'socialmedia',
        label: 'Social Media Profile',
        mailLabel: 'socialmedia',
        placeholder: ''
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