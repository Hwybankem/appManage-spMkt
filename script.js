document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('myButton');
    const messageParagraph = document.getElementById('message');

    button.addEventListener('click', () => {
        messageParagraph.textContent = 'Mua thành công :D';
        console.log('Nút đã được nhấn!');
    });
});