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
    this.geckoForm.formSteps = this.geckoForm.formSteps.filter(step => !stepIds.includes(step));
    json.forEach(stepGroup => {
      $(`${this.geckoForm.formStepsSelector} ${gecko_selector_formStepComponent}[stepgroup="${stepGroup}"]`).remove();
      $(`${this.geckoForm.formStepsSelector} ${gecko_selector_formStepDivider}[stepgroup="${stepGroup}"]`).remove();
      $(`${this.geckoForm.formSelector} ${gecko_selector_formComponent}[stepgroup="${stepGroup}"]`).remove();
    });
  }
  buildSingleGeckoStep(json) {
    this.geckoForm.formSteps.push(json.stepId);
    this.geckoForm.geckoFormGenerator.buildSingleGeckoStepView(json);
    this.geckoForm.geckoFormGenerator.buildSingleGeckoStepContent(json);
  }
  triggerStepManipulation(value, json) {
    this.destroyGeckoSteps(json.stepGroups);
    const stepsToCreate = this.geckoForm.formJson.steps.filter(step => step.stepGroup == value);
    this.buildGeckoSteps(stepsToCreate, 'hidden');
  }
  activateCurrentStep() {
    const currentStepId = this.geckoForm.formSteps[this.geckoForm.currentStep - 1];
    const previousStepId = this.geckoForm.currentStep - 2 >= 0 ? this.geckoForm.formSteps[this.geckoForm.currentStep - 2] : null;
    $(`${this.geckoForm.formSelector} ${gecko_selector_formComponent}`).addClass(gecko_class_hidden);
    $(`${this.geckoForm.formSelector} ${gecko_selector_formComponent}[stepid="${currentStepId}"]`).removeClass(gecko_class_hidden);
    $(`${this.geckoForm.formStepsSelector} ${gecko_selector_formStepComponent}`).removeClass('active');
    $(`${this.geckoForm.formStepsSelector} ${gecko_selector_formStepComponent}[stepid="${currentStepId}"]`).removeClass('done');
    $(`${this.geckoForm.formStepsSelector} ${gecko_selector_formStepComponent}[stepid="${currentStepId}"]`).addClass('active');
    if (previousStepId != null) $(`${this.geckoForm.formStepsSelector} ${gecko_selector_formStepComponent}[stepid="${previousStepId}"]`).addClass('done');
    if (this.geckoForm.currentStep > 1) $(this.geckoForm.backButtonSelector).removeClass('gecko-button-disabled');else $(this.geckoForm.backButtonSelector).addClass('gecko-button-disabled');
  }
  moveToLastStep() {
    if (this.geckoForm.currentStep <= 1) return;
    this.geckoForm.geckoRequest.data.categories.pop();
    this.geckoForm.currentStep--;
    this.activateCurrentStep();
  }
  moveToNextStep() {
    $(`${this.geckoForm.formSelector} ${gecko_selector_inputGeneralElement}`).removeClass(gecko_class_formItemError);
    const currentStepId = this.geckoForm.formSteps[this.geckoForm.currentStep - 1];
    const currentStepSelector = `${this.geckoForm.formSelector} ${gecko_selector_formComponent}[stepid="${currentStepId}"]`;
    let categoryRequestObject = {};
    categoryRequestObject.name = currentStepId;
    categoryRequestObject.children = [];
    const currentStep = this.geckoForm.formJson.steps.filter(step => step.stepId == currentStepId)[0];
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
              break;
            }
        }
        value = value == null ? null : value.trim() == '' ? null : value;
        if (value != null) categoryRequestObject.children.push({
          name: element.name,
          val: value
        });
        if (element.required == true && value == null) {
          $(currentSelector).addClass(gecko_class_formItemError);
          error = true;
        }
      });
    });
    if (error) {
      const geckoMessage = new GeckoFormMessage(this.geckoForm.messageContainerSelector, 'error', 'Fehler', 'Testnachricht');
      geckoMessage.generateMessage();
      geckoMessage.activateMessage();
      return;
    }
    this.geckoForm.geckoRequest.data.categories.push(categoryRequestObject);
    if (this.geckoForm.currentStep >= this.geckoForm.formSteps.length) {
      let geckoHeaders = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3dHpvbXR1cnJ0amNrcXpncnN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg0NjE4NDAsImV4cCI6MTk5NDAzNzg0MH0.K2Y_CMi3M6ZkHoebXGLfLffRncrilb57CI9Wx9_oL4o'
      };
      $.ajax({
        url: `https://https://zwtzomturrtjckqzgrsu.functions.supabase.co/mail-service?name=${this.geckoForm.formJson.requestName}`,
        method: 'POST',
        headers: geckoHeaders,
        contentType: 'application/json',
        data: JSON.stringify(this.geckoForm.geckoRequest),
        success: function (response) {
          console.log('Response:', response);
        },
        error: function (xhr, status, error) {
          console.error('Error:', error);
        }
      });
    }
    this.geckoForm.currentStep++;
    this.activateCurrentStep();
  }
}