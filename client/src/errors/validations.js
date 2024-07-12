const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const validatePassword = (password) => {
    return password.length >= 5;
};
function er(it, len = 1, max = 500) {
    if (!it || it.length < len || it.length > 500) {
        return true
    }
}
function isValidImageUrl(url) {
    const urlPattern = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp|svg))$/i;
    return urlPattern.test(url);
}
export { validateEmail, validatePassword, er, isValidImageUrl }