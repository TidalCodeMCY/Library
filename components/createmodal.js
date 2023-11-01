export const createModal = () => {
    /* Create the variables for the modal. This is made each 
    time the page is initialized but is hidden until made active.*/
    const container = document.querySelector('.bookcontainer');
    const modalContainer = document.createElement('dialog');
    const form = document.createElement('form');
    const titleLabel = document.createElement('label');
    const titleInput = document.createElement('input');
    const authorLabel = document.createElement('label');
    const authorInput = document.createElement('input');
    const pagesLabel = document.createElement('label');
    const pagesInput = document.createElement('input');
    const trueBtn = document.createElement('input');
    const trueLbl = document.createElement('label');
    const falseBtn = document.createElement('input');
    const falseLbl = document.createElement('label');
    const submit = document.createElement('input');
    const cancel = document.createElement('button');
    const checkboxHolder = document.createElement('div');
    // The code below assigns the classes/ids of everything in the modal to make it easy to style.
    modalContainer.id = 'modaldeco';
    modalContainer.classList = 'modalclass';
    form.id = 'modalform';
    titleLabel.id = 'tlabel';
    titleInput.id = 'tinput';
    titleLabel.classList = 'modalinners';
    titleInput.classList = 'modalinners';
    authorLabel.id = 'alabel';
    authorInput.id = 'ainput';
    authorLabel.classList = 'modalinners';
    authorInput.classList = 'modalinners';
    pagesLabel.id = 'plabel';
    pagesInput.id = 'pinput';
    pagesLabel.classList = 'modalinners';
    pagesInput.classList = 'modalinners';
    trueBtn.id = 'True';
    falseBtn.id = 'False';
    trueBtn.classList = 'modalbtns';
    falseBtn.classList = 'modalbtns';
    submit.id = 'submitbtn';
    cancel.id = 'cancelmodal';
    checkboxHolder.id = 'holdercheck';
    // The code below will set all the text content or the modal!
    titleLabel.textContent = 'Title: ';
    titleInput.placeholder = 'Title';
    authorLabel.textContent = 'Author: ';
    authorInput.placeholder = 'Author';
    pagesLabel.textContent = 'Total Pages? ';
    pagesInput.placeholder = 'Total Pages';
    trueLbl.textContent = 'True';
    falseLbl.textContent = 'False';
    submit.textContent = 'Add This Book!';
    cancel.textContent = 'X';
    //Assign all the input types
    titleInput.type = 'text';
    authorInput.type = 'text';
    pagesInput.type = 'text';
    submit.type = 'submit';
    trueBtn.type = 'checkbox';
    falseBtn.type = 'checkbox';
    //Appends all of the items to the form.
    form.appendChild(cancel);
    form.appendChild(titleLabel);
    form.appendChild(titleInput);
    form.appendChild(authorLabel);
    form.appendChild(authorInput);
    form.appendChild(pagesLabel);
    form.appendChild(pagesInput);
    checkboxHolder.appendChild(trueBtn);
    checkboxHolder.appendChild(trueLbl);
    checkboxHolder.appendChild(falseBtn);
    checkboxHolder.appendChild(falseLbl);
    form.appendChild(checkboxHolder);
    form.appendChild(submit);
    //Append to the dialog then append to the html to be used!
    modalContainer.appendChild(form);
    container.appendChild(modalContainer);
}