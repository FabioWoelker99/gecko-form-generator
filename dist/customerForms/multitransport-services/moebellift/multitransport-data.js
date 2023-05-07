const geckoMultitransportForm = {
  requestName: 'multitransport',
  googleConversionCode: 'AW-10827149179/DtmuCIyTnJMYEPve5Koo',
  steps: [{
    type: 'default',
    label: 'Persönliche Daten',
    stepId: 'personal',
    mailLabel: 'Persönliche Daten',
    index: 0,
    saveStep: true,
    rows: [{
      elements: [{
        type: 'radio',
        required: true,
        label: 'Anfragen als',
        name: 'anfragen_als',
        options: [{
          label: 'Privatkunde',
          value: 'Privatkunde',
          id: 'privat',
          default: true
        }, {
          label: 'Unternehmen',
          value: 'Unternehmen',
          id: 'unternehmen'
        }]
      }]
    }, {
      elements: [{
        type: 'checkbox',
        name: 'auszug_zusaetzliche_leistungen',
        label: 'Weitere Dienstleistungen',
        mailLabel: 'Weitere Dienstleistungen',
        options: [{
          id: 'einpack_auspackservice',
          label: 'Ein-/Auspackservice',
          value: 'Einpack Auspackservice'
        }, {
          id: 'Umzug',
          label: 'Umzug',
          value: 'Umzug'
        }, {
          id: 'Entsorgung',
          label: 'Räumung/Entsorgung',
          value: 'Räumung Entsorgung'
        }, {
          id: 'Lagerung',
          label: 'Lagerung',
          value: 'Lagerung'
        }, {
          id: 'Reinigungsservice',
          label: 'Reinigungsservice',
          value: 'Reinigungsservice'
        }]
      }]
    }, {
      elements: [{
        type: 'text',
        name: 'von',
        label: 'Von/Strasse/PLZ/Ort',
        mailLabel: 'von'
      }]
    }, {
      elements: [{
        type: 'text',
        name: 'von_etage',
        label: 'Etage',
        mailLabel: 'Von Etage'
      }]
    }, {
      elements: [{
        type: 'text',
        name: 'nach',
        label: 'Nach/Strasse/PLZ/Ort',
        mailLabel: 'nach'
      }]
    }, {
      elements: [{
        type: 'text',
        name: 'nach_etage',
        label: 'Etage',
        mailLabel: 'Nach Etage'
      }]
    }, {
      elements: [{
        type: 'text',
        name: 'datum',
        label: 'Gewünschtes Datum',
        mailLabel: 'Gewünschtes Datum'
      }]
    }, {
      elements: [{
        type: 'textarea',
        name: 'mitteilungen',
        label: 'Mitteilungen',
        mailLabel: 'Mitteilungen',
        placeholder: ''
      }]
    }, {
      elements: [{
        type: 'text',
        name: 'unternehmen',
        label: 'Unternehmen',
        mailLabel: 'Unternehmen',
        placeholder: 'Unternehmen'
      }]
    }, {
      elements: [{
        type: 'radio',
        required: true,
        label: 'Anrede',
        name: 'anrede',
        options: [{
          label: 'Herr',
          value: 'Herr',
          id: 'Herr'
        }, {
          label: 'Frau',
          value: 'Frau',
          id: 'Frau',
          default: true
        }]
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
      }, {
        type: 'tel',
        name: 'phone',
        label: 'Telefonnummer',
        mailLabel: 'Telefonnummer',
        placeholder: '',
        autocomplete: 'tel',
        required: true
      }]
    }, {
      elements: [{
        type: 'textarea',
        name: 'aufmerksam_durch',
        label: 'Wie sind Sie auf uns aufmerksam geworden?',
        mailLabel: 'Wie sind Sie auf uns aufmerksam geworden?',
        placeholder: ''
      }]
    }]
  }]
};