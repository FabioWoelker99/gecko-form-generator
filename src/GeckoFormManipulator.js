class GeckoFormManipulator {
    constructor(geckoForm) {
        this.geckoForm = geckoForm;
    }

    buildGeckoSteps(json, stepType) {
        json.forEach(step => {
            if(step.type == stepType) this.buildSingleGeckoStep(step);
        });
    }

    destroyGeckoSteps(json) {

        const stepsToDestroy = this.geckoForm.formJson.steps.filter(step => json.includes(step.stepGroup));
        let stepIds = [];
        stepsToDestroy.forEach(step => stepIds.push(step.stepId) );

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
        $(`${this.geckoForm.formSelector} ${gecko_selector_formComponent}`).addClass(gecko_class_hidden);
        $(`${this.geckoForm.formSelector} ${gecko_selector_formComponent}[stepid="${this.geckoForm.formSteps[this.geckoForm.currentStep - 1]}"]`).removeClass(gecko_class_hidden);
    }

    moveToNextStep() {
        $(`${this.geckoForm.formSelector} ${gecko_selector_inputElement}`).removeClass(gecko_class_formItemError);

        const currentStepId = this.geckoForm.formSteps[this.geckoForm.currentStep - 1];
        const currentStepSelector = `${this.formSelector} ${gecko_selector_formComponent}[stepid="${currentStepId}"]`;
        let categoryRequestObject = {};

        categoryRequestObject.name = currentStepId;
        categoryRequestObject.children = [];

        const currentStep = this.geckoForm.formJson.steps.filter(step => step.stepId == currentStepId)[0];

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
        
        this.geckoForm.geckoRequest.data.categories.push(categoryRequestObject);

        if(this.geckoForm.currentStep >= this.geckoForm.formSteps.length) {
            $.ajax({
                url: `https://ltavphiuzenejhnrbxvl.functions.supabase.co/mail-service?name=${this.geckoForm.formJson.requestName}`,
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(this.geckoForm.geckoRequest),
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