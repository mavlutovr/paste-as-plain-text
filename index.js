/**
 * Turn on past just as plain text
 * 
 * @param {HTMLElement} htmlElement
 */
export default htmlElement => {
  console.log('htmlElement', htmlElement)
  htmlElement.addEventListener('paste', e => {
    e.preventDefault();

    let text = (e.originalEvent || e).clipboardData.getData('text/plain');
    text = text.replace(/\n/g, '<BR>');
    document.execCommand("insertHTML", false, text);
  });
};
