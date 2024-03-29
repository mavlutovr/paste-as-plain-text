/**
 * Turn on past just as plain text
 *
 * @param {HTMLElement} htmlElement
 * @param {function} onText
 */
export default (htmlElement, onText) => {
  // console.log('htmlElement', htmlElement)
  htmlElement.addEventListener('paste', e => {
    e.preventDefault();

    let text = (e.originalEvent || e).clipboardData.getData('text/plain');

    if (htmlElement.dataset.log) {
      console.log('text before', text);
    }

	  if (onText) text = onText(text)

	  text = text.replace(/(\r\n|\n\r|\r|\n)/g, '<br>');

    if (htmlElement.dataset.log) {
      console.log('text after', text);
    }

    document.execCommand("insertHTML", false, text);
  });
};
