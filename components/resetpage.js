export default function resetPage(target){
    const container = document.querySelector(`.${target}`);

    while(container.firstChild){
        container.removeChild(container.lastChild);
    }

    return 'No Children!';
}