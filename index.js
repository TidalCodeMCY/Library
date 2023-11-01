import Library from "./components/classes.js";
import { createModal } from "./components/createmodal.js";

createModal();

(function events() {
    const library = new Library();
    const openModal = document.querySelector('.addbookbtn');
    const dialog = document.querySelector('.modalclass');
    const maxChecks = 1;
    let count = 0;
    const newDoc = document.querySelector('#holdercheck');

    openModal.addEventListener('click', () => {
        dialog.showModal();
    })

    document.querySelector('#holdercheck').addEventListener('click', event => {
        if (event.target.type === 'checkbox') {
            count = event.target.checked
              ? count + 1
              : count - 1
          }
        
          if (count >= maxChecks) {
            [...newDoc.querySelectorAll('input:not(:checked)')].forEach(input => input.disabled = true)
          } else {
            [...newDoc.querySelectorAll('input')].forEach(input => input.disabled = false)
          }
    })

})();



