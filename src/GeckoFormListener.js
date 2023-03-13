class GeckoFormListener {
    constructor(geckoForm) {
        this.geckoForm = geckoForm;
    }

    addSubmitListener() {
        $(`${this.geckoForm.submitButtonSelector}`).on('click', this.geckoForm.geckoFormManipulator.moveToNextStep.bind(this.geckoForm.geckoFormManipulator));
    }

    addRadioTriggerListener(json) {
        $(document).on('change', `${this.geckoForm.formSelector} input[type="radio"][name="${json.name}"]`, ev => {
            const value = ev.currentTarget.value;

            console.log(ev.value);
            console.log(ev.currentTarget.value);
            console.log($(ev.currentTarget.value));

            // delete step groups

            // add step groups
            const steps = this.geckoForm.formJson.steps.filter(step => step.stepGroup == value);
            this.geckoForm.geckoFormManipulator.buildGeckoSteps(steps);

        });
    }
}