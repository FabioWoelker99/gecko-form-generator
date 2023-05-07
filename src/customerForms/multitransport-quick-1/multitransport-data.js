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
        mailLabel: 'von strasse',
        placeholder: 'Von: Strasse/ Nr.',
        required: true
      }, {
        type: 'text',
        name: 'von plz',
        mailLabel: 'von plz',
        placeholder: 'Von: PLZ/ Nr.',
        required: true
      }]
    }, {
      elements: [{
        type: 'text',
        name: 'nach strasse',
        mailLabel: 'nach strasse',
        placeholder: 'Nach: Strasse/ Nr.',
        required: true
      }, {
        type: 'text',
        name: 'nach plz',
        mailLabel: 'nach plz',
        placeholder: 'Nach: PLZ/ Nr.',
        required: true
      }]
    }, 
    {
      elements: [{
        type: 'text',
        name: 'datum',
        mailLabel: 'umzugsdatum',
        placeholder: 'Umzugsdatum',
        required: true
      }, {
        type: 'text',
        name: 'zimmer',
        mailLabel: 'zimmer',
        placeholder: 'Anzahl Zimmer / Räume',
        required: true
      }]
    }, {
      elements: [{
        type: 'text',
        name: 'prename',
        mailLabel: 'Vorname',
        placeholder: 'Vorname',
        autocomplete: 'given-name',
        required: true
      }, {
        type: 'text',
        name: 'surname',
        mailLabel: 'Nachname',
        placeholder: 'Nachname',
        autocomplete: 'family-name',
        required: true
      }]
    }, {
      elements: [{
        type: 'email',
        name: 'email',
        mailLabel: 'E-Mail',
        placeholder: 'E-Mail',
        autocomplete: 'email',
        required: true
      }]
    }, {
      elements: [{
        type: 'tel',
        name: 'telefon',
        mailLabel: 'telefon',
        placeholder: 'Telefon',
        required: true
      }]
    }]
  }]
};