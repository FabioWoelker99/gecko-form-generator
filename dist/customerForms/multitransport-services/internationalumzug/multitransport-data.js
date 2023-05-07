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
        type: 'text',
        name: 'auszug_strasse',
        mailLabel: 'Auszug Straße',
        placeholder: 'Strasse/Nr.',
        required: true
      }, {
        type: 'text',
        name: 'auszug_plz',
        mailLabel: 'Auszug PLZ/Ort',
        placeholder: 'PLZ/Ort',
        required: true
      }]
    }, {
      elements: [{
        type: 'text',
        name: 'auszug_zimmer',
        mailLabel: 'Auszug Anzahl Zimmer',
        placeholder: 'Anzahl Zimmer',
        required: true
      }, {
        type: 'text',
        name: 'auszug_etage',
        mailLabel: 'Auszug Etage',
        placeholder: 'Etage',
        required: true
      }]
    }, {
      elements: [{
        type: 'radio',
        required: true,
        label: 'Lift vorhanden?',
        name: 'lift',
        options: [{
          label: 'Ja',
          value: 'ja',
          id: 'auszug_lift_ja'
        }, {
          label: 'Nein',
          value: 'nein',
          id: 'auszug_lift_nein',
          default: true
        }]
      }, {
        type: 'checkbox',
        name: 'auszug_zusaetzliche_leistungen',
        label: 'Weitere Dienstleistungen',
        mailLabel: 'Weitere Dienstleistungen',
        options: [{
          id: 'Reinigung',
          label: 'Reinigung',
          value: 'Reinigung',
          stepGroup: ''
        }, {
          id: 'Entsorgung',
          label: 'Entsorgung',
          value: 'Entsorgung',
          stepGroup: ''
        }, {
          id: 'Lagerung',
          label: 'Lagerung',
          value: 'Lagerung',
          stepGroup: ''
        }]
      }]
    }, {
      elements: [{
        type: 'text',
        name: 'einzug_strasse',
        mailLabel: 'Einzug Straße',
        placeholder: 'Strasse/Nr.',
        required: true
      }, {
        type: 'text',
        name: 'einzug_plz',
        mailLabel: 'Einzug PLZ/Ort',
        placeholder: 'PLZ/Ort',
        required: true
      }]
    }, {
      elements: [{
        type: 'text',
        name: 'einzug_etage',
        mailLabel: 'Einzug Etage',
        placeholder: 'Etage',
        required: true
      }, {
        type: 'text',
        name: 'einzug_datum',
        mailLabel: 'Einzug Datum',
        placeholder: 'Umzugsdatum',
        required: true
      }]
    }, {
      elements: [{
        type: 'radio',
        required: true,
        label: 'Lift vorhanden?',
        name: 'einzug_lift',
        options: [{
          label: 'ja',
          value: 'ja',
          id: 'einzug_lift_ja'
        }, {
          label: 'nein',
          value: 'nein',
          id: 'einzug_lift_nein',
          default: true
        }]
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
        name: 'bemerkung',
        label: 'Bemerkung',
        mailLabel: 'Bemerkung',
        placeholder: 'Ihre Nachricht oder Bemerkung'
      }]
    }]
  }]
};