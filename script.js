document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('myButton');
    const messageParagraph = document.getElementById('message');

    button.addEventListener('click', () => {
        messageParagraph.textContent = 'Mua thành công :D';
        console.log('Nút đã được nhấn!');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('myButton');
    const messageParagraph = document.getElementById('message');
    const counterParagraph = document.getElementById('counter'); // Lấy phần tử bộ đếm

    let clickCount = 0; // Khởi tạo biến đếm

    button.addEventListener('click', () => {
        clickCount++; // Tăng biến đếm mỗi khi nút được nhấn
        messageParagraph.textContent = `Bạn đã nhấn nút! Tổng cộng ${clickCount} lần. Chúc mừng thành công đẩy dự án lên GitHub!`;
        counterParagraph.textContent = `Số lần nhấn: ${clickCount}`; // Cập nhật hiển thị bộ đếm
        console.log(`Nút đã được nhấn! Lần thứ: ${clickCount}`);
    });
});
