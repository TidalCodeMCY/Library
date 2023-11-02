export const getUserChoices = (library) => {
    const title = document.querySelector('#tinput').value;
    const author = document.querySelector('#ainput').value;
    const pages = document.querySelector('#pinput').value;
    let read;

    if(document.querySelector('#True').checked){
        read = 'True';
    }else if(document.querySelector('#False').checked){
        read = 'False';
    }

    if(title,author,pages,read){
      return [title,author,pages,read];   
    }
    return 'Failed to add book';
};