/**
 * Turn on past just as plain text
 * 
 * @param {HTMLElement} htmlElement
 */
export default htmlElement => {
  htmlElement.addEventListener('paste', e => {
    e.preventDefault();

    let text = (e.originalEvent || e).clipboardData.getData('text/plain');
    text = text.replace(/(\r\n|\n\r|\r|\n)/g, '<br>');
    document.execCommand("insertHTML", false, text);
  });
};
