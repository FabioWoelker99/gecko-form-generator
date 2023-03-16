class GeckoFormListener {
  constructor(geckoForm) {
    this.geckoForm = geckoForm;
  }
  addMoveButtonListener() {
    $(`${this.geckoForm.submitButtonSelector}`).on('click', this.geckoForm.geckoFormManipulator.moveToNextStep.bind(this.geckoForm.geckoFormManipulator));
    $(`${this.geckoForm.backButtonSelector}`).on('click', this.geckoForm.geckoFormManipulator.moveToLastStep.bind(this.geckoForm.geckoFormManipulator));
  }
  addRadioTriggerListener(json) {
    $(document).on('change', `${this.geckoForm.formSelector} input[type="radio"][name="${json.name}"]`, ev => {
      this.geckoForm.geckoFormManipulator.triggerStepManipulation(ev.currentTarget.attr('stepgroup'), json);
    });
  }
  addCheckboxTriggerListener(json) {
    $(document).on('change', `${this.geckoForm.formSelector} input[type="checkbox"][name="${json.name}"]`, ev => {
      if (ev.currentTarget.checked == true) this.geckoForm.geckoFormManipulator.triggerStepManipulation(ev.currentTarget.attr('stepgroup'), null);
      if (ev.currentTarget.checked == false) this.geckoForm.geckoFormManipulator.triggerStepManipulation(null, [ev.currentTarget.attr('stepgroup')]);
    });
  }
}