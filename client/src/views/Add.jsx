function Add() {
    return (

        <>
            <div className="formContainer">

                <form className="addSigth">

                    <input type="text" name="name" id="" placeholder="name" className="name" />

                    <input type="number" name="elevation" id="" placeholder="elevation in meters" className="elevation" />

                    <input type="number" name="distance" id="" placeholder="distance one way in km" className="distance" step="0.1" />

                    <input type="number" name="time" id="" placeholder="ascend time in hours" className="time"/>

                    <input type="number" name="longitude" id="" placeholder="longitude" className="longitude" step="0.00001"/>

                    <input type="number" name="latitude" id="" placeholder="latitude" className="latitude"step="0.00001"/>

                    <input type="text" name="image" id="" placeholder="image" className="image" />

                    <input type="text" name="description" id="" placeholder="description" className="description" /> 

                    <button type="submit">Add sigth</button>

                </form>
            </div>
        </>
    )
}
export default Add