class GeckoFormManipulator {
    constructor(geckoForm) {
        this.geckoForm = geckoForm;
    }

    buildGeckoSteps(json) {
        json.forEach(step => {
            if(step.type == 'default') this.buildSingleGeckoStep(step);
        });
    }

    destroyGeckoStep() {

    }

    buildSingleGeckoStep(json) {
        this.geckoForm.formSteps.push(json.stepId);

        this.geckoForm.geckoFormGenerator.buildSingleGeckoStepView(json);
        this.geckoForm.geckoFormGenerator.buildSingleGeckoStepContent(json);
    }

    activateCurrentStep() {
        $(`${this.formSelector} ${gecko_selector_formComponent}`).addClass(gecko_class_hidden);
        $(`${this.formSelector} ${gecko_selector_formComponent}[stepid="${this.formSteps[this.currentStep - 1]}"]`).removeClass(gecko_class_hidden);
    }

    moveToNextStep() {
        $(`${this.formSelector} ${gecko_selector_inputElement}`).removeClass(gecko_class_formItemError);

        const currentStepId = this.formSteps[this.currentStep - 1];
        const currentStepSelector = `${this.formSelector} ${gecko_selector_formComponent}[stepid="${currentStepId}"]`;
        let categoryRequestObject = {};

        categoryRequestObject.name = currentStepId;
        categoryRequestObject.children = [];

        const currentStep = this.formJson.steps.filter(step => step.stepId == currentStepId)[0];

        let error = false;
        
        currentStep.rows.forEach(row => {
            row.elements.forEach(element => {
                const currentSelector = `${currentStepSelector} ${gecko_selector_inputElement}[name="${element.name}"]`;
                const value = $(currentSelector).val().trim() != '' ? $(currentSelector).val() : null;
                if(value != null) categoryRequestObject.children.push({ name: element.name, val: value });

                if(element.required == true && value == null) {
                    $(currentSelector).addClass(gecko_class_formItemError);
                    error = true;
                }
            });
        });

        if(error) {
            // OTHER ERROR OPTIONS
            return;
        }
        
        this.geckoRequest.data.categories.push(categoryRequestObject);

        if(this.currentStep >= this.formSteps.length) {
            $.ajax({
                url: `https://ltavphiuzenejhnrbxvl.functions.supabase.co/mail-service?name=${this.formJson.requestName}`,
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(this.geckoRequest),
                success: function(response) {
                    console.log('Response:', response);
                },
                error: function(xhr, status, error) {
                    console.error('Error:', error);
                }
            });
        }

        this.currentStep++;
        this.activateCurrentStep();
    }
}