
const buttons = document.querySelectorAll('.buttons');
const body = document.querySelector('.body');
const heading = document.querySelector('h1');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {

        const color = button.id;
        switch (color) {
            case 'blue':
                body.style.backgroundColor = '#6467e6';
                heading.style.color = '#e7e7e7';
                break;
            case 'green':
                body.style.backgroundColor = '#85adac';
                heading.style.color = '#e7e7e7';
                break;
            case 'pink':
                body.style.backgroundColor = '#ee94ca';
                heading.style.color = '#202020';
                break;
            case 'white':
                body.style.backgroundColor = '#e7e7e7';
                heading.style.color = '#202020';
                break;
            case 'black':
                body.style.backgroundColor = '#202020';
                heading.style.color = '#e7e7e7';
                break;
            default:
                body.style.backgroundColor = 'white';
        }
    });
});
