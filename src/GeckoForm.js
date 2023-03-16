class GeckoForm {
    constructor(formJson, formSelector, submitButtonSelector, backButtonSelector, formStepsSelector, messageContainerSelector) {
        this.geckoFormGenerator = new GeckoFormGenerator(this);
        this.geckoFormListener = new GeckoFormListener(this);
        this.geckoFormManipulator = new GeckoFormManipulator(this);
        this.formJson = formJson;
        this.formSelector = formSelector;
        this.submitButtonSelector = submitButtonSelector;
        this.backButtonSelector = backButtonSelector;
        this.formStepsSelector = formStepsSelector;
        this.messageContainerSelector = messageContainerSelector;
        this.formSteps = [];
        this.currentStep = 1;
        this.geckoRequest = { data: { categories: [] } };
    }

    buildGeckoForm() {
        this.geckoFormManipulator.buildGeckoSteps(this.formJson.steps, 'default');
        this.geckoFormManipulator.activateCurrentStep();
        this.geckoFormListener.addMoveButtonListener();
    }
}

