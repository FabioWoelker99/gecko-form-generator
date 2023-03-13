const gecko_class_formComponent="cmp--form";const gecko_class_formLayout="lyt--form";const gecko_class_formRowComponent="cmp--form-row";const gecko_class_formRowLayout="lyt--form-row";const gecko_class_formItemComponent="cmp--form-item";const gecko_class_formItemLayout="lyt--form-item";const gecko_class_inputElement="inp";const gecko_class_label="p--l";const gecko_class_hidden="gecko-hidden";const gecko_class_formStepComponent="cmp--form-step";const gecko_class_formStepLayout="lyt--form-step";const gecko_class_formStepNumberComponent="cmp--form-step-number";const gecko_class_formStepNumberCD="cd--form-step-number";const gecko_class_formStepNumberLayout="lyt--form-step-number";const gecko_class_formStepNumberWrapper="wr_p--form-step-number";const gecko_class_formStepNumberLabel="h--xxs";const gecko_class_formStepNumberLabelStylingClasses="txt--lh-100";const gecko_class_formStepLabelWrapper="wr_p--form-step";const gecko_class_formStepLabelWrapperStylingClasses="wr_p txt--a-c txt--no-wrap";const gecko_class_formStepLabel="h--xxs";const gecko_class_formStepLabelStylingClasses="txt--lh-100";const gecko_class_formStepDivider="el--form-step";const gecko_class_formStepDividerStylingClasses="bg--pri";const gecko_class_formItemError="has_error";const gecko_class_radioButtonGroupComponent="cmp--rb-group";const gecko_class_radioButtonGroupLayout="lyt--rb-group";const gecko_class_radioButtonComponent="cmp--rb";const gecko_class_radioButtonLayout="lyt--rb";const gecko_class_radioButton="rb";const gecko_class_checkboxGroupComponent="cmp--cb-group";const gecko_class_checkboxGroupLayout="lyt--cb-group";const gecko_class_checkboxComponent="cmp--cb";const gecko_class_checkboxLayout="lyt--cb";const gecko_class_checkbox="cb";const gecko_selector_formComponent=`.${gecko_class_formComponent}`;const gecko_selector_formStepComponent=`.${gecko_class_formStepComponent}`;const gecko_selector_inputElement=`.${gecko_class_inputElement}`;const gecko_selector_formStepDivider=`.${gecko_class_formStepDivider}`;class GeckoFormManipulator{constructor(geckoForm){this.geckoForm=geckoForm}buildGeckoSteps(json,stepType){json.forEach(step=>{if(step.type==stepType)this.buildSingleGeckoStep(step)})}destroyGeckoSteps(json){const stepsToDestroy=this.geckoForm.formJson.steps.filter(step=>json.includes(step.stepGroup));let stepIds=[];stepsToDestroy.forEach(step=>stepIds.push(step.stepId));this.geckoForm.formSteps=this.geckoForm.formSteps.filter(step=>!stepIds.includes(step));json.forEach(stepGroup=>{$(`${this.geckoForm.formStepsSelector} ${gecko_selector_formStepComponent}[stepgroup="${stepGroup}"]`).remove();$(`${this.geckoForm.formStepsSelector} ${gecko_selector_formStepDivider}[stepgroup="${stepGroup}"]`).remove();$(`${this.geckoForm.formSelector} ${gecko_selector_formComponent}[stepgroup="${stepGroup}"]`).remove()})}buildSingleGeckoStep(json){this.geckoForm.formSteps.push(json.stepId);this.geckoForm.geckoFormGenerator.buildSingleGeckoStepView(json);this.geckoForm.geckoFormGenerator.buildSingleGeckoStepContent(json)}triggerStepManipulation(value,json){this.destroyGeckoSteps(json.stepGroups);const stepsToCreate=this.geckoForm.formJson.steps.filter(step=>step.stepGroup==value);this.buildGeckoSteps(stepsToCreate,"hidden")}activateCurrentStep(){$(`${this.geckoForm.formSelector} ${gecko_selector_formComponent}`).addClass(gecko_class_hidden);$(`${this.geckoForm.formSelector} ${gecko_selector_formComponent}[stepid="${this.geckoForm.formSteps[this.geckoForm.currentStep-1]}"]`).removeClass(gecko_class_hidden)}moveToLastStep(){this.geckoForm.geckoRequest.data.categories.pop();this.currentStep--;this.activateCurrentStep()}moveToNextStep(){$(`${this.geckoForm.formSelector} ${gecko_selector_inputElement}`).removeClass(gecko_class_formItemError);const currentStepId=this.geckoForm.formSteps[this.geckoForm.currentStep-1];const currentStepSelector=`${this.geckoForm.formSelector} ${gecko_selector_formComponent}[stepid="${currentStepId}"]`;let categoryRequestObject={};categoryRequestObject.name=currentStepId;categoryRequestObject.children=[];const currentStep=this.geckoForm.formJson.steps.filter(step=>step.stepId==currentStepId)[0];let error=false;currentStep.rows.forEach(row=>{row.elements.forEach(element=>{const currentSelector=`${currentStepSelector} ${gecko_selector_inputElement}[name="${element.name}"]`;let value="";switch(element.type){case"text":{value=$(currentSelector).val();break}case"email":{value=$(currentSelector).val();break}case"tel":{value=$(currentSelector).val();break}case"textarea":{value=$(currentSelector).val();break}case"radio":{value=$(`${currentSelector}:checked`).val()??null;break}case"checkbox":{break}}value=value==null?null:value.trim()==""?null:value;if(value!=null)categoryRequestObject.children.push({name:element.name,val:value});if(element.required==true&&value==null){$(currentSelector).addClass(gecko_class_formItemError);error=true}})});if(error){return}this.geckoForm.geckoRequest.data.categories.push(categoryRequestObject);if(this.geckoForm.currentStep>=this.geckoForm.formSteps.length){$.ajax({url:`https://ltavphiuzenejhnrbxvl.functions.supabase.co/mail-service?name=${this.geckoForm.formJson.requestName}`,method:"POST",contentType:"application/json",data:JSON.stringify(this.geckoForm.geckoRequest),success:function(response){console.log("Response:",response)},error:function(xhr,status,error){console.error("Error:",error)}})}this.currentStep++;this.activateCurrentStep()}}class GeckoFormListener{constructor(geckoForm){this.geckoForm=geckoForm}addMoveButtonListener(){$(`${this.geckoForm.submitButtonSelector}`).on("click",this.geckoForm.geckoFormManipulator.moveToNextStep.bind(this.geckoForm.geckoFormManipulator));$(`${this.geckoForm.backButtonSelector}`).on("click",this.geckoForm.geckoFormManipulator.moveToLastStep.bind(this.geckoForm.geckoFormManipulator))}addRadioTriggerListener(json){$(document).on("change",`${this.geckoForm.formSelector} input[type="radio"][name="${json.name}"]`,ev=>{this.geckoForm.geckoFormManipulator.triggerStepManipulation(ev.currentTarget.value,json)})}}class GeckoFormGenerator{constructor(geckoForm){this.geckoForm=geckoForm}buildSingleGeckoStepView(json){let content="";const stepGroup=json.stepGroup!=null?`stepgroup="${json.stepGroup}"`:"";if(this.geckoForm.formSteps.length>1){content+=`<div class="${gecko_class_formStepDivider} el ${gecko_class_formStepDividerStylingClasses}" stepid="${json.stepId}" ${stepGroup}></div>`}content+=`<div class="${gecko_class_formStepComponent} cmp" stepid="${json.stepId}" ${stepGroup}>`;content+=`<div class="${gecko_class_formStepLayout} lyt">`;content+=`<div class="${gecko_class_formStepNumberComponent} cmp">`;content+=`<div class="${gecko_class_formStepNumberCD} cd">`;content+=`<div class="${gecko_class_formStepNumberLayout} lyt">`;content+=`<div class="${gecko_class_formStepNumberWrapper} wr_p">`;content+=`<p class="${gecko_class_formStepNumberLabel} ${gecko_class_formStepNumberLabelStylingClasses}">${this.geckoForm.formSteps.length}</p>`;content+="</div>";content+="</div>";content+="</div>";content+="</div>";content+=`<div class="${gecko_class_formStepLabelWrapper} ${gecko_class_formStepLabelWrapperStylingClasses}">`;content+=`<p class="${gecko_class_formStepLabel} ${gecko_class_formStepLabelStylingClasses}">${json.label}</p>`;content+="</div>";content+="</div>";content+="</div>";$(`${this.geckoForm.formStepsSelector}`).append(content)}buildSingleGeckoStepContent(json){let content="";const stepGroup=json.stepGroup!=null?`stepgroup="${json.stepGroup}"`:"";content+=`<div class="${gecko_class_formComponent} cmp ${gecko_class_hidden}" stepid="${json.stepId}" ${stepGroup}>`;content+=`<div class="${gecko_class_formLayout} lyt">`;content+=this.generateRows(json.rows);content+="</div>";content+="</div>";$(`${this.geckoForm.formSelector}`).append(content)}generateRows(json){let content="";json.forEach(row=>{content+=this.generateSingleRow(row)});return content}generateSingleRow(json){let content="";content+=`<div class="${gecko_class_formRowComponent} cmp">`;content+=`<div class="${gecko_class_formRowLayout} lyt">`;json.elements.forEach(element=>{content+=this.generateSingleFormItem(element)});content+="</div>";content+="</div>";return content}generateSingleFormItem(json){let content="";content+=`<div class="${gecko_class_formItemComponent} cmp">`;content+=`<div class="${gecko_class_formItemLayout} lyt">`;switch(json.type){case"text":{content+=this.generateInputFormItem(json);break}case"email":{content+=this.generateInputFormItem(json);break}case"tel":{content+=this.generateInputFormItem(json);break}case"textarea":{content+=this.generateTextareaFormItem(json);break}case"radio":{content+=this.generateRadioFormItem(json);break}case"checkbox":{content+=this.generateCheckboxFormItem(json);break}}content+="</div>";content+="</div>";return content}generateRadioFormItem(json){let content="";const label=json.label??"";content+=`<p class="${gecko_class_label}">${label}</p>`;content+=`<div class="${gecko_class_radioButtonGroupComponent} cmp">`;content+=`<div class="${gecko_class_radioButtonGroupLayout} lyt">`;json.options.forEach(option=>{content+=`<div class="${gecko_class_radioButtonComponent} cmp">`;content+=`<div class="${gecko_class_radioButtonLayout} lyt">`;content+=`<input id="${option.id}" type="radio" name="${json.name}" class="${gecko_class_radioButton}" value="${option.value}">`;content+=`<label class="${gecko_class_label}" for="${option.id}">${option.label}</label>`;content+="</div>";content+="</div>"});content+="</div>";content+="</div>";if(json.trigger==true)this.geckoForm.geckoFormListener.addRadioTriggerListener(json);return content}generateCheckboxFormItem(json){let content="";const label=json.label??"";content+=`<p class="${gecko_class_label}">${label}</p>`;content+=`<div class="${gecko_class_checkboxGroupComponent} cmp">`;content+=`<div class="${gecko_class_checkboxGroupLayout} lyt">`;json.options.forEach(option=>{content+=`<div class="${gecko_class_checkboxComponent} cmp">`;content+=`<div class="${gecko_class_checkboxLayout} lyt">`;content+=`<input id="${option.id}" type="checkbox" name="${json.name}" class="${gecko_class_checkbox}" value="${option.value}">`;content+=`<label class="${gecko_class_label}" for="${option.id}">${option.label}</label>`;content+="</div>";content+="</div>"});content+="</div>";content+="</div>";return content}generateInputFormItem(json){const autocomplete=json.autocomplete?`autocomplete="${json.autocomplete}"`:"";const placeholder=json.placeholder?`placeholder="${json.placeholder}"`:"";const required=json.required?`required="${json.required}"`:"";const name=json.name?`name="${json.name}"`:"";const label=json.label??"";let content="";content+=`<p class="${gecko_class_label}">${label}</p>`;content+=`<input class="${gecko_class_inputElement}" type="${json.type}" ${placeholder} ${required} ${autocomplete} ${name}>`;return content}generateTextareaFormItem(json){const placeholder=json.placeholder?`placeholder="${json.placeholder}"`:"";const required=json.required?`required="${json.required}"`:"";const name=json.name?`name="${json.name}"`:"";const label=json.label??"";let content="";content+=`<p class="${gecko_class_label}">${label}</p>`;content+=`<textarea class="${gecko_class_inputElement}" ${placeholder} ${required} ${name}"></textarea>`;return content}}class GeckoForm{constructor(formJson,formSelector,submitButtonSelector,backButtonSelector,formStepsSelector){this.geckoFormGenerator=new GeckoFormGenerator(this);this.geckoFormListener=new GeckoFormListener(this);this.geckoFormManipulator=new GeckoFormManipulator(this);this.formJson=formJson;this.formSelector=formSelector;this.submitButtonSelector=submitButtonSelector;this.backButtonSelector=backButtonSelector;this.formStepsSelector=formStepsSelector;this.formSteps=[];this.currentStep=1;this.geckoRequest={data:{categories:[]}}}buildGeckoForm(){this.geckoFormManipulator.buildGeckoSteps(this.formJson.steps,"default");this.geckoFormManipulator.activateCurrentStep();this.geckoFormListener.addMoveButtonListener()}}const geckoHaefeliForm={requestName:"winno",steps:[{type:"default",label:"Persönliche Daten",stepId:"personal",rows:[{elements:[{type:"text",placeholder:"Vorname",required:true,autocomplete:"given-name",label:"Name",name:"surname"},{type:"text",placeholder:"Nachname",required:true,autocomplete:"family-name",name:"name"}]},{elements:[{type:"email",placeholder:"max.muster@company.com",required:true,autocomplete:"email",label:"E-Mail",name:"email"}]},{elements:[{type:"tel",placeholder:"+41 00 000 00 00",required:true,autocomplete:"tel",label:"Telefonnummer",name:"telefon"}]},{elements:[{type:"textarea",placeholder:"Ihre Nachricht oder Bemerkung",required:false,label:"Nachricht",name:"nachricht"}]},{elements:[{type:"radio",required:true,label:"Art des Umzugs",name:"umzugsart",trigger:true,stepGroups:["privatumzug","firmenumzug"],options:[{label:"Privatumzug",value:"privatumzug",id:"privatumzug",stepGroup:"privatumzug"},{label:"Firmenumzug",value:"firmenumzug",id:"firmenumzug",stepGroup:"firmenumzug"},{label:"Kein Umzug",value:"kein_umzug",id:"kein_umzug"}]}]}]},{type:"hidden",label:"Auszugsort",stepId:"auszugsort",stepGroup:"privatumzug",rows:[{elements:[{type:"text",placeholder:"Musterstrasse",required:false,label:"Strasse",name:"auszug_strasse"},{type:"text",placeholder:"Hausnummer",required:false,label:"Hausnummer",name:"auszug_hausnummer"}]},{elements:[{type:"text",placeholder:"Adresszusatz",required:false,label:"Adresszusatz",name:"auszug_adresszusatz"}]},{elements:[{type:"text",placeholder:"Ort",required:false,label:"Ort",name:"auszug_ort"},{type:"text",placeholder:"0000",required:false,label:"PLZ",name:"auszug_plz"}]},{elements:[{type:"text",placeholder:"2.5 Zimmer",required:false,label:"Anzahl der Räume",name:"auszug_anzahl_räume"},{type:"text",placeholder:"100 m²",required:false,label:"Gesamtfläche",name:"auszug_gesamtfläche"}]},{elements:[{type:"text",placeholder:"Etage",required:false,label:"Etage",name:"auszug_etage"},{type:"text",placeholder:"Personen",required:false,label:"Anzahl der umziehenden Personen",name:"auszug_personen"}]},{elements:[{type:"text",placeholder:"dd.mm.yyyy",required:false,label:"Der Umzug wird bezahlt von",name:"auszug_bezahlung"},{type:"text",placeholder:"dd.mm.yyyy",required:false,label:"gewünschtes Datum Auszug",name:"auszug_datum"}]},{elements:[{type:"textarea",placeholder:"Ihre Nachricht",required:false,label:"Bemerkung",name:"auszug_bemerkung"}]}]},{type:"hidden",label:"Einzugsort",stepId:"einzugsort",stepGroup:"privatumzug",rows:[{elements:[{type:"text",placeholder:"Musterstrasse",required:false,label:"Strasse",name:"einzug_strasse"},{type:"text",placeholder:"Hausnummer",required:false,label:"Hausnummer",name:"einzug_hausnummer"}]},{elements:[{type:"text",placeholder:"Adresszusatz",required:false,label:"Adresszusatz",name:"einzug_adresszusatz"}]},{elements:[{type:"text",placeholder:"Ort",required:false,label:"Ort",name:"einzug_ort"},{type:"text",placeholder:"0000",required:false,label:"PLZ",name:"einzug_plz"}]},{elements:[{type:"text",placeholder:"Etage",required:false,label:"Etage",name:"einzug_etage"},{type:"text",placeholder:"dd.mm.yyyy",required:false,label:"gewünschtes Datum Einzug",name:"einzug_datum"}]},{elements:[{type:"textarea",placeholder:"Ihre Nachricht",required:false,label:"Bemerkung",name:"einzug_bemerkung"}]}]},{type:"hidden",label:"Auszugsort Firma",stepId:"auszugsort_firma",stepGroup:"firmenumzug",rows:[{elements:[{type:"text",placeholder:"Musterstrasse",required:false,label:"Strasse",name:"auszug_firma_strasse"},{type:"text",placeholder:"Hausnummer",required:false,label:"Hausnummer",name:"auszug_firma_hausnummer"}]},{elements:[{type:"text",placeholder:"Adresszusatz",required:false,label:"Adresszusatz",name:"auszug_firma_adresszusatz"}]},{elements:[{type:"text",placeholder:"Ort",required:false,label:"Ort",name:"auszug_firma_ort"},{type:"text",placeholder:"0000",required:false,label:"PLZ",name:"auszug_firma_plz"}]},{elements:[{type:"text",placeholder:"2.5 Zimmer",required:false,label:"Anzahl der Räume",name:"auszug_firma_anzahl_räume"},{type:"text",placeholder:"100 m²",required:false,label:"Gesamtfläche",name:"auszug_firma_gesamtfläche"}]},{elements:[{type:"text",placeholder:"Etage",required:false,label:"Etage",name:"auszug_firma_etage"},{type:"text",placeholder:"Personen",required:false,label:"Anzahl der Arbeitsplätze",name:"auszug_firma_personen"}]},{elements:[{type:"text",placeholder:"dd.mm.yyyy",required:false,label:"gewünschtes Datum Auszug",name:"auszug_firma_datum"}]},{elements:[{type:"textarea",placeholder:"Ihre Nachricht",required:false,label:"Bemerkung",name:"auszug_bemerkung"}]}]},{type:"hidden",label:"Einzugsort Firma",stepId:"einzugsort_firma",stepGroup:"firmenumzug",rows:[{elements:[{type:"text",placeholder:"Musterstrasse",required:false,label:"Strasse",name:"einzug_firma_strasse"},{type:"text",placeholder:"Hausnummer",required:false,label:"Hausnummer",name:"einzug_firma_hausnummer"}]},{elements:[{type:"text",placeholder:"Adresszusatz",required:false,label:"Adresszusatz",name:"einzug_firma_adresszusatz"}]},{elements:[{type:"text",placeholder:"Ort",required:false,label:"Ort",name:"einzug_firma_ort"},{type:"text",placeholder:"0000",required:false,label:"PLZ",name:"einzug_firma_plz"}]},{elements:[{type:"text",placeholder:"Etage",required:false,label:"Etage",name:"einzug_firma_etage"},{type:"text",placeholder:"dd.mm.yyyy",required:false,label:"gewünschtes Datum Einzug",name:"einzug_firma_datum"}]},{elements:[{type:"textarea",placeholder:"Ihre Nachricht",required:false,label:"Bemerkung",name:"einzug_firma_bemerkung"}]}]},{type:"hidden",label:"Reinigung",stepId:"reinigung",rows:[{elements:[{type:"text",placeholder:"dd.mm.yyyy",required:false,label:"Reinigungstermin",name:"reinigung_termin"},{type:"text",placeholder:"07:30 Uhr",required:false,label:"Uhrzeit",name:"reinigung_termin_uhrzeit"}]},{elements:[{type:"text",placeholder:"dd.mm.yyyy",required:false,label:"Abgabetermin",name:"abgabe_termin"},{type:"text",placeholder:"14:00 Uhr",required:false,label:"Uhrzeit",name:"abgabe_termin_uhrzeit"}]},{elements:[{type:"text",placeholder:"2.5 Zimmer",required:false,label:"Anzahl der Räume",name:"reinigung_anzahl_räume"},{type:"text",placeholder:"100 m²",required:false,label:"Gesamtfläche",name:"reinigung_gesamtfläche"}]},{elements:[{type:"textarea",placeholder:"Ihre Nachricht",required:false,label:"Bemerkung",name:"reinigung_bemerkung"}]}]},{type:"hidden",label:"Lagerung",stepId:"lagerung",rows:[{elements:[{type:"text",placeholder:"dd.mm.yyyy",required:false,label:"Lagerungs Beginn",name:"lagerung_beginn"},{type:"text",placeholder:"dd.mm.yyyy",required:false,label:"Voraussichtliches Lagerungs Ende",name:"lagerung_ende"}]},{elements:[{type:"text",placeholder:"10m³",required:false,label:"Volumen",name:"lagerung_volumen"}]},{elements:[{type:"textarea",placeholder:"Ihre Nachricht",required:false,label:"Bemerkung",name:"lagerung_bemerkung"}]}]},{type:"hidden",label:"Treppensteiger",stepId:"treppensteiger",rows:[{elements:[{type:"text",placeholder:"dd.mm.yyyy",required:false,label:"Miete Beginn",name:"treppensteiger_miete_beginn"},{type:"text",placeholder:"07:30 Uhr",required:false,label:"Uhrzeit",name:"treppensteiger_miete_beginn_uhrzeit"}]},{elements:[{type:"text",placeholder:"dd.mm.yyyy",required:false,label:"Miete Ende",name:"treppensteiger_miete_ende"},{type:"text",placeholder:"14:00 Uhr",required:false,label:"Uhrzeit",name:"treppensteiger_miete_ende_uhrzeit"}]},{elements:[{type:"text",placeholder:"2",required:false,label:"Anzahl benötigter Helfer",name:"treppensteiger_helfer"}]},{elements:[{type:"textarea",placeholder:"Ihre Nachricht",required:false,label:"Bemerkung",name:"treppensteiger_bemerkung"}]}]},{type:"hidden",label:"Möbellift",stepId:"moebellift",rows:[{elements:[{type:"text",placeholder:"dd.mm.yyyy",required:false,label:"Miete Beginn",name:"möbellift_miete_beginn"},{type:"text",placeholder:"07:30 Uhr",required:false,label:"Uhrzeit",name:"möbellift_miete_beginn_uhrzeit"}]},{elements:[{type:"text",placeholder:"dd.mm.yyyy",required:false,label:"Miete Ende",name:"möbellift_miete_ende"},{type:"text",placeholder:"14:00 Uhr",required:false,label:"Uhrzeit",name:"möbellift_miete_ende_uhrzeit"}]},{elements:[{type:"text",placeholder:"mind. 1",required:false,label:"Anzahl benötigter Helfer",name:"möbellift_helfer"}]},{elements:[{type:"textarea",placeholder:"Ihre Nachricht",required:false,label:"Bemerkung",name:"möbellift_bemerkung"}]}]},{type:"hidden",label:"Entsorgung",stepId:"entsorgung",rows:[{elements:[{type:"text",placeholder:"dd.mm.yyyy",required:false,label:"Entsorgung Termin",name:"entsorgung_termin"},{type:"text",placeholder:"07:30 Uhr",required:false,label:"Uhrzeit",name:"entsorgung_uhrzeit"}]},{elements:[{type:"text",placeholder:"10",required:false,label:"Anzahl der Packstücke",name:"entsorgung_packstuecke"},{type:"text",placeholder:"100 kg",required:false,label:"Gewicht",name:"entsorgung_gewicht"},{type:"text",placeholder:"10m³",required:false,label:"Volumen",name:"entsorgung_volumen"}]},{elements:[{type:"text",placeholder:"Musterstrasse",required:false,label:"Strasse Abholung",name:"entsorgung_strasse_abholung"},{type:"text",placeholder:"Hausnummer",required:false,label:"Hausnummer Abholung",name:"entsorgung_hausnummer_abholung"}]},{elements:[{type:"text",placeholder:"Adresszusatz",required:false,label:"Adresszusatz Abholung",name:"entsorgung_adresszusatz_abholung"}]},{elements:[{type:"text",placeholder:"Ort",required:false,label:"Ort Abholung",name:"entsorgung_ort_abholung"},{type:"text",placeholder:"PLZ",required:false,label:"PLZ Abholung",name:"entsorgung_plz_abholung"}]},{elements:[{type:"textarea",placeholder:"Ihre Nachricht",required:false,label:"Bemerkung",name:"entsorgung_bemerkung"}]}]}]};const geckoForm=new GeckoForm(geckoHaefeliForm,"#test-gecko-form",".wr_btn--submit","wr_btn--form-back",".lyt--form-steps");geckoForm.buildGeckoForm();