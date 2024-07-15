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
    return false
}
function isValidImageUrl(url) {
    const urlPattern = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp|svg))(?:\?.*)?$/i;
    return urlPattern.test(url);
}
const validateForm = (data, setErrors) => {
    const newErrors = {
        name: er(data.name, 3),
        distance: er(data.distance) || data.distance <= 0,
        time: er(data.time) || data.time <= 0,
        longitude: er(data.longitude),
        latitude: er(data.latitude),
        image: !isValidImageUrl(data.image),
        description: er(data.description, 20)
    };
    setErrors(newErrors);
    return newErrors;
};
export { validateEmail, validatePassword, er, isValidImageUrl, validateForm }