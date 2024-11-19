// Không cần JavaScript nếu sử dụng hover như trên
// Tuy nhiên, nếu bạn muốn sử dụng nhấp chuột để mở dropdown, bạn có thể sử dụng đoạn mã dưới đây.

document.querySelector('.dropbtn').addEventListener('click', function () {
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});
