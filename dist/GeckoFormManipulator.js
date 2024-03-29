class GeckoFormManipulator {
  constructor(geckoForm) {
    this.geckoForm = geckoForm;
  }
  buildGeckoSteps(json, stepType) {
    json.forEach(step => {
      if (step.type == stepType) this.buildSingleGeckoStep(step);
    });
  }
  destroyGeckoSteps(json) {
    const stepsToDestroy = this.geckoForm.formJson.steps.filter(step => json.includes(step.stepGroup));
    let stepIds = [];
    stepsToDestroy.forEach(step => stepIds.push(step.stepId));
    this.geckoForm.formSteps = this.geckoForm.formSteps.filter(step => !stepIds.includes(step.stepId));
    this.adjustGeckoStepNumbers();
    json.forEach(stepGroup => {
      $(`${this.geckoForm.formStepsSelector} ${gecko_selector_formStepComponent}[stepgroup="${stepGroup}"]`).remove();
      $(`${this.geckoForm.formStepsSelector} ${gecko_selector_formStepDivider}[stepgroup="${stepGroup}"]`).remove();
      $(`${this.geckoForm.formSelector} ${gecko_selector_formComponent}[stepgroup="${stepGroup}"]`).remove();
    });
  }
  adjustGeckoStepNumbers() {
    let i = 1;
    this.geckoForm.formSteps.forEach(step => {
      $(`${this.geckoForm.formStepsSelector} ${gecko_selector_formStepComponent}[stepid="${step.stepId}"] ${gecko_selector_formStepNumberWrapper} ${gecko_selector_formStepNumberLabel}`).html(i);
      i++;
    });
  }
  buildSingleGeckoStep(json) {
    let position = 0;
    this.geckoForm.formSteps.forEach(step => {
      if (json.index < step.index) return;
      position++;
    });
    if (position >= 0) this.geckoForm.formSteps.splice(position, 0, {
      stepId: json.stepId,
      index: json.index
    });else this.geckoForm.formSteps.push({
      stepId: json.stepId,
      index: json.index
    });
    this.geckoForm.geckoFormGenerator.buildSingleGeckoStepView(json, position - 1);
    this.geckoForm.geckoFormGenerator.buildSingleGeckoStepContent(json);
  }
  triggerStepManipulation(stepGroup, json) {
    if (json != null) this.destroyGeckoSteps(json);
    if (stepGroup != null) {
      const stepsToCreate = this.geckoForm.formJson.steps.filter(step => step.stepGroup == stepGroup);
      this.buildGeckoSteps(stepsToCreate, 'hidden');
    }
    this.setButtonLabels();
  }
  activateCurrentStep() {
    const currentStepId = this.geckoForm.formSteps[this.geckoForm.currentStep - 1].stepId;
    const previousStepId = this.geckoForm.currentStep - 2 >= 0 ? this.geckoForm.formSteps[this.geckoForm.currentStep - 2].stepId : null;
    $(`${this.geckoForm.formSelector} ${gecko_selector_formComponent}`).addClass(gecko_class_hidden);
    $(`${this.geckoForm.formSelector} ${gecko_selector_formComponent}[stepid="${currentStepId}"]`).removeClass(gecko_class_hidden);
    $(`${this.geckoForm.formStepsSelector} ${gecko_selector_formStepComponent}`).removeClass('active');
    $(`${this.geckoForm.formStepsSelector} ${gecko_selector_formStepComponent}[stepid="${currentStepId}"]`).removeClass('done');
    $(`${this.geckoForm.formStepsSelector} ${gecko_selector_formStepComponent}[stepid="${currentStepId}"]`).addClass('active');
    if (previousStepId != null) $(`${this.geckoForm.formStepsSelector} ${gecko_selector_formStepComponent}[stepid="${previousStepId}"]`).addClass('done');
    if (this.geckoForm.currentStep > 1) {
      $(`${gecko_selector_formComponent}[stepid="${currentStepId}"]`).find(`${gecko_selector_inputGeneralElement}`)[0].focus();
      $(this.geckoForm.backButtonSelector).removeClass('gecko-button-disabled');
    } else $(this.geckoForm.backButtonSelector).addClass('gecko-button-disabled');
    this.setButtonLabels();
  }
  setButtonLabels() {
    const currentStepId = this.geckoForm.formSteps[this.geckoForm.currentStep - 1].stepId;
    const currentStep = this.geckoForm.formJson.steps.filter(step => step.stepId == currentStepId)[0];
    if (this.geckoForm.currentStep >= this.geckoForm.formSteps.length) {
      $(`${this.geckoForm.submitButtonSelector} p`).html(this.geckoForm.sendButtonLabel);
      return;
    }
    if (currentStep.saveStep) $(`${this.geckoForm.submitButtonSelector} p`).html(this.geckoForm.fowardSafeButtonLabel);else $(`${this.geckoForm.submitButtonSelector} p`).html(this.geckoForm.fowardButtonLabel);
  }
  moveToLastStep() {
    if (this.geckoForm.currentStep <= 1) return;
    this.geckoForm.geckoRequest.data.categories.pop();
    this.geckoForm.currentStep--;
    this.activateCurrentStep();
  }
  moveToNextStep() {
    $(`${this.geckoForm.formSelector} ${gecko_selector_inputGeneralElement}`).removeClass(gecko_class_formItemError);
    const currentFormStep = this.geckoForm.formSteps[this.geckoForm.currentStep - 1];
    const currentStepId = currentFormStep.stepId;
    const currentStepSelector = `${this.geckoForm.formSelector} ${gecko_selector_formComponent}[stepid="${currentStepId}"]`;
    let categoryRequestObject = {};
    const currentStep = this.geckoForm.formJson.steps.filter(step => step.stepId == currentStepId)[0];
    categoryRequestObject.name = currentStep.mailLabel;
    categoryRequestObject.children = [];
    let error = false;
    currentStep.rows.forEach(row => {
      row.elements.forEach(element => {
        const currentSelector = `${currentStepSelector} ${gecko_selector_inputGeneralElement}[name="${element.name}"]`;
        let value = '';
        switch (element.type) {
          case 'text':
            {
              value = $(currentSelector).val();
              break;
            }
          case 'email':
            {
              value = $(currentSelector).val();
              break;
            }
          case 'tel':
            {
              value = $(currentSelector).val();
              break;
            }
          case 'tel_':
            {
              value = $(currentSelector).val();
              break;
            }
          case 'textarea':
            {
              value = $(currentSelector).val();
              break;
            }
          case 'radio':
            {
              value = $(`${currentSelector}:checked`).val() ?? null;
              break;
            }
          case 'checkbox':
            {
              value = $(`${currentSelector}:checked`).map(function () {
                return $(this).val();
              }).get().join(', ');
              break;
            }
        }
        value = value == null ? null : value.trim() == '' ? null : value;
        if (value != null) categoryRequestObject.children.push({
          name: element.mailLabel,
          value: value
        });
        if (!this.isInputValid(element.required, element.type, value)) {
          $(currentSelector).addClass(gecko_class_formItemError);
          error = true;
        } else if (value != '') {
          $(currentSelector).addClass(gecko_class_formItemValid);
        }
      });
    });
    const manipulator = this;
    if (error) {
      const geckoMessage = new GeckoFormMessage(this.geckoForm.messageContainerSelector, 'error', 'Fehler', 'Bitte überprüfe deine Eingaben!');
      geckoMessage.generateMessage();
      geckoMessage.activateMessage();
      return;
    }
    this.geckoForm.geckoRequest.data.categories.push(categoryRequestObject);
    if (this.geckoForm.currentStep >= this.geckoForm.formSteps.length) {
      $(`${this.geckoForm.formSelector} ${gecko_selector_formComponent}`).addClass(gecko_class_hidden);
      const geckoMessage = new GeckoFormMessage(manipulator.geckoForm.messageContainerSelector, 'info', 'Absenden...', 'Das Formular wird abgesendet.');
      geckoMessage.generateMessage();
      geckoMessage.activateMessage();
      let geckoHeaders = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3dHpvbXR1cnJ0amNrcXpncnN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg0NjE4NDAsImV4cCI6MTk5NDAzNzg0MH0.K2Y_CMi3M6ZkHoebXGLfLffRncrilb57CI9Wx9_oL4o'
      };
      $.ajax({
        url: `https://zwtzomturrtjckqzgrsu.functions.supabase.co/mail-service?name=${this.geckoForm.formJson.requestName}`,
        method: 'POST',
        headers: geckoHeaders,
        contentType: 'application/json',
        data: JSON.stringify(this.geckoForm.geckoRequest),
        success: function (response) {
          const geckoMessage = new GeckoFormMessage(manipulator.geckoForm.messageContainerSelector, 'success', 'Erfolgreich', 'Das Formular wurde abgesendet.');
          geckoMessage.generateMessage();
          geckoMessage.activateMessage();
          manipulator.resetForm(manipulator);
          manipulator.gtag_report_conversion(undefined);
        },
        error: function (xhr, status, error) {
          const geckoMessage = new GeckoFormMessage(manipulator.geckoForm.messageContainerSelector, 'error', 'Fehler', 'Es ist ein Fehler aufgetreten');
          geckoMessage.generateMessage();
          geckoMessage.activateMessage();
          manipulator.activateCurrentStep();
        }
      });
    } else {
      if (currentStep.saveStep) {
        let geckoHeaders = {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3dHpvbXR1cnJ0amNrcXpncnN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg0NjE4NDAsImV4cCI6MTk5NDAzNzg0MH0.K2Y_CMi3M6ZkHoebXGLfLffRncrilb57CI9Wx9_oL4o'
        };
        $.ajax({
          url: `https://zwtzomturrtjckqzgrsu.functions.supabase.co/saveStep?name=${this.geckoForm.formJson.requestName}`,
          method: 'POST',
          headers: geckoHeaders,
          contentType: 'application/json',
          data: JSON.stringify(this.geckoForm.geckoRequest),
          success: function (response) {
            manipulator.geckoForm.geckoRequest.id = response.id;
          },
          error: function (xhr, status, error) {}
        });
      }
      this.geckoForm.currentStep++;
      this.activateCurrentStep();
    }
  }
  gtag_report_conversion(url) {
    var callback = function () {
      if (typeof url != 'undefined') {
        window.location = url;
      }
    };
    gtag('event', 'conversion', {
      'send_to': this.geckoForm.formJson.googleConversionCode,
      'event_callback': callback
    });
    return false;
  }
  isInputValid(required, type, value) {
    value = value == null ? null : value.trim() == '' ? null : value;
    if (required == true && value == null) return false;
    if (type == 'email') {
      const regex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/;
      if (!regex.test(value)) return false;
    } else if (type == 'tel') {
      const regex = /(\b(0041|0)|\B\+41)(\s?\(0\))?(\s)?[1-9]{2}(\s)?[0-9]{3}(\s)?[0-9]{2}(\s)?[0-9]{2}\b/;
      if (!regex.test(value)) return false;
    } else if (type == 'tel_') {
      const regex = /\b\d+(\s\d+)*\b/;
      if (!regex.test(value)) return false;
    }
    return true;
  }
  validateInput(selector, element, value) {
    $(selector).removeClass(gecko_class_formItemError);
    $(selector).removeClass(gecko_class_formItemValid);
    if (!this.isInputValid(element.required, element.type, value)) {
      $(selector).addClass(gecko_class_formItemError);
    } else if (value != '') {
      $(selector).addClass(gecko_class_formItemValid);
    }
  }
  resetForm(manipulator) {
    $(`${manipulator.geckoForm.formSelector}`).html('');
    $(`${manipulator.geckoForm.formStepsSelector}`).html('');
    const newForm = new GeckoForm(manipulator.geckoForm.formJson, manipulator.geckoForm.formSelector, manipulator.geckoForm.submitButtonSelector, manipulator.geckoForm.backButtonSelector, manipulator.geckoForm.formStepsSelector, manipulator.geckoForm.messageContainerSelector, manipulator.geckoForm.fowardButtonLabel, manipulator.geckoForm.sendButtonLabel, manipulator.geckoForm.fowardSafeButtonLabel);
    newForm.buildGeckoForm();
  }
}