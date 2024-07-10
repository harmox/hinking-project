import { useState } from "react"
import styles from "../errors.module.css"
import { add } from "../utils/api.js"

function Add() {
    const [err, setErr] = useState({})
    async function onSubmit(e) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const { name, distance, time, longitude, latitude, image, description } = Object.fromEntries(formData)
        const errors = {}
        if (er(name)) {
            errors.name = true
        }
        errors.name = er(name, 3)
        errors.distance = er(distance)
        errors.time = er(time)
        errors.longitude = er(longitude)
        errors.latitude = er(latitude)
        errors.image = er(image)
        errors.description = er(description, 20)


        if (Object.values(errors).includes(true)) {
            setErr(errors)
        } else {
            setErr({})
            console.log(localStorage.user)
            const data = await add({ name, distance, time, longitude, latitude, image, description, owner: localStorage.user })
        }

    }
    function er(it, len = 1, max = 350) {
        if (!it || it.length < len || it.length > 350) {
            return true
        }
    }

    return (
        <>
            <div className="formContainer">

                <form className="addSigth" onSubmit={onSubmit}>

                    <input type="text" name="name" id="" placeholder="name" className={err.name ? styles.error : ''} />

                    <input type="number" name="distance" id="" placeholder="distance one way in km" className={err.distance ? styles.error : ''} step="0.1" />

                    <input type="number" name="time" id="" placeholder="ascend time in hours" className={err.time ? styles.error : ''} />

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