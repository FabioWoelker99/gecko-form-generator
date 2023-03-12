class GeckoFormListener {
    constructor(geckoForm) {
        this.geckoForm = geckoForm;
    }

    addSubmitListener() {
        $(`${this.geckoForm.submitButtonSelector}`).on('click', this.geckoForm.moveToNextStep.bind(this.geckoForm));
    }
}