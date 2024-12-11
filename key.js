document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
}, false);

// Vô hiệu hóa phím tắt
document.onkeydown = function (e) {
    // Vô hiệu hóa F12
    if (e.keyCode == 123) {
        return false;
    }
    // Vô hiệu hóa Ctrl+Shift+I
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    // Vô hiệu hóa Ctrl+Shift+J
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    // Vô hiệu hóa Ctrl+U
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
};

// Phát hiện khi DevTools mở
let devtools = function () { };
devtools.toString = function () {
    this.opened = true;
};
// Kiểm tra liên tục
setInterval(function () {
    const heightThreshold = window.outerHeight - window.innerHeight > 200;
    const widthThreshold = window.outerWidth - window.innerWidth > 200;

    if (heightThreshold || widthThreshold || devtools.opened) {
        document.body.innerHTML = 'Ăn cắp chất xám là hành vi độc hại, hãy tắt DevTools rồi tiếp tục sử dụng.';
    }
}, 1000);