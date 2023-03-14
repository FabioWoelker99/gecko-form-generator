const gecko_class_formComponent = 'cmp--form';
const gecko_class_formLayout = 'lyt--form';

const gecko_class_formRowComponent = 'cmp--form-row';
const gecko_class_formRowLayout = 'lyt--form-row';
const gecko_class_formItemComponent = 'cmp--form-item';
const gecko_class_formItemLayout = 'lyt--form-item';
const gecko_class_inputElement = 'inp';
const gecko_class_inputGeneralElement = 'gecko-inp';
const gecko_class_label = 'p--l';
const gecko_class_hidden = 'gecko-hidden';
const gecko_class_formStepComponent = 'cmp--form-step';
const gecko_class_formStepLayout = 'lyt--form-step';
const gecko_class_formStepNumberComponent = 'cmp--form-step-number';
const gecko_class_formStepNumberCD = 'cd--form-step-number';
const gecko_class_formStepNumberLayout = 'lyt--form-step-number';
const gecko_class_formStepNumberWrapper = 'wr_p--form-step-number';
const gecko_class_formStepNumberLabel = 'h--xxs';
const gecko_class_formStepNumberLabelStylingClasses = 'txt--lh-100';
const gecko_class_formStepLabelWrapper = 'wr_p--form-step';
const gecko_class_formStepLabelWrapperStylingClasses = 'wr_p txt--a-c txt--no-wrap';
const gecko_class_formStepLabel = 'h--xxs';
const gecko_class_formStepLabelStylingClasses = 'txt--lh-100';
const gecko_class_formStepDivider = 'el--form-step';
const gecko_class_formStepDividerStylingClasses = 'bg--pri';
const gecko_class_formItemError = 'has_error';
const gecko_class_radioButtonGroupComponent = 'cmp--rb-group';
const gecko_class_radioButtonGroupLayout = 'lyt--rb-group';
const gecko_class_radioButtonComponent = 'cmp--rb';
const gecko_class_radioButtonLayout = 'lyt--rb';
const gecko_class_radioButton = 'rb';
const gecko_class_checkboxGroupComponent = 'cmp--cb-group';
const gecko_class_checkboxGroupLayout = 'lyt--cb-group';
const gecko_class_checkboxComponent = 'cmp--cb';
const gecko_class_checkboxLayout = 'lyt--cb';
const gecko_class_checkbox = 'cb';

const gecko_selector_formComponent = `.${gecko_class_formComponent}`;
const gecko_selector_formStepComponent = `.${gecko_class_formStepComponent}`;
const gecko_selector_inputGeneralElement = `.${gecko_class_inputGeneralElement}`;
const gecko_selector_formStepDivider = `.${gecko_class_formStepDivider}`;

const gecko_class_message = 'gecko-msg';
const gecko_class_messageComponent = 'cmp--msg';
const gecko_class_messageLayout = 'lyt--msg';
const gecko_class_messageContentComponent = 'cmp--msg-content';
const gecko_class_messageContentLayout = 'lyt--msg-content';
const gecko_class_messageTitleComponent = 'cmp--msg-title';
const gecko_class_messageTitleLayout = 'lyt--msg-title';
const gecko_class_messageIconWrapper = 'wr_ico--msg';
const gecko_class_messageTitleWrapper = 'wr_p--msg';
const gecko_class_messageCloseIconWrapper = 'wr_ico--msg-close';
const gecko_class_messageTitleLabel = 'h--xs';
const gecko_class_messageTextWrapper = 'wr_p--msg';
const gecko_class_messageTextLabel = 'p--m';
const gecko_class_messageSuccessStyling = 'txt--c-success';
const gecko_class_messageErrorStyling = 'txt--c-error';

const gecko_icon_close = '<svg display="block" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 8L16 16" stroke="#8B8B8B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 16L16 8" stroke="#8B8B8B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const gecko_icon_successMessage = '<svg display="block" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.99961 1.9001C5.5261 1.9001 1.89961 5.52659 1.89961 10.0001C1.89961 14.4736 5.5261 18.1001 9.99961 18.1001C14.4731 18.1001 18.0996 14.4736 18.0996 10.0001C18.0996 5.52659 14.4731 1.9001 9.99961 1.9001ZM0.0996094 10.0001C0.0996094 4.53248 4.53199 0.100098 9.99961 0.100098C15.4672 0.100098 19.8996 4.53248 19.8996 10.0001C19.8996 15.4677 15.4672 19.9001 9.99961 19.9001C4.53199 19.9001 0.0996094 15.4677 0.0996094 10.0001ZM13.636 7.3637C13.9875 7.71517 13.9875 8.28502 13.636 8.63649L9.63601 12.6365C9.28453 12.988 8.71469 12.988 8.36321 12.6365L6.36321 10.6365C6.01174 10.285 6.01174 9.71517 6.36321 9.3637C6.71469 9.01223 7.28453 9.01223 7.63601 9.3637L8.99961 10.7273L12.3632 7.3637C12.7147 7.01223 13.2845 7.01223 13.636 7.3637Z"/></svg>';
const gecko_icon_errorMessage = '<svg display="block" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.99961 1.9001C5.5261 1.9001 1.89961 5.52659 1.89961 10.0001C1.89961 14.4736 5.5261 18.1001 9.99961 18.1001C14.4731 18.1001 18.0996 14.4736 18.0996 10.0001C18.0996 5.52659 14.4731 1.9001 9.99961 1.9001ZM0.0996094 10.0001C0.0996094 4.53248 4.53199 0.100098 9.99961 0.100098C15.4672 0.100098 19.8996 4.53248 19.8996 10.0001C19.8996 15.4677 15.4672 19.9001 9.99961 19.9001C4.53199 19.9001 0.0996094 15.4677 0.0996094 10.0001ZM6.36321 6.3637C6.71469 6.01223 7.28453 6.01223 7.63601 6.3637L9.99961 8.72731L12.3632 6.3637C12.7147 6.01223 13.2845 6.01223 13.636 6.3637C13.9875 6.71517 13.9875 7.28502 13.636 7.63649L11.2724 10.0001L13.636 12.3637C13.9875 12.7152 13.9875 13.285 13.636 13.6365C13.2845 13.988 12.7147 13.988 12.3632 13.6365L9.99961 11.2729L7.63601 13.6365C7.28453 13.988 6.71469 13.988 6.36321 13.6365C6.01174 13.285 6.01174 12.7152 6.36321 12.3637L8.72682 10.0001L6.36321 7.63649C6.01174 7.28502 6.01174 6.71517 6.36321 6.3637Z"/></svg>';
