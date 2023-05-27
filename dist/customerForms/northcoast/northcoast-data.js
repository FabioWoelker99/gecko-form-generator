const geckoNorthcoastForm = {
  requestName: 'northcoast',
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
        name: 'name',
        label: 'Name',
        mailLabel: 'Name',
        placeholder: 'Name',
        autocomplete: 'given-name',
        required: true
      }, {
        type: 'text',
        name: 'surname',
        label: 'Surname',
        mailLabel: 'Surname',
        placeholder: 'Surname',
        autocomplete: 'family-name',
        required: true
      }]
    }, {
      elements: [{
        type: 'email',
        name: 'email',
        label: 'E-Mail',
        mailLabel: 'E-Mail',
        placeholder: 'E-Mail',
        autocomplete: 'email',
        required: true
      }]
    }, {
      elements: [{
        type: 'text',
        label: 'Do you have expercience with OnlyFans?',
        name: 'experience',
        mailLabel: 'OnlyFans Experience',
        placeholder: 'Do you have experience with OnlyFans?',
        required: true
      }]
    }, {
      elements: [{
        type: 'text',
        name: 'time',
        label: 'Daily Time',
        mailLabel: 'Daily Time',
        placeholder: 'How much time do you have per day?',
        required: true
      }]
    }, {
      elements: [{
        type: 'text',
        name: 'limits',
        label: 'What are your content creation limits?',
        mailLabel: 'Content Creation Limits',
        placeholder: 'What are your content creation limits?',
        required: true
      }]
    }, {
      elements: [{
        type: 'textarea',
        name: 'message',
        label: 'Your Message',
        mailLabel: 'Message',
        placeholder: 'Message',
        required: true
      }]
    }]
  }]
};