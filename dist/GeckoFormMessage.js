class GeckoFormMessage {
  constructor(messageContainerSelector, type, title, message) {
    this.messageContainerSelector = messageContainerSelector;
    this.type = type;
    this.title = title;
    this.message = message;
    this.messageContent = '';
  }
  activateMessage() {
    $(`${this.messageContainerSelector}`).append(this.messageContent);
    const messageElement = $(`${this.messageContainerSelector} ${gecko_selector_message}:last-child`);
    $(messageElement).animate({
      opacity: 1,
      top: '+=20'
    }, 300);
    setTimeout(function () {
      $(messageElement).animate({
        opacity: 0,
        right: '-=40'
      }, 300, function () {
        $(this).remove();
      });
    }, 5000);
  }
  generateMessage() {
    let content = '';
    let typeClass = '';
    let typeIcon = '';
    let typeCardClass = '';
    switch (this.type) {
      case 'success':
        {
          typeClass = gecko_class_messageSuccessStyling;
          typeIcon = gecko_icon_successMessage;
          typeCardClass = gecko_class_messageSuccessCard;
          break;
        }
      case 'error':
        {
          typeClass = gecko_class_messageErrorStyling;
          typeIcon = gecko_icon_errorMessage;
          typeCardClass = gecko_class_messageErrorCard;
          break;
        }
    }
    content += `<div class="${gecko_class_messageComponent} cmp ${gecko_class_message} ${typeClass}" style="opacity: 0;">`;
    content += `<div class="${typeCardClass} cd">`;
    content += `<div class="${gecko_class_messageLayout} lyt">`;
    content += `<div class="${gecko_class_messageContentComponent} cmp">`;
    content += `<div class="${gecko_class_messageContentLayout} lyt">`;
    content += `<div class="${gecko_class_messageTitleComponent} cmp">`;
    content += `<div class="${gecko_class_messageTitleLayout} lyt">`;
    content += `<div class="${gecko_class_messageIconWrapper} wr_p">`;
    content += typeIcon;
    content += '</div>';
    content += `<div class="${gecko_class_messageTitleWrapper} wr_p">`;
    content += `<p class="${gecko_class_messageTitleLabel}">${this.title}</p>`;
    content += '</div>';
    content += `<div class="${gecko_class_messageCloseIconWrapper} wr_p">`;
    content += gecko_icon_close;
    content += '</div>';
    content += '</div>';
    content += '</div>';
    content += `<div class="${gecko_class_messageTextWrapper} wr_p">`;
    content += `<p class="${gecko_class_messageTextLabel}">${this.message}</p>`;
    content += '</div>';
    content += '</div>';
    content += '</div>';
    content += '</div>';
    content += '</div>';
    content += '</div>';
    this.messageContent = content;
  }
}