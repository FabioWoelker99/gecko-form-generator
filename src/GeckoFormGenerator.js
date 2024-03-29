class GeckoFormGenerator {
    constructor(geckoForm) {
        this.geckoForm = geckoForm;
        this.counter = 0;
    }
    
    buildSingleGeckoStepView(json, position) {
        let content = '';
        const stepGroup = json.stepGroup != null ? `stepgroup="${json.stepGroup}"` : '';

        if(this.geckoForm.formSteps.length > 1) {
            content += `<div class="${gecko_class_formStepDivider} el ${gecko_class_formStepDividerStylingClasses}" stepid="${json.stepId}" ${stepGroup}></div>`;
        }

        content += `<div class="${gecko_class_formStepComponent} cmp" stepid="${json.stepId}" ${stepGroup}>`;
            content += `<div class="${gecko_class_formStepLayout} lyt">`;

                content += `<div class="${gecko_class_formStepNumberComponent} cmp">`;
                    content += `<div class="${gecko_class_formStepNumberCD} cd">`;
                        content += `<div class="${gecko_class_formStepNumberLayout} lyt">`;
                            content += `<div class="${gecko_class_formStepNumberWrapper} wr_p">`;
                                content += `<p class="${gecko_class_formStepNumberLabel} ${gecko_class_formStepNumberLabelStylingClasses}">${this.geckoForm.formSteps.length}</p>`;
                            content += '</div>';
                        content += '</div>';
                    content += '</div>';
                content += '</div>';

                content += `<div class="${gecko_class_formStepLabelWrapper} ${gecko_class_formStepLabelWrapperStylingClasses}">`;
                    content += `<p class="${gecko_class_formStepLabel} ${gecko_class_formStepLabelStylingClasses}">${json.label}</p>`;
                content += '</div>';

            content += '</div>';
        content += '</div>';

        if(position >= 0) $(`${this.geckoForm.formStepsSelector}`).children(`${gecko_selector_formStepComponent}`).eq(position).after(content);
        else $(`${this.geckoForm.formStepsSelector}`).append(content);

        this.geckoForm.geckoFormManipulator.adjustGeckoStepNumbers();
    }

    buildSingleGeckoStepContent(json) {
        let content = '';
        const stepGroup = json.stepGroup != null ? `stepgroup="${json.stepGroup}"` : '';

        content += `<div class="${gecko_class_formComponent} cmp ${gecko_class_hidden}" stepid="${json.stepId}" ${stepGroup}>`;
            content += `<div class="${gecko_class_formLayout} lyt">`;
                content += this.generateRows(json.rows);
            content += '</div>';
        content += '</div>';

        $(`${this.geckoForm.formSelector}`).append(content);
    }

    generateRows(json) {
        let content = '';
    
        json.forEach(row => {
            content += this.generateSingleRow(row);
        });
        this.counter = 0;
        return content;
    }
    
    generateSingleRow(json) {
        let content = '';
    
        content += `<div class="${gecko_class_formRowComponent} cmp">`;
            content += `<div class="${gecko_class_formRowLayout} lyt">`;
    
                json.elements.forEach(element => {
                    content += this.generateSingleFormItem(element);
                    this.counter += 1;
                });
    
            content += '</div>';
        content += '</div>';
        return content;
    }
    
    generateSingleFormItem(json) {
        let content = '';
    
        content += `<div class="${gecko_class_formItemComponent} cmp">`;
            content += `<div class="${gecko_class_formItemLayout} lyt">`;
    
                switch(json.type) {
                    case 'text': {
                        content += this.generateInputFormItem(json);
                        break;
                    }
                    case 'email': {
                        content += this.generateInputFormItem(json);
                        break;
                    }
                    case 'tel': {
                        content += this.generateInputFormItem(json);
                        break;
                    }
                    case 'tel_': {
                        content += this.generateInputFormItem(json);
                        break;
                    }
                    case 'textarea': {
                        content += this.generateTextareaFormItem(json);
                        break;
                    }
                    case 'radio': {
                        content += this.generateRadioFormItem(json);
                        break;
                    }
                    case 'checkbox': {
                        content += this.generateCheckboxFormItem(json);
                        break;
                    }
                }
    
                
            content += '</div>';
        content += '</div>';
    
        return content;
    }
    
    generateRadioFormItem(json) {
        let content = '';
    
        const label = json.label ?? '';
    
        content += `<p class="${gecko_class_label}">${label}</p>`;
    
        content += `<div class="${gecko_class_radioButtonGroupComponent} cmp">`;
            content += `<div class="${gecko_class_radioButtonGroupLayout} lyt">`;
    
            json.options.forEach(option => {
                const checked = option.default ? 'checked' : '';
                content += `<div class="${gecko_class_radioButtonComponent} cmp">`;
                    content += `<div class="${gecko_class_radioButtonLayout} lyt">`;
                        content += `<input id="${option.id}" type="radio" name="${json.name}" class="${gecko_class_radioButton} ${gecko_class_inputGeneralElement}" value="${option.value}" stepgroup="${option.stepGroup}" ${checked}>`;
                        content += `<label class="${gecko_class_label}" for="${option.id}">${option.label}</label>`;
                    content += '</div>';
                content += '</div>';
            });
    
            content += '</div>';
        content += '</div>';

        if(json.trigger == true) this.geckoForm.geckoFormListener.addRadioTriggerListener(json, json.stepGroups);
    
        return content;
    }
    
    generateCheckboxFormItem(json) {
        let content = '';
    
        const label = json.label ?? '';
    
        content += `<p class="${gecko_class_label}">${label}</p>`;
    
        content += `<div class="${gecko_class_checkboxGroupComponent} cmp">`;
            content += `<div class="${gecko_class_checkboxGroupLayout} lyt">`;
    
            json.options.forEach(option => {
                content += `<div class="${gecko_class_checkboxComponent} cmp">`;
                    content += `<div class="${gecko_class_checkboxLayout} lyt">`;
                        content += `<input id="${option.id}" type="checkbox" name="${json.name}" class="${gecko_class_checkbox} ${gecko_class_inputGeneralElement}" value="${option.value}" stepgroup="${option.stepGroup}">`;
                        content += `<label class="${gecko_class_label}" for="${option.id}">${option.label}</label>`;
                    content += '</div>';
                content += '</div>';
            });
    
            content += '</div>';
        content += '</div>';
    
        if(json.trigger == true) this.geckoForm.geckoFormListener.addCheckboxTriggerListener(json);

        return content;
    }
    
    generateInputFormItem(json) {
        const autocomplete = json.autocomplete ? `autocomplete="${json.autocomplete}"` : '';
        const placeholder = json.placeholder ? `placeholder="${json.placeholder}"` : '';
        const required = json.required ? `required="${json.required}"` : '';
        const name = json.name ? `name="${json.name}"` : '';
        const label = json.label ?? '';
    
        let content = '';
        content += `<p class="${gecko_class_label}">${label}</p>`;
        content += `<input class="${gecko_class_inputElement} ${gecko_class_inputGeneralElement}" type="${json.type}" ${placeholder} ${required} ${autocomplete} ${name}>`;
    
        this.geckoForm.geckoFormListener.addRealtimeValidationListener(json);

        return content;
    }
    
    generateTextareaFormItem(json) {
        const placeholder = json.placeholder ? `placeholder="${json.placeholder}"` : '';
        const required = json.required ? `required="${json.required}"` : '';
        const name = json.name ? `name="${json.name}"` : '';
        const label = json.label ?? '';
    
        let content = '';
        content += `<p class="${gecko_class_label}">${label}</p>`;
        content += `<textarea class="${gecko_class_inputElement} ${gecko_class_inputGeneralElement}" ${placeholder} ${required} ${name}"></textarea>`;
    
        return content;
    }
}