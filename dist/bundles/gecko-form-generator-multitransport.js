const gecko_class_formComponent="cmp--form";const gecko_class_formLayout="lyt--form";const gecko_class_formRowComponent="cmp--form-row";const gecko_class_formRowLayout="lyt--form-row";const gecko_class_formItemComponent="cmp--form-item";const gecko_class_formItemLayout="lyt--form-item";const gecko_class_inputElement="inp";const gecko_class_inputGeneralElement="gecko-inp";const gecko_class_label="p--l";const gecko_class_hidden="gecko-hidden";const gecko_class_formStepComponent="cmp--form-step";const gecko_class_formStepLayout="lyt--form-step";const gecko_class_formStepNumberComponent="cmp--form-step-number";const gecko_class_formStepNumberCD="cd--form-step-number";const gecko_class_formStepNumberLayout="lyt--form-step-number";const gecko_class_formStepNumberWrapper="wr_p--form-step-number";const gecko_class_formStepNumberLabel="h--xxs";const gecko_class_formStepNumberLabelStylingClasses="txt--lh-100";const gecko_class_formStepLabelWrapper="wr_p--form-step";const gecko_class_formStepLabelWrapperStylingClasses="wr_p txt--a-c txt--no-wrap";const gecko_class_formStepLabel="h--xxs";const gecko_class_formStepLabelStylingClasses="txt--lh-100";const gecko_class_formStepDivider="el--form-step";const gecko_class_formStepDividerStylingClasses="bg--pri";const gecko_class_formItemError="has_error";const gecko_class_formItemValid="is_valid";const gecko_class_radioButtonGroupComponent="cmp--rb-group";const gecko_class_radioButtonGroupLayout="lyt--rb-group";const gecko_class_radioButtonComponent="cmp--rb";const gecko_class_radioButtonLayout="lyt--rb";const gecko_class_radioButton="rb";const gecko_class_checkboxGroupComponent="cmp--cb-group";const gecko_class_checkboxGroupLayout="lyt--cb-group";const gecko_class_checkboxComponent="cmp--cb";const gecko_class_checkboxLayout="lyt--cb";const gecko_class_checkbox="cb";const gecko_selector_formComponent=`.${gecko_class_formComponent}`;const gecko_selector_formStepComponent=`.${gecko_class_formStepComponent}`;const gecko_selector_inputGeneralElement=`.${gecko_class_inputGeneralElement}`;const gecko_selector_formStepDivider=`.${gecko_class_formStepDivider}`;const gecko_selector_formStepNumberWrapper=`.${gecko_class_formStepNumberWrapper}`;const gecko_selector_formStepNumberLabel=`.${gecko_class_formStepNumberLabel}`;const gecko_selector_inputElement=`.${gecko_class_inputElement}`;const gecko_class_message="gecko-msg";const gecko_class_messageComponent="cmp--msg";const gecko_class_messageSuccessCard="cd--msg-success";const gecko_class_messageErrorCard="cd--msg-error";const gecko_class_messageWarningCard="cd--msg-warning";const gecko_class_messageInfoCard="cd--msg-info";const gecko_class_messageLayout="lyt--msg";const gecko_class_messageContentComponent="cmp--msg-content";const gecko_class_messageContentLayout="lyt--msg-content";const gecko_class_messageTitleComponent="cmp--msg-title";const gecko_class_messageTitleLayout="lyt--msg-title";const gecko_class_messageIconWrapper="wr_ico--msg";const gecko_class_messageTitleWrapper="wr_p--msg";const gecko_class_messageCloseIconWrapper="wr_ico--msg-close";const gecko_class_messageTitleLabel="h--xs";const gecko_class_messageTextWrapper="wr_p--msg";const gecko_class_messageTextLabel="p--m";const gecko_class_messageSuccessStyling="txt--c-success";const gecko_class_messageErrorStyling="txt--c-error";const gecko_class_messageWarningStyling="txt--c-warning";const gecko_class_messageInfoStyling="txt--c-info";const gecko_selector_message=`.${gecko_class_message}`;const gecko_selector_messageCloseIconWrapper=`.${gecko_class_messageCloseIconWrapper}`;const gecko_icon_close='<svg display="block" width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 8L16 16" stroke="#8B8B8B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 16L16 8" stroke="#8B8B8B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';const gecko_icon_successMessage='<svg display="block" width="20px" height="20px" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.99961 1.9001C5.5261 1.9001 1.89961 5.52659 1.89961 10.0001C1.89961 14.4736 5.5261 18.1001 9.99961 18.1001C14.4731 18.1001 18.0996 14.4736 18.0996 10.0001C18.0996 5.52659 14.4731 1.9001 9.99961 1.9001ZM0.0996094 10.0001C0.0996094 4.53248 4.53199 0.100098 9.99961 0.100098C15.4672 0.100098 19.8996 4.53248 19.8996 10.0001C19.8996 15.4677 15.4672 19.9001 9.99961 19.9001C4.53199 19.9001 0.0996094 15.4677 0.0996094 10.0001ZM13.636 7.3637C13.9875 7.71517 13.9875 8.28502 13.636 8.63649L9.63601 12.6365C9.28453 12.988 8.71469 12.988 8.36321 12.6365L6.36321 10.6365C6.01174 10.285 6.01174 9.71517 6.36321 9.3637C6.71469 9.01223 7.28453 9.01223 7.63601 9.3637L8.99961 10.7273L12.3632 7.3637C12.7147 7.01223 13.2845 7.01223 13.636 7.3637Z"/></svg>';const gecko_icon_errorMessage='<svg display="block" width="20px" height="20px" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.99961 1.9001C5.5261 1.9001 1.89961 5.52659 1.89961 10.0001C1.89961 14.4736 5.5261 18.1001 9.99961 18.1001C14.4731 18.1001 18.0996 14.4736 18.0996 10.0001C18.0996 5.52659 14.4731 1.9001 9.99961 1.9001ZM0.0996094 10.0001C0.0996094 4.53248 4.53199 0.100098 9.99961 0.100098C15.4672 0.100098 19.8996 4.53248 19.8996 10.0001C19.8996 15.4677 15.4672 19.9001 9.99961 19.9001C4.53199 19.9001 0.0996094 15.4677 0.0996094 10.0001ZM6.36321 6.3637C6.71469 6.01223 7.28453 6.01223 7.63601 6.3637L9.99961 8.72731L12.3632 6.3637C12.7147 6.01223 13.2845 6.01223 13.636 6.3637C13.9875 6.71517 13.9875 7.28502 13.636 7.63649L11.2724 10.0001L13.636 12.3637C13.9875 12.7152 13.9875 13.285 13.636 13.6365C13.2845 13.988 12.7147 13.988 12.3632 13.6365L9.99961 11.2729L7.63601 13.6365C7.28453 13.988 6.71469 13.988 6.36321 13.6365C6.01174 13.285 6.01174 12.7152 6.36321 12.3637L8.72682 10.0001L6.36321 7.63649C6.01174 7.28502 6.01174 6.71517 6.36321 6.3637Z"/></svg>';const gecko_icon_warningMessage='<svg display="block" width="20px" height="20px" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.99961 1.9001C5.5261 1.9001 1.89961 5.52659 1.89961 10.0001C1.89961 14.4736 5.5261 18.1001 9.99961 18.1001C14.4731 18.1001 18.0996 14.4736 18.0996 10.0001C18.0996 5.52659 14.4731 1.9001 9.99961 1.9001ZM0.0996094 10.0001C0.0996094 4.53248 4.53199 0.100098 9.99961 0.100098C15.4672 0.100098 19.8996 4.53248 19.8996 10.0001C19.8996 15.4677 15.4672 19.9001 9.99961 19.9001C4.53199 19.9001 0.0996094 15.4677 0.0996094 10.0001ZM9.99961 4.6001C10.4967 4.6001 10.8996 5.00304 10.8996 5.5001V11.5001C10.8996 11.9972 10.4967 12.4001 9.99961 12.4001C9.50255 12.4001 9.09961 11.9972 9.09961 11.5001V5.5001C9.09961 5.00304 9.50255 4.6001 9.99961 4.6001ZM9.99961 13.1001C10.4967 13.1001 10.8996 13.503 10.8996 14.0001V14.5001C10.8996 14.9972 10.4967 15.4001 9.99961 15.4001C9.50255 15.4001 9.09961 14.9972 9.09961 14.5001V14.0001C9.09961 13.503 9.50255 13.1001 9.99961 13.1001Z"/></svg>';const gecko_icon_infoMessage='<svg display="block" width="20px" height="20px" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.99961 1.9001C5.5261 1.9001 1.89961 5.52659 1.89961 10.0001C1.89961 14.4736 5.5261 18.1001 9.99961 18.1001C14.4731 18.1001 18.0996 14.4736 18.0996 10.0001C18.0996 5.52659 14.4731 1.9001 9.99961 1.9001ZM0.0996094 10.0001C0.0996094 4.53248 4.53199 0.100098 9.99961 0.100098C15.4672 0.100098 19.8996 4.53248 19.8996 10.0001C19.8996 15.4677 15.4672 19.9001 9.99961 19.9001C4.53199 19.9001 0.0996094 15.4677 0.0996094 10.0001ZM9.99961 4.6001C10.4967 4.6001 10.8996 5.00304 10.8996 5.5001V6.0001C10.8996 6.49715 10.4967 6.9001 9.99961 6.9001C9.50255 6.9001 9.09961 6.49715 9.09961 6.0001V5.5001C9.09961 5.00304 9.50255 4.6001 9.99961 4.6001ZM9.99961 7.6001C10.4967 7.6001 10.8996 8.00304 10.8996 8.5001V14.5001C10.8996 14.9972 10.4967 15.4001 9.99961 15.4001C9.50255 15.4001 9.09961 14.9972 9.09961 14.5001V8.5001C9.09961 8.00304 9.50255 7.6001 9.99961 7.6001Z"/></svg>';class GeckoFormManipulator{constructor(geckoForm){this.geckoForm=geckoForm}buildGeckoSteps(json,stepType){json.forEach(step=>{if(step.type==stepType)this.buildSingleGeckoStep(step)})}destroyGeckoSteps(json){const stepsToDestroy=this.geckoForm.formJson.steps.filter(step=>json.includes(step.stepGroup));let stepIds=[];stepsToDestroy.forEach(step=>stepIds.push(step.stepId));this.geckoForm.formSteps=this.geckoForm.formSteps.filter(step=>!stepIds.includes(step.stepId));this.adjustGeckoStepNumbers();json.forEach(stepGroup=>{$(`${this.geckoForm.formStepsSelector} ${gecko_selector_formStepComponent}[stepgroup="${stepGroup}"]`).remove();$(`${this.geckoForm.formStepsSelector} ${gecko_selector_formStepDivider}[stepgroup="${stepGroup}"]`).remove();$(`${this.geckoForm.formSelector} ${gecko_selector_formComponent}[stepgroup="${stepGroup}"]`).remove()})}adjustGeckoStepNumbers(){let i=1;this.geckoForm.formSteps.forEach(step=>{$(`${this.geckoForm.formStepsSelector} ${gecko_selector_formStepComponent}[stepid="${step.stepId}"] ${gecko_selector_formStepNumberWrapper} ${gecko_selector_formStepNumberLabel}`).html(i);i++})}buildSingleGeckoStep(json){let position=0;this.geckoForm.formSteps.forEach(step=>{if(json.index<step.index)return;position++});if(position>=0)this.geckoForm.formSteps.splice(position,0,{stepId:json.stepId,index:json.index});else this.geckoForm.formSteps.push({stepId:json.stepId,index:json.index});this.geckoForm.geckoFormGenerator.buildSingleGeckoStepView(json,position-1);this.geckoForm.geckoFormGenerator.buildSingleGeckoStepContent(json)}triggerStepManipulation(stepGroup,json){if(json!=null)this.destroyGeckoSteps(json);if(stepGroup!=null){const stepsToCreate=this.geckoForm.formJson.steps.filter(step=>step.stepGroup==stepGroup);this.buildGeckoSteps(stepsToCreate,"hidden")}this.setButtonLabels()}activateCurrentStep(){const currentStepId=this.geckoForm.formSteps[this.geckoForm.currentStep-1].stepId;const previousStepId=this.geckoForm.currentStep-2>=0?this.geckoForm.formSteps[this.geckoForm.currentStep-2].stepId:null;$(`${this.geckoForm.formSelector} ${gecko_selector_formComponent}`).addClass(gecko_class_hidden);$(`${this.geckoForm.formSelector} ${gecko_selector_formComponent}[stepid="${currentStepId}"]`).removeClass(gecko_class_hidden);$(`${this.geckoForm.formStepsSelector} ${gecko_selector_formStepComponent}`).removeClass("active");$(`${this.geckoForm.formStepsSelector} ${gecko_selector_formStepComponent}[stepid="${currentStepId}"]`).removeClass("done");$(`${this.geckoForm.formStepsSelector} ${gecko_selector_formStepComponent}[stepid="${currentStepId}"]`).addClass("active");if(previousStepId!=null)$(`${this.geckoForm.formStepsSelector} ${gecko_selector_formStepComponent}[stepid="${previousStepId}"]`).addClass("done");if(this.geckoForm.currentStep>1){$(`${gecko_selector_formComponent}[stepid="${currentStepId}"]`).find(`${gecko_selector_inputGeneralElement}`)[0].focus();$(this.geckoForm.backButtonSelector).removeClass("gecko-button-disabled")}else $(this.geckoForm.backButtonSelector).addClass("gecko-button-disabled");this.setButtonLabels()}setButtonLabels(){const currentStepId=this.geckoForm.formSteps[this.geckoForm.currentStep-1].stepId;const currentStep=this.geckoForm.formJson.steps.filter(step=>step.stepId==currentStepId)[0];if(this.geckoForm.currentStep>=this.geckoForm.formSteps.length){$(`${this.geckoForm.submitButtonSelector} p`).html(this.geckoForm.sendButtonLabel);return}if(currentStep.saveStep)$(`${this.geckoForm.submitButtonSelector} p`).html(this.geckoForm.fowardSafeButtonLabel);else $(`${this.geckoForm.submitButtonSelector} p`).html(this.geckoForm.fowardButtonLabel)}moveToLastStep(){if(this.geckoForm.currentStep<=1)return;this.geckoForm.geckoRequest.data.categories.pop();this.geckoForm.currentStep--;this.activateCurrentStep()}moveToNextStep(){$(`${this.geckoForm.formSelector} ${gecko_selector_inputGeneralElement}`).removeClass(gecko_class_formItemError);const currentFormStep=this.geckoForm.formSteps[this.geckoForm.currentStep-1];const currentStepId=currentFormStep.stepId;const currentStepSelector=`${this.geckoForm.formSelector} ${gecko_selector_formComponent}[stepid="${currentStepId}"]`;let categoryRequestObject={};const currentStep=this.geckoForm.formJson.steps.filter(step=>step.stepId==currentStepId)[0];categoryRequestObject.name=currentStep.mailLabel;categoryRequestObject.children=[];let error=false;currentStep.rows.forEach(row=>{row.elements.forEach(element=>{const currentSelector=`${currentStepSelector} ${gecko_selector_inputGeneralElement}[name="${element.name}"]`;let value="";switch(element.type){case"text":{value=$(currentSelector).val();break}case"email":{value=$(currentSelector).val();break}case"tel":{value=$(currentSelector).val();break}case"textarea":{value=$(currentSelector).val();break}case"radio":{value=$(`${currentSelector}:checked`).val()??null;break}case"checkbox":{value=$(`${currentSelector}:checked`).map(function(){return $(this).val()}).get().join(", ");break}}value=value==null?null:value.trim()==""?null:value;if(value!=null)categoryRequestObject.children.push({name:element.mailLabel,value:value});if(!this.isInputValid(element.required,element.type,value)){$(currentSelector).addClass(gecko_class_formItemError);error=true}else if(value!=""){$(currentSelector).addClass(gecko_class_formItemValid)}})});const manipulator=this;if(error){const geckoMessage=new GeckoFormMessage(this.geckoForm.messageContainerSelector,"error","Fehler","Bitte überprüfe deine Eingaben!");geckoMessage.generateMessage();geckoMessage.activateMessage();return}this.geckoForm.geckoRequest.data.categories.push(categoryRequestObject);if(this.geckoForm.currentStep>=this.geckoForm.formSteps.length){$(`${this.geckoForm.formSelector} ${gecko_selector_formComponent}`).addClass(gecko_class_hidden);const geckoMessage=new GeckoFormMessage(manipulator.geckoForm.messageContainerSelector,"info","Absenden...","Das Formular wird abgesendet.");geckoMessage.generateMessage();geckoMessage.activateMessage();let geckoHeaders={"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3dHpvbXR1cnJ0amNrcXpncnN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg0NjE4NDAsImV4cCI6MTk5NDAzNzg0MH0.K2Y_CMi3M6ZkHoebXGLfLffRncrilb57CI9Wx9_oL4o"};$.ajax({url:`https://zwtzomturrtjckqzgrsu.functions.supabase.co/mail-service?name=${this.geckoForm.formJson.requestName}`,method:"POST",headers:geckoHeaders,contentType:"application/json",data:JSON.stringify(this.geckoForm.geckoRequest),success:function(response){const geckoMessage=new GeckoFormMessage(manipulator.geckoForm.messageContainerSelector,"success","Erfolgreich","Das Formular wurde abgesendet.");geckoMessage.generateMessage();geckoMessage.activateMessage();manipulator.resetForm(manipulator);manipulator.gtag_report_conversion(undefined);if(manipulator.geckoForm.submitFormSelector!=null)$(`${manipulator.geckoForm.submitFormSelector}`).submit()},error:function(xhr,status,error){const geckoMessage=new GeckoFormMessage(manipulator.geckoForm.messageContainerSelector,"error","Fehler","Es ist ein Fehler aufgetreten");geckoMessage.generateMessage();geckoMessage.activateMessage();manipulator.activateCurrentStep()}})}else{if(currentStep.saveStep){let geckoHeaders={"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3dHpvbXR1cnJ0amNrcXpncnN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg0NjE4NDAsImV4cCI6MTk5NDAzNzg0MH0.K2Y_CMi3M6ZkHoebXGLfLffRncrilb57CI9Wx9_oL4o"};$.ajax({url:`https://zwtzomturrtjckqzgrsu.functions.supabase.co/saveStep?name=${this.geckoForm.formJson.requestName}`,method:"POST",headers:geckoHeaders,contentType:"application/json",data:JSON.stringify(this.geckoForm.geckoRequest),success:function(response){manipulator.geckoForm.geckoRequest.id=response.id},error:function(xhr,status,error){}})}this.geckoForm.currentStep++;this.activateCurrentStep()}}gtag_report_conversion(url){var callback=function(){if(typeof url!="undefined"){window.location=url}};gtag("event","conversion",{send_to:this.geckoForm.formJson.googleConversionCode,event_callback:callback});return false}isInputValid(required,type,value){value=value==null?null:value.trim()==""?null:value;if(required==true&&value==null)return false;if(type=="email"){const regex=/^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/;if(!regex.test(value))return false}else if(type=="tel"){const regex=/(\b(0041|0)|\B\+41)(\s?\(0\))?(\s)?[1-9]{2}(\s)?[0-9]{3}(\s)?[0-9]{2}(\s)?[0-9]{2}\b/;if(!regex.test(value))return false}return true}validateInput(selector,element,value){$(selector).removeClass(gecko_class_formItemError);$(selector).removeClass(gecko_class_formItemValid);if(!this.isInputValid(element.required,element.type,value)){$(selector).addClass(gecko_class_formItemError)}else if(value!=""){$(selector).addClass(gecko_class_formItemValid)}}resetForm(manipulator){$(`${manipulator.geckoForm.formSelector}`).html("");$(`${manipulator.geckoForm.formStepsSelector}`).html("");const newForm=new GeckoForm(manipulator.geckoForm.formJson,manipulator.geckoForm.formSelector,manipulator.geckoForm.submitButtonSelector,manipulator.geckoForm.backButtonSelector,manipulator.geckoForm.formStepsSelector,manipulator.geckoForm.messageContainerSelector,manipulator.geckoForm.fowardButtonLabel,manipulator.geckoForm.sendButtonLabel,manipulator.geckoForm.fowardSafeButtonLabel);newForm.buildGeckoForm()}}class GeckoFormListener{constructor(geckoForm){this.geckoForm=geckoForm}addMoveButtonListener(){$(`${this.geckoForm.submitButtonSelector}`).on("click",this.geckoForm.geckoFormManipulator.moveToNextStep.bind(this.geckoForm.geckoFormManipulator));$(`${this.geckoForm.backButtonSelector}`).on("click",this.geckoForm.geckoFormManipulator.moveToLastStep.bind(this.geckoForm.geckoFormManipulator))}addRadioTriggerListener(json,stepGroups){$(document).on("change",`${this.geckoForm.formSelector} input[type="radio"][name="${json.name}"]`,ev=>{this.geckoForm.geckoFormManipulator.triggerStepManipulation($(ev.currentTarget).attr("stepgroup"),stepGroups)})}addCheckboxTriggerListener(json){$(document).on("change",`${this.geckoForm.formSelector} input[type="checkbox"][name="${json.name}"]`,ev=>{if(ev.currentTarget.checked==true)this.geckoForm.geckoFormManipulator.triggerStepManipulation($(ev.currentTarget).attr("stepgroup"),null);if(ev.currentTarget.checked==false)this.geckoForm.geckoFormManipulator.triggerStepManipulation(null,[$(ev.currentTarget).attr("stepgroup")])})}addRealtimeValidationListener(json){$(document).on("blur",`${this.geckoForm.formSelector} input[type="${json.type}"][name="${json.name}"]`,ev=>{this.geckoForm.geckoFormManipulator.validateInput(`${this.geckoForm.formSelector} input[type="${json.type}"][name="${json.name}"]`,json,$(ev.currentTarget).val())})}}class GeckoFormMessage{constructor(messageContainerSelector,type,title,message){this.messageContainerSelector=messageContainerSelector;this.type=type;this.title=title;this.message=message;this.messageContent=""}activateMessage(){$(`${this.messageContainerSelector}`).append(this.messageContent);const messageElement=$(`${this.messageContainerSelector} ${gecko_selector_message}:last-child`);const closeButton=messageElement.find(gecko_selector_messageCloseIconWrapper);const fadeoutMethod=this.fadeoutMessage;this.fadeinMessage(messageElement);const fadeoutTimeout=setTimeout(function(){fadeoutMethod(messageElement)},5e3);$(closeButton).on("click",function(){clearTimeout(fadeoutTimeout);fadeoutMethod(messageElement)})}fadeinMessage(messageElement){$(messageElement).animate({opacity:1,right:"+=40"},300)}fadeoutMessage(messageElement){$(messageElement).animate({opacity:0,right:"-=40"},300,function(){$(this).remove()})}generateMessage(){let content="";let typeClass="";let typeIcon="";let typeCardClass="";switch(this.type){case"success":{typeClass=gecko_class_messageSuccessStyling;typeIcon=gecko_icon_successMessage;typeCardClass=gecko_class_messageSuccessCard;break}case"error":{typeClass=gecko_class_messageErrorStyling;typeIcon=gecko_icon_errorMessage;typeCardClass=gecko_class_messageErrorCard;break}case"warning":{typeClass=gecko_class_messageWarningStyling;typeIcon=gecko_icon_errorMessage;typeCardClass=gecko_class_messageWarningCard;break}case"info":{typeClass=gecko_class_messageInfoStyling;typeIcon=gecko_icon_infoMessage;typeCardClass=gecko_class_messageInfoCard;break}}content+=`<div class="${gecko_class_messageComponent} cmp ${gecko_class_message} ${typeClass}" style="opacity: 0;">`;content+=`<div class="${typeCardClass} cd">`;content+=`<div class="${gecko_class_messageLayout} lyt">`;content+=`<div class="${gecko_class_messageContentComponent} cmp">`;content+=`<div class="${gecko_class_messageContentLayout} lyt">`;content+=`<div class="${gecko_class_messageTitleComponent} cmp">`;content+=`<div class="${gecko_class_messageTitleLayout} lyt">`;content+=`<div class="${gecko_class_messageIconWrapper} wr_p">`;content+=typeIcon;content+="</div>";content+=`<div class="${gecko_class_messageTitleWrapper} wr_p">`;content+=`<p class="${gecko_class_messageTitleLabel}">${this.title}</p>`;content+="</div>";content+=`<div class="${gecko_class_messageCloseIconWrapper} wr_p">`;content+=gecko_icon_close;content+="</div>";content+="</div>";content+="</div>";content+=`<div class="${gecko_class_messageTextWrapper} wr_p">`;content+=`<p class="${gecko_class_messageTextLabel}">${this.message}</p>`;content+="</div>";content+="</div>";content+="</div>";content+="</div>";content+="</div>";content+="</div>";this.messageContent=content}}class GeckoFormGenerator{constructor(geckoForm){this.geckoForm=geckoForm;this.counter=0}buildSingleGeckoStepView(json,position){let content="";const stepGroup=json.stepGroup!=null?`stepgroup="${json.stepGroup}"`:"";if(this.geckoForm.formSteps.length>1){content+=`<div class="${gecko_class_formStepDivider} el ${gecko_class_formStepDividerStylingClasses}" stepid="${json.stepId}" ${stepGroup}></div>`}content+=`<div class="${gecko_class_formStepComponent} cmp" stepid="${json.stepId}" ${stepGroup}>`;content+=`<div class="${gecko_class_formStepLayout} lyt">`;content+=`<div class="${gecko_class_formStepNumberComponent} cmp">`;content+=`<div class="${gecko_class_formStepNumberCD} cd">`;content+=`<div class="${gecko_class_formStepNumberLayout} lyt">`;content+=`<div class="${gecko_class_formStepNumberWrapper} wr_p">`;content+=`<p class="${gecko_class_formStepNumberLabel} ${gecko_class_formStepNumberLabelStylingClasses}">${this.geckoForm.formSteps.length}</p>`;content+="</div>";content+="</div>";content+="</div>";content+="</div>";content+=`<div class="${gecko_class_formStepLabelWrapper} ${gecko_class_formStepLabelWrapperStylingClasses}">`;content+=`<p class="${gecko_class_formStepLabel} ${gecko_class_formStepLabelStylingClasses}">${json.label}</p>`;content+="</div>";content+="</div>";content+="</div>";if(position>=0)$(`${this.geckoForm.formStepsSelector}`).children(`${gecko_selector_formStepComponent}`).eq(position).after(content);else $(`${this.geckoForm.formStepsSelector}`).append(content);this.geckoForm.geckoFormManipulator.adjustGeckoStepNumbers()}buildSingleGeckoStepContent(json){let content="";const stepGroup=json.stepGroup!=null?`stepgroup="${json.stepGroup}"`:"";content+=`<div class="${gecko_class_formComponent} cmp ${gecko_class_hidden}" stepid="${json.stepId}" ${stepGroup}>`;content+=`<div class="${gecko_class_formLayout} lyt">`;content+=this.generateRows(json.rows);content+="</div>";content+="</div>";$(`${this.geckoForm.formSelector}`).append(content)}generateRows(json){let content="";json.forEach(row=>{content+=this.generateSingleRow(row)});this.counter=0;return content}generateSingleRow(json){let content="";content+=`<div class="${gecko_class_formRowComponent} cmp">`;content+=`<div class="${gecko_class_formRowLayout} lyt">`;json.elements.forEach(element=>{content+=this.generateSingleFormItem(element);this.counter+=1});content+="</div>";content+="</div>";return content}generateSingleFormItem(json){let content="";content+=`<div class="${gecko_class_formItemComponent} cmp">`;content+=`<div class="${gecko_class_formItemLayout} lyt">`;switch(json.type){case"text":{content+=this.generateInputFormItem(json);break}case"email":{content+=this.generateInputFormItem(json);break}case"tel":{content+=this.generateInputFormItem(json);break}case"textarea":{content+=this.generateTextareaFormItem(json);break}case"radio":{content+=this.generateRadioFormItem(json);break}case"checkbox":{content+=this.generateCheckboxFormItem(json);break}}content+="</div>";content+="</div>";return content}generateRadioFormItem(json){let content="";const label=json.label??"";content+=`<p class="${gecko_class_label}">${label}</p>`;content+=`<div class="${gecko_class_radioButtonGroupComponent} cmp">`;content+=`<div class="${gecko_class_radioButtonGroupLayout} lyt">`;json.options.forEach(option=>{const checked=option.default?"checked":"";content+=`<div class="${gecko_class_radioButtonComponent} cmp">`;content+=`<div class="${gecko_class_radioButtonLayout} lyt">`;content+=`<input id="${option.id}" type="radio" name="${json.name}" class="${gecko_class_radioButton} ${gecko_class_inputGeneralElement}" value="${option.value}" stepgroup="${option.stepGroup}" ${checked}>`;content+=`<label class="${gecko_class_label}" for="${option.id}">${option.label}</label>`;content+="</div>";content+="</div>"});content+="</div>";content+="</div>";if(json.trigger==true)this.geckoForm.geckoFormListener.addRadioTriggerListener(json,json.stepGroups);return content}generateCheckboxFormItem(json){let content="";const label=json.label??"";content+=`<p class="${gecko_class_label}">${label}</p>`;content+=`<div class="${gecko_class_checkboxGroupComponent} cmp">`;content+=`<div class="${gecko_class_checkboxGroupLayout} lyt">`;json.options.forEach(option=>{content+=`<div class="${gecko_class_checkboxComponent} cmp">`;content+=`<div class="${gecko_class_checkboxLayout} lyt">`;content+=`<input id="${option.id}" type="checkbox" name="${json.name}" class="${gecko_class_checkbox} ${gecko_class_inputGeneralElement}" value="${option.value}" stepgroup="${option.stepGroup}">`;content+=`<label class="${gecko_class_label}" for="${option.id}">${option.label}</label>`;content+="</div>";content+="</div>"});content+="</div>";content+="</div>";if(json.trigger==true)this.geckoForm.geckoFormListener.addCheckboxTriggerListener(json);return content}generateInputFormItem(json){const autocomplete=json.autocomplete?`autocomplete="${json.autocomplete}"`:"";const placeholder=json.placeholder?`placeholder="${json.placeholder}"`:"";const required=json.required?`required="${json.required}"`:"";const name=json.name?`name="${json.name}"`:"";const label=json.label??"";let content="";content+=`<p class="${gecko_class_label}">${label}</p>`;content+=`<input class="${gecko_class_inputElement} ${gecko_class_inputGeneralElement}" type="${json.type}" ${placeholder} ${required} ${autocomplete} ${name}>`;this.geckoForm.geckoFormListener.addRealtimeValidationListener(json);return content}generateTextareaFormItem(json){const placeholder=json.placeholder?`placeholder="${json.placeholder}"`:"";const required=json.required?`required="${json.required}"`:"";const name=json.name?`name="${json.name}"`:"";const label=json.label??"";let content="";content+=`<p class="${gecko_class_label}">${label}</p>`;content+=`<textarea class="${gecko_class_inputElement} ${gecko_class_inputGeneralElement}" ${placeholder} ${required} ${name}"></textarea>`;return content}}class GeckoForm{constructor(formJson,formSelector,submitButtonSelector,backButtonSelector,formStepsSelector,messageContainerSelector,fowardButtonLabel,sendButtonLabel,fowardSafeButtonLabel,submitFormSelector){this.geckoFormGenerator=new GeckoFormGenerator(this);this.geckoFormListener=new GeckoFormListener(this);this.geckoFormManipulator=new GeckoFormManipulator(this);this.formJson=formJson;this.formSelector=formSelector;this.submitButtonSelector=submitButtonSelector;this.backButtonSelector=backButtonSelector;this.formStepsSelector=formStepsSelector;this.messageContainerSelector=messageContainerSelector;this.formSteps=[];this.currentStep=1;this.geckoRequest={data:{categories:[]}};this.fowardButtonLabel=fowardButtonLabel;this.sendButtonLabel=sendButtonLabel;this.fowardSafeButtonLabel=fowardSafeButtonLabel;this.submitFormSelector=submitFormSelector}buildGeckoForm(){this.geckoFormManipulator.buildGeckoSteps(this.formJson.steps,"default");this.geckoFormManipulator.activateCurrentStep();this.geckoFormListener.addMoveButtonListener()}}const geckoMultitransportForm={requestName:"multitransport",googleConversionCode:"AW-302772059/5YcMCPKDiJ8YENver5AB",steps:[{type:"default",label:"Persönliche Daten",stepId:"personal",mailLabel:"Persönliche Daten",index:0,saveStep:true,rows:[{elements:[{type:"text",name:"prename",label:"Vorname",mailLabel:"Vorname",placeholder:"",autocomplete:"given-name",required:true},{type:"text",name:"surname",label:"Nachname",mailLabel:"Nachname",placeholder:"",autocomplete:"family-name",required:true}]},{elements:[{type:"email",name:"email",label:"E-Mail",mailLabel:"E-Mail",placeholder:"",autocomplete:"email",required:true},{type:"tel",name:"phone",label:"Telefonnummer",mailLabel:"Telefonnummer",placeholder:"",autocomplete:"tel",required:true}]},{elements:[{type:"textarea",name:"bemerkung",label:"Bemerkung",mailLabel:"Bemerkung",placeholder:"Ihre Nachricht oder Bemerkung"}]},{elements:[{type:"radio",name:"umzugsart",label:"Art des Umzugs",mailLabel:"Art des Umzugs",required:true,trigger:true,stepGroups:["privatumzug","firmenumzug"],options:[{id:"privatumzug",label:"Privatumzug",value:"Privatumzug",stepGroup:"privatumzug"},{id:"firmenumzug",label:"Firmenumzug",value:"Firmenumzug",stepGroup:"firmenumzug"},{id:"kein_umzug",label:"Kein Umzug",value:"Kein Umzug",stepGroup:"",default:true}]}]}]}]};const geckoForm=new GeckoForm(geckoMultitransportForm,"#test-gecko-form",".wr_btn--submit",".wr_btn--form-back",".lyt--form-steps",".main","Weiter","Absenden","Speichern & Weiter");geckoForm.buildGeckoForm();