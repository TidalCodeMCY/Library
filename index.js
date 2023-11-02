import Library from "./components/classes.js";
import { createModal } from "./components/createmodal.js";
import deleteCard from "./components/deletecard.js";
import { getUserChoices } from "./components/getuser.js";


createModal();
const library = new Library();

(function events() {
    const maxChecks = 1;
    

    document.querySelector('#cancelmodal').addEventListener('click', () => {
        document.querySelector('.modalclass').close();
        document.querySelector('form').reset();
        document.querySelector('#True').disabled = false;
        document.querySelector('#False').disabled = false;
    })

    document.querySelector('.addbookbtn').addEventListener('click', () => {
        document.querySelector('.modalclass').showModal();
    })

    document.querySelector('#holdercheck').addEventListener('click', event => {
        const Doc = document.querySelector('#holdercheck');
        let count = 0;
        document.querySelector('#True').disabled = false;
        document.querySelector('#False').disabled = false;
        if (event.target.type === 'checkbox') {
            count = event.target.checked
              ? count + 1
              : count - 1
          }
        
          if (count >= maxChecks) {
            [...Doc.querySelectorAll('input:not(:checked)')].forEach(input => input.disabled = true)
          } else {
            [...Doc.querySelectorAll('input')].forEach(input => input.disabled = false)
          }
    })

    document.querySelector('.bookcontainer').addEventListener('click', (e) =>{
      const target = e.target;
      const classes = target.classList.value;
      library.removeBook(`${target.id}`);
    })

    document.querySelector('#submitbtn').addEventListener('click', (e) => { 
      e.preventDefault();
      if(document.querySelector('#tinput').value && document.querySelector('#ainput').value 
      && document.querySelector('#pinput').value && document.querySelector('#True').checked 
      || document.querySelector('#tinput').value && document.querySelector('#ainput').value 
      && document.querySelector('#pinput').value && document.querySelector('#False').checked){
        const userArray = getUserChoices(library);
        let title;
        let author;
        let pages;
        let read;

        userArray.forEach(item => {
          if(!title){
            title = item;
          }else if(!author){
            author = item;
          }else if(!pages){
            pages = item;
          }else{
            read = item;
          }
        });

        library.addBook(title,author,pages,read);
        document.querySelector('.modalclass').close();
      }else{
        return 'Please Fill Out The Form!';
      }
      
    })
})();
