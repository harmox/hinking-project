import { useEffect, useState ,useContext} from "react"
import styles from "../errors.module.css"
import { er, isValidImageUrl } from "../errors/validations.js"
import { useNavigate, useParams } from "react-router-dom"
import { add, detailsGet, edit } from "../utils/api.js"
import ErrorContext from "../context/errorContext.js";

function Add() {
    const { setError } = useContext(ErrorContext)
    let { id } = useParams();
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: "",
        distance: "",
        time: "",
        longitude: "",
        latitude: "",
        image: "",
        description: ""
    });
    const nameOfButton = window.location.href.endsWith("create") ? "Create" : "Edit";
    const [err, setErrors] = useState({
        name: null,
        distance: null,
        time: null,
        longitude: null,
        latitude: null,
        image: null,
        description: null
    })
    useEffect(() => {
        if (id != undefined && id.length >= 20) {
            (async () => {
                try {
                    const data = await detailsGet(id)
                    setFormData(data)
                    if (data.owner != localStorage.user) {
                        navigate(`/`)
                    }
                    setErrors({
                        name: er(data.name, 3),
                        distance: er(data.distance) || data.distance <= 0,
                        time: er(data.time) || data.time <= 0,
                        longitude: er(data.longitude),
                        latitude: er(data.latitude),
                        image: !isValidImageUrl(data.image),
                        description: er(data.description, 20)
                    })
                } catch (err) {
                    setError(`Error with fetching data ${err.message}`)
                }

            })();
        } else {
            setFormData({
                name: "",
                distance: "",
                time: "",
                longitude: "",
                latitude: "",
                image: "",
                description: ""
            });
            setErrors({
                name: null,
                distance: null,
                time: null,
                longitude: null,
                latitude: null,
                image: null,
                description: null
            })
        }
    }, [id]);

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
    console.log(err)
    async function onSubmit(e) {
        e.preventDefault()
        const { name, distance, time, longitude, latitude, image, description } = formData
        const errorCheck = Object.values(err)
        if (errorCheck.length == 0 || errorCheck.includes(null) || errorCheck.includes(true)) {
            setError(`Fix your inputs!`)
        } else {
            let result;
            try {
                if (id != undefined && id.length >= 20) {
                    if (localStorage.user != formData.owner) { return }
                    result = await edit(id, { name, distance, time, longitude, latitude, image, description });
                } else {
                    result = await add({ name, distance, time, longitude, latitude, image, description, owner: localStorage.user });
                }
                if (result.message) { ; setError(result.message) }
                if (!result.data) {
                    return setError(result.message);
                }
                navigate(`/details/${result.data._id}`);
            } catch (error) {
                setError(`Error with submitting data!`)
                console.log(error.message);
            }
        }

    }

    return (
        <>
            <div className="formContainer">

                <form className="addSigth" onSubmit={onSubmit} onChange={onInputChange}>

                    <input type="text" name="name" id="" placeholder="name" defaultValue={formData.name} className={err.name ? styles.error : ''} />

                    <input type="number" name="distance" id="" placeholder="distance one way in km" step="0.1" defaultValue={formData.distance} className={err.distance ? styles.error : ''} />

                    <input type="number" name="time" id="" placeholder="ascend time in hours" step="0.1" defaultValue={formData.time} className={err.time ? styles.error : ''} />

                    <input type="number" name="longitude" id="" placeholder="longitude" step="0.00001" defaultValue={formData.longitude} className={err.longitude ? styles.error : ''} />

                    <input type="number" name="latitude" id="" placeholder="latitude" step="0.00001" defaultValue={formData.latitude} className={err.latitude ? styles.error : ''} />

                    <input type="text" name="image" id="" placeholder="image" defaultValue={formData.image} className={err.image ? styles.error : ''} />

                    <input type="text" name="description" id="" placeholder="description" defaultValue={formData.description} className={err.description ? styles.error : ''} />

                    <button type="submit">{nameOfButton}</button>

                </form>
            </div>
        </>
    )
}
export default Add