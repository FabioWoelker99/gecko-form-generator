const gecko_class_formComponent="cmp--form";const gecko_class_formLayout="lyt--form";const gecko_class_formRowComponent="cmp--form-row";const gecko_class_formRowLayout="lyt--form-row";const gecko_class_formItemComponent="cmp--form-item";const gecko_class_formItemLayout="lyt--form-item";const gecko_class_inputElement="inp";const gecko_class_inputGeneralElement="gecko-inp";const gecko_class_label="p--l";const gecko_class_hidden="gecko-hidden";const gecko_class_formStepComponent="cmp--form-step";const gecko_class_formStepLayout="lyt--form-step";const gecko_class_formStepNumberComponent="cmp--form-step-number";const gecko_class_formStepNumberCD="cd--form-step-number";const gecko_class_formStepNumberLayout="lyt--form-step-number";const gecko_class_formStepNumberWrapper="wr_p--form-step-number";const gecko_class_formStepNumberLabel="h--xxs";const gecko_class_formStepNumberLabelStylingClasses="txt--lh-100";const gecko_class_formStepLabelWrapper="wr_p--form-step";const gecko_class_formStepLabelWrapperStylingClasses="wr_p txt--a-c txt--no-wrap";const gecko_class_formStepLabel="h--xxs";const gecko_class_formStepLabelStylingClasses="txt--lh-100";const gecko_class_formStepDivider="el--form-step";const gecko_class_formStepDividerStylingClasses="bg--pri";const gecko_class_formItemError="has_error";const gecko_class_radioButtonGroupComponent="cmp--rb-group";const gecko_class_radioButtonGroupLayout="lyt--rb-group";const gecko_class_radioButtonComponent="cmp--rb";const gecko_class_radioButtonLayout="lyt--rb";const gecko_class_radioButton="rb";const gecko_class_checkboxGroupComponent="cmp--cb-group";const gecko_class_checkboxGroupLayout="lyt--cb-group";const gecko_class_checkboxComponent="cmp--cb";const gecko_class_checkboxLayout="lyt--cb";const gecko_class_checkbox="cb";const gecko_selector_formComponent=`.${gecko_class_formComponent}`;const gecko_selector_formStepComponent=`.${gecko_class_formStepComponent}`;const gecko_selector_inputGeneralElement=`.${gecko_class_inputGeneralElement}`;const gecko_selector_formStepDivider=`.${gecko_class_formStepDivider}`;const gecko_selector_formStepNumberLabel=`.${gecko_class_formStepNumberLabel}`;const gecko_class_message="gecko-msg";const gecko_class_messageComponent="cmp--msg";const gecko_class_messageSuccessCard="cd--msg-success";const gecko_class_messageErrorCard="cd--msg-error";const gecko_class_messageLayout="lyt--msg";const gecko_class_messageContentComponent="cmp--msg-content";const gecko_class_messageContentLayout="lyt--msg-content";const gecko_class_messageTitleComponent="cmp--msg-title";const gecko_class_messageTitleLayout="lyt--msg-title";const gecko_class_messageIconWrapper="wr_ico--msg";const gecko_class_messageTitleWrapper="wr_p--msg";const gecko_class_messageCloseIconWrapper="wr_ico--msg-close";const gecko_class_messageTitleLabel="h--xs";const gecko_class_messageTextWrapper="wr_p--msg";const gecko_class_messageTextLabel="p--m";const gecko_class_messageSuccessStyling="txt--c-success";const gecko_class_messageErrorStyling="txt--c-error";const gecko_selector_message=`.${gecko_class_message}`;const gecko_selector_messageCloseIconWrapper=`.${gecko_class_messageCloseIconWrapper}`;const gecko_icon_close='<svg display="block" width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 8L16 16" stroke="#8B8B8B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 16L16 8" stroke="#8B8B8B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';const gecko_icon_successMessage='<svg display="block" width="20px" height="20px" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.99961 1.9001C5.5261 1.9001 1.89961 5.52659 1.89961 10.0001C1.89961 14.4736 5.5261 18.1001 9.99961 18.1001C14.4731 18.1001 18.0996 14.4736 18.0996 10.0001C18.0996 5.52659 14.4731 1.9001 9.99961 1.9001ZM0.0996094 10.0001C0.0996094 4.53248 4.53199 0.100098 9.99961 0.100098C15.4672 0.100098 19.8996 4.53248 19.8996 10.0001C19.8996 15.4677 15.4672 19.9001 9.99961 19.9001C4.53199 19.9001 0.0996094 15.4677 0.0996094 10.0001ZM13.636 7.3637C13.9875 7.71517 13.9875 8.28502 13.636 8.63649L9.63601 12.6365C9.28453 12.988 8.71469 12.988 8.36321 12.6365L6.36321 10.6365C6.01174 10.285 6.01174 9.71517 6.36321 9.3637C6.71469 9.01223 7.28453 9.01223 7.63601 9.3637L8.99961 10.7273L12.3632 7.3637C12.7147 7.01223 13.2845 7.01223 13.636 7.3637Z"/></svg>';const gecko_icon_errorMessage='<svg display="block" width="20px" height="20px" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.99961 1.9001C5.5261 1.9001 1.89961 5.52659 1.89961 10.0001C1.89961 14.4736 5.5261 18.1001 9.99961 18.1001C14.4731 18.1001 18.0996 14.4736 18.0996 10.0001C18.0996 5.52659 14.4731 1.9001 9.99961 1.9001ZM0.0996094 10.0001C0.0996094 4.53248 4.53199 0.100098 9.99961 0.100098C15.4672 0.100098 19.8996 4.53248 19.8996 10.0001C19.8996 15.4677 15.4672 19.9001 9.99961 19.9001C4.53199 19.9001 0.0996094 15.4677 0.0996094 10.0001ZM6.36321 6.3637C6.71469 6.01223 7.28453 6.01223 7.63601 6.3637L9.99961 8.72731L12.3632 6.3637C12.7147 6.01223 13.2845 6.01223 13.636 6.3637C13.9875 6.71517 13.9875 7.28502 13.636 7.63649L11.2724 10.0001L13.636 12.3637C13.9875 12.7152 13.9875 13.285 13.636 13.6365C13.2845 13.988 12.7147 13.988 12.3632 13.6365L9.99961 11.2729L7.63601 13.6365C7.28453 13.988 6.71469 13.988 6.36321 13.6365C6.01174 13.285 6.01174 12.7152 6.36321 12.3637L8.72682 10.0001L6.36321 7.63649C6.01174 7.28502 6.01174 6.71517 6.36321 6.3637Z"/></svg>';class GeckoFormManipulator{constructor(geckoForm){this.geckoForm=geckoForm}buildGeckoSteps(json,stepType){json.forEach(step=>{if(step.type==stepType)this.buildSingleGeckoStep(step)})}destroyGeckoSteps(json){const stepsToDestroy=this.geckoForm.formJson.steps.filter(step=>json.includes(step.stepGroup));let stepIds=[];stepsToDestroy.forEach(step=>stepIds.push(step.stepId));this.geckoForm.formSteps=this.geckoForm.formSteps.filter(step=>!stepIds.includes(step.stepId));this.adjustGeckoStepNumbers();json.forEach(stepGroup=>{$(`${this.geckoForm.formStepsSelector} ${gecko_selector_formStepComponent}[stepgroup="${stepGroup}"]`).remove();$(`${this.geckoForm.formStepsSelector} ${gecko_selector_formStepDivider}[stepgroup="${stepGroup}"]`).remove();$(`${this.geckoForm.formSelector} ${gecko_selector_formComponent}[stepgroup="${stepGroup}"]`).remove()})}adjustGeckoStepNumbers(){let i=0;this.geckoForm.formSteps.forEach(step=>{$(`${this.geckoForm.formStepsSelector} ${gecko_selector_formStepComponent}[stepid="${step.stepId}"] ${gecko_selector_formStepNumberLabel}`).html(i);i++})}buildSingleGeckoStep(json){let position=0;this.geckoForm.formSteps.forEach(step=>{if(json.index<step.index)return;position++});if(position>=0)this.geckoForm.formSteps.splice(position,0,{stepId:json.stepId,index:json.index});else this.geckoForm.formSteps.push({stepId:json.stepId,index:json.index});this.geckoForm.geckoFormGenerator.buildSingleGeckoStepView(json,position-1);this.geckoForm.geckoFormGenerator.buildSingleGeckoStepContent(json)}triggerStepManipulation(stepGroup,json){if(json!=null)this.destroyGeckoSteps(json);if(stepGroup!=null){const stepsToCreate=this.geckoForm.formJson.steps.filter(step=>step.stepGroup==stepGroup);this.buildGeckoSteps(stepsToCreate,"hidden")}}activateCurrentStep(){const currentStepId=this.geckoForm.formSteps[this.geckoForm.currentStep-1].stepId;const previousStepId=this.geckoForm.currentStep-2>=0?this.geckoForm.formSteps[this.geckoForm.currentStep-2].stepId:null;$(`${this.geckoForm.formSelector} ${gecko_selector_formComponent}`).addClass(gecko_class_hidden);$(`${this.geckoForm.formSelector} ${gecko_selector_formComponent}[stepid="${currentStepId}"]`).removeClass(gecko_class_hidden);$(`${this.geckoForm.formStepsSelector} ${gecko_selector_formStepComponent}`).removeClass("active");$(`${this.geckoForm.formStepsSelector} ${gecko_selector_formStepComponent}[stepid="${currentStepId}"]`).removeClass("done");$(`${this.geckoForm.formStepsSelector} ${gecko_selector_formStepComponent}[stepid="${currentStepId}"]`).addClass("active");if(previousStepId!=null)$(`${this.geckoForm.formStepsSelector} ${gecko_selector_formStepComponent}[stepid="${previousStepId}"]`).addClass("done");if(this.geckoForm.currentStep>1)$(this.geckoForm.backButtonSelector).removeClass("gecko-button-disabled");else $(this.geckoForm.backButtonSelector).addClass("gecko-button-disabled")}moveToLastStep(){if(this.geckoForm.currentStep<=1)return;this.geckoForm.geckoRequest.data.categories.pop();this.geckoForm.currentStep--;this.activateCurrentStep()}moveToNextStep(){$(`${this.geckoForm.formSelector} ${gecko_selector_inputGeneralElement}`).removeClass(gecko_class_formItemError);const currentStepId=this.geckoForm.formSteps[this.geckoForm.currentStep-1].stepId;const currentStepSelector=`${this.geckoForm.formSelector} ${gecko_selector_formComponent}[stepid="${currentStepId}"]`;let categoryRequestObject={};categoryRequestObject.name=currentStepId;categoryRequestObject.children=[];const currentStep=this.geckoForm.formJson.steps.filter(step=>step.stepId==currentStepId)[0];let error=false;currentStep.rows.forEach(row=>{row.elements.forEach(element=>{const currentSelector=`${currentStepSelector} ${gecko_selector_inputGeneralElement}[name="${element.name}"]`;let value="";switch(element.type){case"text":{value=$(currentSelector).val();break}case"email":{value=$(currentSelector).val();break}case"tel":{value=$(currentSelector).val();break}case"textarea":{value=$(currentSelector).val();break}case"radio":{value=$(`${currentSelector}:checked`).val()??null;break}case"checkbox":{value=$(`${currentSelector}:checked`).map(function(){return $(this).val()}).get().join(", ");break}}value=value==null?null:value.trim()==""?null:value;if(value!=null)categoryRequestObject.children.push({name:element.name,value:value});if(element.required==true&&value==null){$(currentSelector).addClass(gecko_class_formItemError);error=true}})});const geckoFormMessageContainerSelector=this.geckoForm.messageContainerSelector;if(error){const geckoMessage=new GeckoFormMessage(geckoFormMessageContainerSelector,"error","Fehler","Bitte überprüfe deine Eingaben!");geckoMessage.generateMessage();geckoMessage.activateMessage();return}this.geckoForm.geckoRequest.data.categories.push(categoryRequestObject);if(this.geckoForm.currentStep>=this.geckoForm.formSteps.length){let geckoHeaders={"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3dHpvbXR1cnJ0amNrcXpncnN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg0NjE4NDAsImV4cCI6MTk5NDAzNzg0MH0.K2Y_CMi3M6ZkHoebXGLfLffRncrilb57CI9Wx9_oL4o"};$.ajax({url:`https://zwtzomturrtjckqzgrsu.functions.supabase.co/mail-service?name=${this.geckoForm.formJson.requestName}`,method:"POST",headers:geckoHeaders,contentType:"application/json",data:JSON.stringify(this.geckoForm.geckoRequest),success:function(response){const geckoMessage=new GeckoFormMessage(geckoFormMessageContainerSelector,"success","Erfolgreich","Das Formular wurde abgesendet.");geckoMessage.generateMessage();geckoMessage.activateMessage()},error:function(xhr,status,error){const geckoMessage=new GeckoFormMessage(geckoFormMessageContainerSelector,"error","Fehler","Es ist ein Fehler aufgetreten");geckoMessage.generateMessage();geckoMessage.activateMessage()}})}else{this.geckoForm.currentStep++;this.activateCurrentStep()}}resetForm(){$(`${this.geckoForm.formSelector}`).html("");$(`${this.geckoForm.formStepsSelector}`).html("");const newForm=new GeckoForm(this.geckoForm.formJson,this.geckoForm.formJson,this.geckoForm.formJson,this.geckoForm.formJson,this.geckoForm.formJson,this.geckoForm.formJson);newForm.buildGeckoForm()}}class GeckoFormListener{constructor(geckoForm){this.geckoForm=geckoForm}addMoveButtonListener(){$(`${this.geckoForm.submitButtonSelector}`).on("click",this.geckoForm.geckoFormManipulator.moveToNextStep.bind(this.geckoForm.geckoFormManipulator));$(`${this.geckoForm.backButtonSelector}`).on("click",this.geckoForm.geckoFormManipulator.moveToLastStep.bind(this.geckoForm.geckoFormManipulator))}addRadioTriggerListener(json,stepGroups){$(document).on("change",`${this.geckoForm.formSelector} input[type="radio"][name="${json.name}"]`,ev=>{this.geckoForm.geckoFormManipulator.triggerStepManipulation($(ev.currentTarget).attr("stepgroup"),stepGroups)})}addCheckboxTriggerListener(json){$(document).on("change",`${this.geckoForm.formSelector} input[type="checkbox"][name="${json.name}"]`,ev=>{if(ev.currentTarget.checked==true)this.geckoForm.geckoFormManipulator.triggerStepManipulation($(ev.currentTarget).attr("stepgroup"),null);if(ev.currentTarget.checked==false)this.geckoForm.geckoFormManipulator.triggerStepManipulation(null,[$(ev.currentTarget).attr("stepgroup")])})}}class GeckoFormMessage{constructor(messageContainerSelector,type,title,message){this.messageContainerSelector=messageContainerSelector;this.type=type;this.title=title;this.message=message;this.messageContent=""}activateMessage(){$(`${this.messageContainerSelector}`).append(this.messageContent);const messageElement=$(`${this.messageContainerSelector} ${gecko_selector_message}:last-child`);const closeButton=messageElement.find(gecko_selector_messageCloseIconWrapper);const fadeoutMethod=this.fadeoutMessage;this.fadeinMessage(messageElement);const fadeoutTimeout=setTimeout(function(){fadeoutMethod(messageElement)},5e3);$(closeButton).on("click",function(){clearTimeout(fadeoutTimeout);fadeoutMethod(messageElement)})}fadeinMessage(messageElement){$(messageElement).animate({opacity:1,right:"+=40"},300)}fadeoutMessage(messageElement){$(messageElement).animate({opacity:0,right:"-=40"},300,function(){$(this).remove()})}generateMessage(){let content="";let typeClass="";let typeIcon="";let typeCardClass="";switch(this.type){case"success":{typeClass=gecko_class_messageSuccessStyling;typeIcon=gecko_icon_successMessage;typeCardClass=gecko_class_messageSuccessCard;break}case"error":{typeClass=gecko_class_messageErrorStyling;typeIcon=gecko_icon_errorMessage;typeCardClass=gecko_class_messageErrorCard;break}}content+=`<div class="${gecko_class_messageComponent} cmp ${gecko_class_message} ${typeClass}" style="opacity: 0;">`;content+=`<div class="${typeCardClass} cd">`;content+=`<div class="${gecko_class_messageLayout} lyt">`;content+=`<div class="${gecko_class_messageContentComponent} cmp">`;content+=`<div class="${gecko_class_messageContentLayout} lyt">`;content+=`<div class="${gecko_class_messageTitleComponent} cmp">`;content+=`<div class="${gecko_class_messageTitleLayout} lyt">`;content+=`<div class="${gecko_class_messageIconWrapper} wr_p">`;content+=typeIcon;content+="</div>";content+=`<div class="${gecko_class_messageTitleWrapper} wr_p">`;content+=`<p class="${gecko_class_messageTitleLabel}">${this.title}</p>`;content+="</div>";content+=`<div class="${gecko_class_messageCloseIconWrapper} wr_p">`;content+=gecko_icon_close;content+="</div>";content+="</div>";content+="</div>";content+=`<div class="${gecko_class_messageTextWrapper} wr_p">`;content+=`<p class="${gecko_class_messageTextLabel}">${this.message}</p>`;content+="</div>";content+="</div>";content+="</div>";content+="</div>";content+="</div>";content+="</div>";this.messageContent=content}}class GeckoFormGenerator{constructor(geckoForm){this.geckoForm=geckoForm}buildSingleGeckoStepView(json,position){let content="";const stepGroup=json.stepGroup!=null?`stepgroup="${json.stepGroup}"`:"";if(this.geckoForm.formSteps.length>1){content+=`<div class="${gecko_class_formStepDivider} el ${gecko_class_formStepDividerStylingClasses}" stepid="${json.stepId}" ${stepGroup}></div>`}content+=`<div class="${gecko_class_formStepComponent} cmp" stepid="${json.stepId}" ${stepGroup}>`;content+=`<div class="${gecko_class_formStepLayout} lyt">`;content+=`<div class="${gecko_class_formStepNumberComponent} cmp">`;content+=`<div class="${gecko_class_formStepNumberCD} cd">`;content+=`<div class="${gecko_class_formStepNumberLayout} lyt">`;content+=`<div class="${gecko_class_formStepNumberWrapper} wr_p">`;content+=`<p class="${gecko_class_formStepNumberLabel} ${gecko_class_formStepNumberLabelStylingClasses}">${this.geckoForm.formSteps.length}</p>`;content+="</div>";content+="</div>";content+="</div>";content+="</div>";content+=`<div class="${gecko_class_formStepLabelWrapper} ${gecko_class_formStepLabelWrapperStylingClasses}">`;content+=`<p class="${gecko_class_formStepLabel} ${gecko_class_formStepLabelStylingClasses}">${json.label}</p>`;content+="</div>";content+="</div>";content+="</div>";if(position>=0)$(`${this.geckoForm.formStepsSelector}`).children().eq(position).after(content);else $(`${this.geckoForm.formStepsSelector}`).append(content);this.geckoForm.geckoFormManipulator.adjustGeckoStepNumbers()}buildSingleGeckoStepContent(json){let content="";const stepGroup=json.stepGroup!=null?`stepgroup="${json.stepGroup}"`:"";content+=`<div class="${gecko_class_formComponent} cmp ${gecko_class_hidden}" stepid="${json.stepId}" ${stepGroup}>`;content+=`<div class="${gecko_class_formLayout} lyt">`;content+=this.generateRows(json.rows);content+="</div>";content+="</div>";$(`${this.geckoForm.formSelector}`).append(content)}generateRows(json){let content="";json.forEach(row=>{content+=this.generateSingleRow(row)});return content}generateSingleRow(json){let content="";content+=`<div class="${gecko_class_formRowComponent} cmp">`;content+=`<div class="${gecko_class_formRowLayout} lyt">`;json.elements.forEach(element=>{content+=this.generateSingleFormItem(element)});content+="</div>";content+="</div>";return content}generateSingleFormItem(json){let content="";content+=`<div class="${gecko_class_formItemComponent} cmp">`;content+=`<div class="${gecko_class_formItemLayout} lyt">`;switch(json.type){case"text":{content+=this.generateInputFormItem(json);break}case"email":{content+=this.generateInputFormItem(json);break}case"tel":{content+=this.generateInputFormItem(json);break}case"textarea":{content+=this.generateTextareaFormItem(json);break}case"radio":{content+=this.generateRadioFormItem(json);break}case"checkbox":{content+=this.generateCheckboxFormItem(json);break}}content+="</div>";content+="</div>";return content}generateRadioFormItem(json){let content="";const label=json.label??"";content+=`<p class="${gecko_class_label}">${label}</p>`;content+=`<div class="${gecko_class_radioButtonGroupComponent} cmp">`;content+=`<div class="${gecko_class_radioButtonGroupLayout} lyt">`;json.options.forEach(option=>{content+=`<div class="${gecko_class_radioButtonComponent} cmp">`;content+=`<div class="${gecko_class_radioButtonLayout} lyt">`;content+=`<input id="${option.id}" type="radio" name="${json.name}" class="${gecko_class_radioButton} ${gecko_class_inputGeneralElement}" value="${option.value}" stepgroup="${option.stepGroup}">`;content+=`<label class="${gecko_class_label}" for="${option.id}">${option.label}</label>`;content+="</div>";content+="</div>"});content+="</div>";content+="</div>";if(json.trigger==true)this.geckoForm.geckoFormListener.addRadioTriggerListener(json,json.stepGroups);return content}generateCheckboxFormItem(json){let content="";const label=json.label??"";content+=`<p class="${gecko_class_label}">${label}</p>`;content+=`<div class="${gecko_class_checkboxGroupComponent} cmp">`;content+=`<div class="${gecko_class_checkboxGroupLayout} lyt">`;json.options.forEach(option=>{content+=`<div class="${gecko_class_checkboxComponent} cmp">`;content+=`<div class="${gecko_class_checkboxLayout} lyt">`;content+=`<input id="${option.id}" type="checkbox" name="${json.name}" class="${gecko_class_checkbox} ${gecko_class_inputGeneralElement}" value="${option.value}" stepgroup="${option.stepGroup}">`;content+=`<label class="${gecko_class_label}" for="${option.id}">${option.label}</label>`;content+="</div>";content+="</div>"});content+="</div>";content+="</div>";if(json.trigger==true)this.geckoForm.geckoFormListener.addCheckboxTriggerListener(json);return content}generateInputFormItem(json){const autocomplete=json.autocomplete?`autocomplete="${json.autocomplete}"`:"";const placeholder=json.placeholder?`placeholder="${json.placeholder}"`:"";const required=json.required?`required="${json.required}"`:"";const name=json.name?`name="${json.name}"`:"";const label=json.label??"";let content="";content+=`<p class="${gecko_class_label}">${label}</p>`;content+=`<input class="${gecko_class_inputElement} ${gecko_class_inputGeneralElement}" type="${json.type}" ${placeholder} ${required} ${autocomplete} ${name}>`;return content}generateTextareaFormItem(json){const placeholder=json.placeholder?`placeholder="${json.placeholder}"`:"";const required=json.required?`required="${json.required}"`:"";const name=json.name?`name="${json.name}"`:"";const label=json.label??"";let content="";content+=`<p class="${gecko_class_label}">${label}</p>`;content+=`<textarea class="${gecko_class_inputElement} ${gecko_class_inputGeneralElement}" ${placeholder} ${required} ${name}"></textarea>`;return content}}class GeckoForm{constructor(formJson,formSelector,submitButtonSelector,backButtonSelector,formStepsSelector,messageContainerSelector){this.geckoFormGenerator=new GeckoFormGenerator(this);this.geckoFormListener=new GeckoFormListener(this);this.geckoFormManipulator=new GeckoFormManipulator(this);this.formJson=formJson;this.formSelector=formSelector;this.submitButtonSelector=submitButtonSelector;this.backButtonSelector=backButtonSelector;this.formStepsSelector=formStepsSelector;this.messageContainerSelector=messageContainerSelector;this.formSteps=[];this.currentStep=1;this.geckoRequest={data:{categories:[]}}}buildGeckoForm(){this.geckoFormManipulator.buildGeckoSteps(this.formJson.steps,"default");this.geckoFormManipulator.activateCurrentStep();this.geckoFormListener.addMoveButtonListener()}}const geckoHaefeliForm={requestName:"winno",steps:[{type:"default",label:"Persönliche Daten",stepId:"personal",index:0,rows:[{elements:[{type:"text",placeholder:"Vorname",required:true,autocomplete:"given-name",label:"Name",name:"surname"},{type:"text",placeholder:"Nachname",required:true,autocomplete:"family-name",name:"name"}]},{elements:[{type:"email",placeholder:"max.muster@company.com",required:true,autocomplete:"email",label:"E-Mail",name:"email"}]},{elements:[{type:"tel",placeholder:"+41 00 000 00 00",required:true,autocomplete:"tel",label:"Telefonnummer",name:"telefon"}]},{elements:[{type:"textarea",placeholder:"Ihre Nachricht oder Bemerkung",required:false,label:"Nachricht",name:"nachricht"}]},{elements:[{type:"radio",required:true,label:"Art des Umzugs",name:"umzugsart",trigger:true,stepGroups:["privatumzug","firmenumzug"],options:[{label:"Privatumzug",value:"privatumzug",id:"privatumzug",stepGroup:"privatumzug"},{label:"Firmenumzug",value:"firmenumzug",id:"firmenumzug",stepGroup:"firmenumzug"},{label:"Kein Umzug",value:"kein_umzug",id:"kein_umzug"}]}]}]},{type:"hidden",label:"Auszugsort",stepId:"auszugsort",stepGroup:"privatumzug",index:1,rows:[{elements:[{type:"text",placeholder:"Musterstrasse",required:false,label:"Strasse",name:"auszug_strasse"},{type:"text",placeholder:"Hausnummer",required:false,label:"Hausnummer",name:"auszug_hausnummer"}]},{elements:[{type:"text",placeholder:"Adresszusatz",required:false,label:"Adresszusatz",name:"auszug_adresszusatz"}]},{elements:[{type:"text",placeholder:"Ort",required:false,label:"Ort",name:"auszug_ort"},{type:"text",placeholder:"0000",required:false,label:"PLZ",name:"auszug_plz"}]},{elements:[{type:"text",placeholder:"2.5 Zimmer",required:false,label:"Anzahl der Räume",name:"auszug_anzahl_räume"},{type:"text",placeholder:"100 m²",required:false,label:"Gesamtfläche",name:"auszug_gesamtfläche"}]},{elements:[{type:"text",placeholder:"Etage",required:false,label:"Etage",name:"auszug_etage"},{type:"text",placeholder:"Personen",required:false,label:"Anzahl der umziehenden Personen",name:"auszug_personen"}]},{elements:[{type:"text",placeholder:"dd.mm.yyyy",required:false,label:"Der Umzug wird bezahlt von",name:"auszug_bezahlung"},{type:"text",placeholder:"dd.mm.yyyy",required:false,label:"gewünschtes Datum Auszug",name:"auszug_datum"}]},{elements:[{type:"textarea",placeholder:"Ihre Nachricht",required:false,label:"Bemerkung",name:"auszug_bemerkung"}]}]},{type:"hidden",label:"Einzugsort",stepId:"einzugsort",stepGroup:"privatumzug",index:1,rows:[{elements:[{type:"text",placeholder:"Musterstrasse",required:false,label:"Strasse",name:"einzug_strasse"},{type:"text",placeholder:"Hausnummer",required:false,label:"Hausnummer",name:"einzug_hausnummer"}]},{elements:[{type:"text",placeholder:"Adresszusatz",required:false,label:"Adresszusatz",name:"einzug_adresszusatz"}]},{elements:[{type:"text",placeholder:"Ort",required:false,label:"Ort",name:"einzug_ort"},{type:"text",placeholder:"0000",required:false,label:"PLZ",name:"einzug_plz"}]},{elements:[{type:"text",placeholder:"Etage",required:false,label:"Etage",name:"einzug_etage"},{type:"text",placeholder:"dd.mm.yyyy",required:false,label:"gewünschtes Datum Einzug",name:"einzug_datum"}]},{elements:[{type:"textarea",placeholder:"Ihre Nachricht",required:false,label:"Bemerkung",name:"einzug_bemerkung"}]}]},{type:"hidden",label:"Auszugsort Firma",stepId:"auszugsort_firma",stepGroup:"firmenumzug",index:1,rows:[{elements:[{type:"text",placeholder:"Musterstrasse",required:false,label:"Strasse",name:"auszug_firma_strasse"},{type:"text",placeholder:"Hausnummer",required:false,label:"Hausnummer",name:"auszug_firma_hausnummer"}]},{elements:[{type:"text",placeholder:"Adresszusatz",required:false,label:"Adresszusatz",name:"auszug_firma_adresszusatz"}]},{elements:[{type:"text",placeholder:"Ort",required:false,label:"Ort",name:"auszug_firma_ort"},{type:"text",placeholder:"0000",required:false,label:"PLZ",name:"auszug_firma_plz"}]},{elements:[{type:"text",placeholder:"2.5 Zimmer",required:false,label:"Anzahl der Räume",name:"auszug_firma_anzahl_räume"},{type:"text",placeholder:"100 m²",required:false,label:"Gesamtfläche",name:"auszug_firma_gesamtfläche"}]},{elements:[{type:"text",placeholder:"Etage",required:false,label:"Etage",name:"auszug_firma_etage"},{type:"text",placeholder:"Personen",required:false,label:"Anzahl der Arbeitsplätze",name:"auszug_firma_personen"}]},{elements:[{type:"text",placeholder:"dd.mm.yyyy",required:false,label:"gewünschtes Datum Auszug",name:"auszug_firma_datum"}]},{elements:[{type:"textarea",placeholder:"Ihre Nachricht",required:false,label:"Bemerkung",name:"auszug_bemerkung"}]}]},{type:"hidden",label:"Einzugsort Firma",stepId:"einzugsort_firma",stepGroup:"firmenumzug",index:1,rows:[{elements:[{type:"text",placeholder:"Musterstrasse",required:false,label:"Strasse",name:"einzug_firma_strasse"},{type:"text",placeholder:"Hausnummer",required:false,label:"Hausnummer",name:"einzug_firma_hausnummer"}]},{elements:[{type:"text",placeholder:"Adresszusatz",required:false,label:"Adresszusatz",name:"einzug_firma_adresszusatz"}]},{elements:[{type:"text",placeholder:"Ort",required:false,label:"Ort",name:"einzug_firma_ort"},{type:"text",placeholder:"0000",required:false,label:"PLZ",name:"einzug_firma_plz"}]},{elements:[{type:"text",placeholder:"Etage",required:false,label:"Etage",name:"einzug_firma_etage"},{type:"text",placeholder:"dd.mm.yyyy",required:false,label:"gewünschtes Datum Einzug",name:"einzug_firma_datum"}]},{elements:[{type:"textarea",placeholder:"Ihre Nachricht",required:false,label:"Bemerkung",name:"einzug_firma_bemerkung"}]}]},{type:"default",label:"Services",stepId:"services",index:2,rows:[{elements:[{type:"checkbox",label:"Weitere Services",name:"services",trigger:true,options:[{label:"Reinigung",value:"reinigung",id:"reinigung",stepGroup:"reinigung"},{label:"Lagerung",value:"lagerung",id:"lagerung",stepGroup:"lagerung"},{label:"Treppensteiger",value:"treppensteiger",id:"treppensteiger",stepGroup:"treppensteiger"},{label:"Möbellift",value:"moebellift",id:"moebellift",stepGroup:"moebellift"},{label:"Entsorgung",value:"entsorgung",id:"entsorgung",stepGroup:"entsorgung"}]}]}]},{type:"hidden",label:"Reinigung",stepId:"reinigung",stepGroup:"reinigung",index:3,rows:[{elements:[{type:"text",placeholder:"dd.mm.yyyy",required:false,label:"Reinigungstermin",name:"reinigung_termin"},{type:"text",placeholder:"07:30 Uhr",required:false,label:"Uhrzeit",name:"reinigung_termin_uhrzeit"}]},{elements:[{type:"text",placeholder:"dd.mm.yyyy",required:false,label:"Abgabetermin",name:"abgabe_termin"},{type:"text",placeholder:"14:00 Uhr",required:false,label:"Uhrzeit",name:"abgabe_termin_uhrzeit"}]},{elements:[{type:"text",placeholder:"2.5 Zimmer",required:false,label:"Anzahl der Räume",name:"reinigung_anzahl_räume"},{type:"text",placeholder:"100 m²",required:false,label:"Gesamtfläche",name:"reinigung_gesamtfläche"}]},{elements:[{type:"textarea",placeholder:"Ihre Nachricht",required:false,label:"Bemerkung",name:"reinigung_bemerkung"}]}]},{type:"hidden",label:"Lagerung",stepId:"lagerung",stepGroup:"lagerung",index:3,rows:[{elements:[{type:"text",placeholder:"dd.mm.yyyy",required:false,label:"Lagerungs Beginn",name:"lagerung_beginn"},{type:"text",placeholder:"dd.mm.yyyy",required:false,label:"Voraussichtliches Lagerungs Ende",name:"lagerung_ende"}]},{elements:[{type:"text",placeholder:"10m³",required:false,label:"Volumen",name:"lagerung_volumen"}]},{elements:[{type:"textarea",placeholder:"Ihre Nachricht",required:false,label:"Bemerkung",name:"lagerung_bemerkung"}]}]},{type:"hidden",label:"Treppensteiger",stepId:"treppensteiger",stepGroup:"treppensteiger",index:3,rows:[{elements:[{type:"text",placeholder:"dd.mm.yyyy",required:false,label:"Miete Beginn",name:"treppensteiger_miete_beginn"},{type:"text",placeholder:"07:30 Uhr",required:false,label:"Uhrzeit",name:"treppensteiger_miete_beginn_uhrzeit"}]},{elements:[{type:"text",placeholder:"dd.mm.yyyy",required:false,label:"Miete Ende",name:"treppensteiger_miete_ende"},{type:"text",placeholder:"14:00 Uhr",required:false,label:"Uhrzeit",name:"treppensteiger_miete_ende_uhrzeit"}]},{elements:[{type:"text",placeholder:"2",required:false,label:"Anzahl benötigter Helfer",name:"treppensteiger_helfer"}]},{elements:[{type:"textarea",placeholder:"Ihre Nachricht",required:false,label:"Bemerkung",name:"treppensteiger_bemerkung"}]}]},{type:"hidden",label:"Möbellift",stepId:"moebellift",stepGroup:"moebellift",index:3,rows:[{elements:[{type:"text",placeholder:"dd.mm.yyyy",required:false,label:"Miete Beginn",name:"möbellift_miete_beginn"},{type:"text",placeholder:"07:30 Uhr",required:false,label:"Uhrzeit",name:"möbellift_miete_beginn_uhrzeit"}]},{elements:[{type:"text",placeholder:"dd.mm.yyyy",required:false,label:"Miete Ende",name:"möbellift_miete_ende"},{type:"text",placeholder:"14:00 Uhr",required:false,label:"Uhrzeit",name:"möbellift_miete_ende_uhrzeit"}]},{elements:[{type:"text",placeholder:"mind. 1",required:false,label:"Anzahl benötigter Helfer",name:"möbellift_helfer"}]},{elements:[{type:"textarea",placeholder:"Ihre Nachricht",required:false,label:"Bemerkung",name:"möbellift_bemerkung"}]}]},{type:"hidden",label:"Entsorgung",stepId:"entsorgung",stepGroup:"entsorgung",index:3,rows:[{elements:[{type:"text",placeholder:"dd.mm.yyyy",required:false,label:"Entsorgung Termin",name:"entsorgung_termin"},{type:"text",placeholder:"07:30 Uhr",required:false,label:"Uhrzeit",name:"entsorgung_uhrzeit"}]},{elements:[{type:"text",placeholder:"10",required:false,label:"Anzahl der Packstücke",name:"entsorgung_packstuecke"},{type:"text",placeholder:"100 kg",required:false,label:"Gewicht",name:"entsorgung_gewicht"},{type:"text",placeholder:"10m³",required:false,label:"Volumen",name:"entsorgung_volumen"}]},{elements:[{type:"text",placeholder:"Musterstrasse",required:false,label:"Strasse Abholung",name:"entsorgung_strasse_abholung"},{type:"text",placeholder:"Hausnummer",required:false,label:"Hausnummer Abholung",name:"entsorgung_hausnummer_abholung"}]},{elements:[{type:"text",placeholder:"Adresszusatz",required:false,label:"Adresszusatz Abholung",name:"entsorgung_adresszusatz_abholung"}]},{elements:[{type:"text",placeholder:"Ort",required:false,label:"Ort Abholung",name:"entsorgung_ort_abholung"},{type:"text",placeholder:"PLZ",required:false,label:"PLZ Abholung",name:"entsorgung_plz_abholung"}]},{elements:[{type:"textarea",placeholder:"Ihre Nachricht",required:false,label:"Bemerkung",name:"entsorgung_bemerkung"}]}]}]};const geckoForm=new GeckoForm(geckoHaefeliForm,"#test-gecko-form",".wr_btn--submit",".wr_btn--form-back",".lyt--form-steps",".main");geckoForm.buildGeckoForm();