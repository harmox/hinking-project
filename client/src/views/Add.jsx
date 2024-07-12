import { useState } from "react"
import styles from "../errors.module.css"
import { add } from "../utils/api.js"
import { er, isValidImageUrl } from "../errors/validations.js"
import { useNavigate } from "react-router-dom"

function Add({ setError }) {
    const navigate = useNavigate()
    const [err, setErrors] = useState({
        name: null,
        distance: null,
        time: null,
        longitude: null,
        latitude: null,
        image: null,
        description: null
    })
    const [formData, setFormData] = useState({
        name: "",
        distance: "",
        time: "",
        longitude: "",
        latitude: "",
        image: "",
        description: ""
    });
    const onInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (name === 'name') {
            setErrors({ ...err, name: er(value, 3) });
        }
        if (name === 'distance') {
            setErrors({ ...err, distance: er(value) || value <= 0 });
        }
        if (name === 'time') {
            setErrors({ ...err, time: er(value) || value <= 0 });
        }
        if (name === 'longitude') {
            setErrors({ ...err, longitude: er(value) });
        }
        if (name === 'latitude') {
            setErrors({ ...err, latitude: er(value) });
        }
        if (name === 'image') {
            setErrors({ ...err, image: !isValidImageUrl(value) });
        }
        if (name === 'description') {
            setErrors({ ...err, description: er(value, 20) });
        }
    };
    async function onSubmit(e) {
        e.preventDefault()
        const { name, distance, time, longitude, latitude, image, description } = formData
        const errorCheck = Object.values(err)
        if (errorCheck.length == 0 || errorCheck.includes(null)) {
            if (errorCheck.includes(true)) {
                setError(`Fix your inputs!`)
            }
            setError(`All fields are required!`)
        } else {
            const result = await add({ name, distance, time, longitude, latitude, image, description, owner: localStorage.user })
            const res = await result.json()
            if (!res.data) {
                return setError(result.message)
            }
            navigate(`/details/${res.data._id}`)
        }

    }

    return (
        <>
            <div className="formContainer">

                <form className="addSigth" onSubmit={onSubmit} onChange={onInputChange}>

                    <input type="text" name="name" id="" placeholder="name" className={err.name ? styles.error : ''} />

                    <input type="number" name="distance" id="" placeholder="distance one way in km" step="0.1" className={err.distance ? styles.error : ''} />

                    <input type="number" name="time" id="" placeholder="ascend time in hours" step="0.1" className={err.time ? styles.error : ''} />

                    <input type="number" name="longitude" id="" placeholder="longitude" step="0.00001" className={err.longitude ? styles.error : ''} />

                    <input type="number" name="latitude" id="" placeholder="latitude" step="0.00001" className={err.latitude ? styles.error : ''} />

                    <input type="text" name="image" id="" placeholder="image" className={err.image ? styles.error : ''} />

                    <input type="text" name="description" id="" placeholder="description" className={err.description ? styles.error : ''} />

                    <button type="submit">Add sigth</button>

                </form>
            </div>
        </>
    )
}
export default Add