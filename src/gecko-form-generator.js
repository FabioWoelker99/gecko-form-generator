const gecko_selector_submitButton = '.wr_btn--submit';
const gecko_selector_form = '.lyt--form';

const gecko_class_formRowComponent = 'cmp--form-row';
const gecko_class_formRowLayout = 'lyt--form-row';
const gecko_class_formItemComponent = 'cmp--form-item';
const gecko_class_formItemLayout = 'lyt--form-item';
const gecko_class_inputElement = 'inp';

// eslint-disable-next-line no-unused-vars
class GeckoForm {
    constructor(formJson, formSelector) {
        this.formJson = formJson;
        this.formSelector = formSelector;
    }

    validateGeckoForm() {
        // VALIDATION HERE
    }

    buildGeckoForm() {
        const rows = this.generateRows(this.formJson.rows);

        $(`${this.formSelector} ${gecko_selector_form}`).append(rows);

        this.addListener();
    }

    addListener() {
        $(`${this.formSelector} ${gecko_selector_submitButton}`).on('click', () => {
            console.log('submit button clicked');
        });
    }

    /*checkEntries() {
        this.formJson.rows.forEach(row => {
            row.elements.forEach(element => {
                //if(element)
            });
        });
    }*/

    generateRows(json) {
        let content = '';

        json.forEach(row => {
            content += this.generateSingleRow(row);
        });

        return content;
    }

    generateSingleRow(json) {
        let content = '';

        content += `<div class="${gecko_class_formRowComponent} cmp">`;
            content += `<div class="${gecko_class_formRowLayout} lyt">`;

                json.elements.forEach(element => {
                    content += this.generateSingleFormItem(element);
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
                    case 'textarea': {
                        content += this.generateTextareaFormItem(json);
                        break;
                    }
                }

                
            content += '</div>';
        content += '</div>';

        return content;
    }

    generateInputFormItem(json) {
        const autocomplete = json.autocomplete ? `autocomplete="${json.autocomplete}"` : '';
        const placeholder = json.placeholder ? `placeholder="${json.placeholder}"` : '';
        const required = json.required ? `required="${json.required}"` : '';

        return `<input class="${gecko_class_inputElement}" type="${json.type}" ${placeholder} ${required} ${autocomplete}>`;
    }

    generateTextareaFormItem(json) {
        const placeholder = json.placeholder ? `placeholder="${json.placeholder}"` : '';
        const required = json.required ? `required="${json.required}"` : '';

        return `<textarea class="${gecko_class_inputElement}" ${placeholder} ${required}"></textarea>`;
    }
}


// CHECK JSON RULES!!!