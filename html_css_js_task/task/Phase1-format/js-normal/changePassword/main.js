const nowPassword = document.getElementById('nowPassword');
let PasswordValue = 'aaaaa';
nowPassword.textContent = `現在のパスワードは${PasswordValue}`;

const setPassword = document.getElementById('setPassword');
setPassword.addEventListener('click', function () {
    const confirmPassword = document.getElementById('confirmPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    if (PasswordValue === confirmPassword) {
        if (PasswordValue !== newPassword) {
            if (8 <= newPassword.length) {
                PasswordValue = newPassword;
                nowPassword.textContent = `現在のパスワードは${PasswordValue}`;
                alert(`新しいパスワードは${PasswordValue}です`);
            } else {
                alert('8文字以上にして下さい');
            }
        } else {
            alert('同じパスワードは使えません')
        }
    } else {
        alert(`古いパスワードが間違っています`);
    }
});










