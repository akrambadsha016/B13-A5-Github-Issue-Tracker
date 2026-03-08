
const showSpinner = () => {
    const spinner = document.getElementById('spinner');
    spinner.classList.remove('hidden');
    spinner.className = 'flex justify-center items-center h-24';
}


const removeSpinner = () => {
    const spinner = document.getElementById('spinner');
    spinner.classList.add('hidden');
    spinner.classList.remove('flex', 'justify-center', 'items-center', 'h-24');
}