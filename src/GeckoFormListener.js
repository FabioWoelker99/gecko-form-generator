class GeckoFormListener {
    constructor(geckoForm) {
        this.geckoForm = geckoForm;
    }

    addSubmitListener() {
        $(`${this.geckoForm.submitButtonSelector}`).on('click', this.moveToNextStep.bind(this.geckoForm));
    }
}