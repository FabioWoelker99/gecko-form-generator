const geckoMultitransportFormq1 = {
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
        name: 'von strasse',
        label: 'Von: Strasse/ Nr.',
        mailLabel: 'von strasse',
        placeholder: '',
        required: true
      }, {
        type: 'text',
        name: 'von plz',
        label: 'Von: PLZ/ Nr.',
        mailLabel: 'von plz',
        placeholder: '',
        required: true
      }]
    }, {
      elements: [{
        type: 'text',
        name: 'nach strasse',
        label: 'Nach: Strasse/ Nr.',
        mailLabel: 'nach strasse',
        placeholder: '',
        required: true
      }, {
        type: 'text',
        name: 'nach plz',
        label: 'Nach: PLZ/ Nr.',
        mailLabel: 'nach plz',
        placeholder: '',
        required: true
      }]
    }, 
    {
      elements: [{
        type: 'text',
        name: 'datum',
        label: 'Umzugsdatum',
        mailLabel: 'umzugsdatum',
        placeholder: '',
        required: true
      }, {
        type: 'text',
        name: 'zimmer',
        label: 'Anzahl Zimmer / Räume',
        mailLabel: 'zimmer',
        placeholder: '',
        required: true
      }]
    }, {
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
        type: 'tel',
        name: 'telefon',
        label: 'Telefon',
        mailLabel: 'telefon',
        placeholder: '',
        required: true
      }]
    }]
  }]
};