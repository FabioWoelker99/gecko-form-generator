const gecko_class_formComponent="cmp--form";const gecko_class_formLayout="lyt--form";const gecko_class_formRowComponent="cmp--form-row";const gecko_class_formRowLayout="lyt--form-row";const gecko_class_formItemComponent="cmp--form-item";const gecko_class_formItemLayout="lyt--form-item";const gecko_class_inputElement="inp";const gecko_class_inputGeneralElement="gecko-inp";const gecko_class_label="p--l";const gecko_class_hidden="gecko-hidden";const gecko_class_formStepComponent="cmp--form-step";const gecko_class_formStepLayout="lyt--form-step";const gecko_class_formStepNumberComponent="cmp--form-step-number";const gecko_class_formStepNumberCD="cd--form-step-number";const gecko_class_formStepNumberLayout="lyt--form-step-number";const gecko_class_formStepNumberWrapper="wr_p--form-step-number";const gecko_class_formStepNumberLabel="h--xxs";const gecko_class_formStepNumberLabelStylingClasses="txt--lh-100";const gecko_class_formStepLabelWrapper="wr_p--form-step";const gecko_class_formStepLabelWrapperStylingClasses="wr_p txt--a-c txt--no-wrap";const gecko_class_formStepLabel="h--xxs";const gecko_class_formStepLabelStylingClasses="txt--lh-100";const gecko_class_formStepDivider="el--form-step";const gecko_class_formStepDividerStylingClasses="bg--pri";const gecko_class_formItemError="has_error";const gecko_class_radioButtonGroupComponent="cmp--rb-group";const gecko_class_radioButtonGroupLayout="lyt--rb-group";const gecko_class_radioButtonComponent="cmp--rb";const gecko_class_radioButtonLayout="lyt--rb";const gecko_class_radioButton="rb";const gecko_class_checkboxGroupComponent="cmp--cb-group";const gecko_class_checkboxGroupLayout="lyt--cb-group";const gecko_class_checkboxComponent="cmp--cb";const gecko_class_checkboxLayout="lyt--cb";const gecko_class_checkbox="cb";const gecko_selector_formComponent=`.${gecko_class_formComponent}`;const gecko_selector_formStepComponent=`.${gecko_class_formStepComponent}`;const gecko_selector_inputGeneralElement=`.${gecko_class_inputGeneralElement}`;const gecko_selector_formStepDivider=`.${gecko_class_formStepDivider}`;class GeckoFormManipulator{constructor(geckoForm){this.geckoForm=geckoForm}buildGeckoSteps(json,stepType){json.forEach(step=>{if(step.type==stepType)this.buildSingleGeckoStep(step)})}destroyGeckoSteps(json){const stepsToDestroy=this.geckoForm.formJson.steps.filter(step=>json.includes(step.stepGroup));let stepIds=[];stepsToDestroy.forEach(step=>stepIds.push(step.stepId));this.geckoForm.formSteps=this.geckoForm.formSteps.filter(step=>!stepIds.includes(step));json.forEach(stepGroup=>{$(`${this.geckoForm.formStepsSelector} ${gecko_selector_formStepComponent}[stepgroup="${stepGroup}"]`).remove();$(`${this.geckoForm.formStepsSelector} ${gecko_selector_formStepDivider}[stepgroup="${stepGroup}"]`).remove();$(`${this.geckoForm.formSelector} ${gecko_selector_formComponent}[stepgroup="${stepGroup}"]`).remove()})}buildSingleGeckoStep(json){this.geckoForm.formSteps.push(json.stepId);this.geckoForm.geckoFormGenerator.buildSingleGeckoStepView(json);this.geckoForm.geckoFormGenerator.buildSingleGeckoStepContent(json)}triggerStepManipulation(value,json){this.destroyGeckoSteps(json.stepGroups);const stepsToCreate=this.geckoForm.formJson.steps.filter(step=>step.stepGroup==value);this.buildGeckoSteps(stepsToCreate,"hidden")}activateCurrentStep(){$(`${this.geckoForm.formSelector} ${gecko_selector_formComponent}`).addClass(gecko_class_hidden);$(`${this.geckoForm.formSelector} ${gecko_selector_formComponent}[stepid="${this.geckoForm.formSteps[this.geckoForm.currentStep-1]}"]`).removeClass(gecko_class_hidden)}moveToLastStep(){this.geckoForm.geckoRequest.data.categories.pop();this.geckoForm.currentStep--;this.activateCurrentStep()}moveToNextStep(){$(`${this.geckoForm.formSelector} ${gecko_selector_inputGeneralElement}`).removeClass(gecko_class_formItemError);const currentStepId=this.geckoForm.formSteps[this.geckoForm.currentStep-1];const currentStepSelector=`${this.geckoForm.formSelector} ${gecko_selector_formComponent}[stepid="${currentStepId}"]`;let categoryRequestObject={};categoryRequestObject.name=currentStepId;categoryRequestObject.children=[];const currentStep=this.geckoForm.formJson.steps.filter(step=>step.stepId==currentStepId)[0];let error=false;currentStep.rows.forEach(row=>{row.elements.forEach(element=>{const currentSelector=`${currentStepSelector} ${gecko_selector_inputGeneralElement}[name="${element.name}"]`;let value="";switch(element.type){case"text":{value=$(currentSelector).val();break}case"email":{value=$(currentSelector).val();break}case"tel":{value=$(currentSelector).val();break}case"textarea":{value=$(currentSelector).val();break}case"radio":{value=$(`${currentSelector}:checked`).val()??null;break}case"checkbox":{break}}value=value==null?null:value.trim()==""?null:value;if(value!=null)categoryRequestObject.children.push({name:element.name,val:value});if(element.required==true&&value==null){$(currentSelector).addClass(gecko_class_formItemError);error=true}})});if(error){return}this.geckoForm.geckoRequest.data.categories.push(categoryRequestObject);if(this.geckoForm.currentStep>=this.geckoForm.formSteps.length){$.ajax({url:`https://ltavphiuzenejhnrbxvl.functions.supabase.co/mail-service?name=${this.geckoForm.formJson.requestName}`,method:"POST",contentType:"application/json",data:JSON.stringify(this.geckoForm.geckoRequest),success:function(response){console.log("Response:",response)},error:function(xhr,status,error){console.error("Error:",error)}})}this.geckoForm.currentStep++;this.activateCurrentStep()}}class GeckoFormListener{constructor(geckoForm){this.geckoForm=geckoForm}addMoveButtonListener(){$(`${this.geckoForm.submitButtonSelector}`).on("click",this.geckoForm.geckoFormManipulator.moveToNextStep.bind(this.geckoForm.geckoFormManipulator));$(`${this.geckoForm.backButtonSelector}`).on("click",this.geckoForm.geckoFormManipulator.moveToLastStep.bind(this.geckoForm.geckoFormManipulator))}addRadioTriggerListener(json){$(document).on("change",`${this.geckoForm.formSelector} input[type="radio"][name="${json.name}"]`,ev=>{this.geckoForm.geckoFormManipulator.triggerStepManipulation(ev.currentTarget.value,json)})}}class GeckoFormGenerator{constructor(geckoForm){this.geckoForm=geckoForm}buildSingleGeckoStepView(json){let content="";const stepGroup=json.stepGroup!=null?`stepgroup="${json.stepGroup}"`:"";if(this.geckoForm.formSteps.length>1){content+=`<div class="${gecko_class_formStepDivider} el ${gecko_class_formStepDividerStylingClasses}" stepid="${json.stepId}" ${stepGroup}></div>`}content+=`<div class="${gecko_class_formStepComponent} cmp" stepid="${json.stepId}" ${stepGroup}>`;content+=`<div class="${gecko_class_formStepLayout} lyt">`;content+=`<div class="${gecko_class_formStepNumberComponent} cmp">`;content+=`<div class="${gecko_class_formStepNumberCD} cd">`;content+=`<div class="${gecko_class_formStepNumberLayout} lyt">`;content+=`<div class="${gecko_class_formStepNumberWrapper} wr_p">`;content+=`<p class="${gecko_class_formStepNumberLabel} ${gecko_class_formStepNumberLabelStylingClasses}">${this.geckoForm.formSteps.length}</p>`;content+="</div>";content+="</div>";content+="</div>";content+="</div>";content+=`<div class="${gecko_class_formStepLabelWrapper} ${gecko_class_formStepLabelWrapperStylingClasses}">`;content+=`<p class="${gecko_class_formStepLabel} ${gecko_class_formStepLabelStylingClasses}">${json.label}</p>`;content+="</div>";content+="</div>";content+="</div>";$(`${this.geckoForm.formStepsSelector}`).append(content)}buildSingleGeckoStepContent(json){let content="";const stepGroup=json.stepGroup!=null?`stepgroup="${json.stepGroup}"`:"";content+=`<div class="${gecko_class_formComponent} cmp ${gecko_class_hidden}" stepid="${json.stepId}" ${stepGroup}>`;content+=`<div class="${gecko_class_formLayout} lyt">`;content+=this.generateRows(json.rows);content+="</div>";content+="</div>";$(`${this.geckoForm.formSelector}`).append(content)}generateRows(json){let content="";json.forEach(row=>{content+=this.generateSingleRow(row)});return content}generateSingleRow(json){let content="";content+=`<div class="${gecko_class_formRowComponent} cmp">`;content+=`<div class="${gecko_class_formRowLayout} lyt">`;json.elements.forEach(element=>{content+=this.generateSingleFormItem(element)});content+="</div>";content+="</div>";return content}generateSingleFormItem(json){let content="";content+=`<div class="${gecko_class_formItemComponent} cmp">`;content+=`<div class="${gecko_class_formItemLayout} lyt">`;switch(json.type){case"text":{content+=this.generateInputFormItem(json);break}case"email":{content+=this.generateInputFormItem(json);break}case"tel":{content+=this.generateInputFormItem(json);break}case"textarea":{content+=this.generateTextareaFormItem(json);break}case"radio":{content+=this.generateRadioFormItem(json);break}case"checkbox":{content+=this.generateCheckboxFormItem(json);break}}content+="</div>";content+="</div>";return content}generateRadioFormItem(json){let content="";const label=json.label??"";content+=`<p class="${gecko_class_label}">${label}</p>`;content+=`<div class="${gecko_class_radioButtonGroupComponent} cmp">`;content+=`<div class="${gecko_class_radioButtonGroupLayout} lyt">`;json.options.forEach(option=>{content+=`<div class="${gecko_class_radioButtonComponent} cmp">`;content+=`<div class="${gecko_class_radioButtonLayout} lyt">`;content+=`<input id="${option.id}" type="radio" name="${json.name}" class="${gecko_class_radioButton} ${gecko_class_inputGeneralElement}" value="${option.value}">`;content+=`<label class="${gecko_class_label}" for="${option.id}">${option.label}</label>`;content+="</div>";content+="</div>"});content+="</div>";content+="</div>";if(json.trigger==true)this.geckoForm.geckoFormListener.addRadioTriggerListener(json);return content}generateCheckboxFormItem(json){let content="";const label=json.label??"";content+=`<p class="${gecko_class_label}">${label}</p>`;content+=`<div class="${gecko_class_checkboxGroupComponent} cmp">`;content+=`<div class="${gecko_class_checkboxGroupLayout} lyt">`;json.options.forEach(option=>{content+=`<div class="${gecko_class_checkboxComponent} cmp">`;content+=`<div class="${gecko_class_checkboxLayout} lyt">`;content+=`<input id="${option.id}" type="checkbox" name="${json.name}" class="${gecko_class_checkbox} ${gecko_class_inputGeneralElement}" value="${option.value}">`;content+=`<label class="${gecko_class_label}" for="${option.id}">${option.label}</label>`;content+="</div>";content+="</div>"});content+="</div>";content+="</div>";return content}generateInputFormItem(json){const autocomplete=json.autocomplete?`autocomplete="${json.autocomplete}"`:"";const placeholder=json.placeholder?`placeholder="${json.placeholder}"`:"";const required=json.required?`required="${json.required}"`:"";const name=json.name?`name="${json.name}"`:"";const label=json.label??"";let content="";content+=`<p class="${gecko_class_label}">${label}</p>`;content+=`<input class="${gecko_class_inputElement} ${gecko_class_inputGeneralElement}" type="${json.type}" ${placeholder} ${required} ${autocomplete} ${name}>`;return content}generateTextareaFormItem(json){const placeholder=json.placeholder?`placeholder="${json.placeholder}"`:"";const required=json.required?`required="${json.required}"`:"";const name=json.name?`name="${json.name}"`:"";const label=json.label??"";let content="";content+=`<p class="${gecko_class_label}">${label}</p>`;content+=`<textarea class="${gecko_class_inputElement} ${gecko_class_inputGeneralElement}" ${placeholder} ${required} ${name}"></textarea>`;return content}}class GeckoForm{constructor(formJson,formSelector,submitButtonSelector,backButtonSelector,formStepsSelector){this.geckoFormGenerator=new GeckoFormGenerator(this);this.geckoFormListener=new GeckoFormListener(this);this.geckoFormManipulator=new GeckoFormManipulator(this);this.formJson=formJson;this.formSelector=formSelector;this.submitButtonSelector=submitButtonSelector;this.backButtonSelector=backButtonSelector;this.formStepsSelector=formStepsSelector;this.formSteps=[];this.currentStep=1;this.geckoRequest={data:{categories:[]}}}buildGeckoForm(){this.geckoFormManipulator.buildGeckoSteps(this.formJson.steps,"default");this.geckoFormManipulator.activateCurrentStep();this.geckoFormListener.addMoveButtonListener()}}