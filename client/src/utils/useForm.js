import { useState } from "react";
import { validateEmail, validatePassword } from "../errors/validations.js";

function useForm(initialValues,  setErrors , errors) {
    const [values, setValues] = useState(initialValues);

    const changeHandler = (e) => {
        setValues(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
        if (e.target.name === 'email') {
            setErrors({ ...errors, email: !validateEmail(e.target.value) });
        }
        if (e.target.name === 'username') {
            setErrors({ ...errors, username: !validatePassword(e.target.value) });
        }
        if (e.target.name === 'password') {
            setErrors({ ...errors, password: !validatePassword(e.target.value) });
        }
        if (e.target.name === 'repass') {
            setErrors({ ...errors, repass: !validatePassword(e.target.value) });
        }
    };


    return {
        values,
        changeHandler,
    };
}
export default useForm