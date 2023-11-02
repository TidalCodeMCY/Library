export default function deleteCard(e,library){
    library.removeBook(`${e}`);
    console.log(e,library);
    return;
}