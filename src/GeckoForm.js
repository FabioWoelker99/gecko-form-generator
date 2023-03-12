class GeckoForm {
    constructor(formJson, formSelector, submitButtonSelector, formStepsSelector) {
        this.geckoFormGenerator = new GeckoFormGenerator(formJson, formSelector, formStepsSelector, this);
        this.formJson = formJson;
        this.formSelector = formSelector;
        this.submitButtonSelector = submitButtonSelector;
        this.formStepsSelector = formStepsSelector;
        this.formSteps = [];
        this.currentStep = 1;
        this.geckoRequest = { data: { categories: [] } };
    }

    validateGeckoForm() {
        // TODO possible VALIDATION of JSON here
    }


    buildConditionals() {
        
    }

    buildGeckoForm() {
        this.geckoFormGenerator.buildGeckoSteps();
        //this.buildConditionals();
        this.activateCurrentStep();
        this.addListener();
    }

    activateCurrentStep() {
        $(`${this.formSelector} ${gecko_selector_formComponent}`).addClass(gecko_class_hidden);
        $(`${this.formSelector} ${gecko_selector_formComponent}[stepid="${this.formSteps[this.currentStep - 1]}"]`).removeClass(gecko_class_hidden);
    }

    addListener() {
        $(`${this.submitButtonSelector}`).on('click', this.moveToNextStep.bind(this));
    }

    // TODO refactor method
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

    /*checkEntries() {
        this.formJson.rows.forEach(row => {
            row.elements.forEach(element => {
                //if(element)
            });
        });
    }*/
}


// CHECK JSON RULES!!!

// Edge casees (form steps change AFTER WE STARTED!!!)

// Add error handling for exceptions????


// TODO Form clear nach absenden

// TODO Messages

// TODO maybe some loading after adding new sections