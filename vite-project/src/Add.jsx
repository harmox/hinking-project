function Add() {
    return (

        <>
            <div className="formContainer">

                <form className="addSigth">

                    <label for="name"></label>
                    <input type="text" name="name" id="" placeholder="name" class="name" />

                    <label for="elevation"></label>
                    <input type="number" name="elevation" id="" placeholder="elevation in meters" class="elevation" />

                    <label for="distance"></label>
                    <input type="number" name="distance" id="" placeholder="distance one way in km" class="distance" step="0.1" />

                    <label for="distance"></label>
                    <input type="number" name="time" id="" placeholder="ascend time in hours" class="time"/>

                    <label for="image"></label>
                    <input type="text" name="image" id="" placeholder="image" class="image" />

                    <label for=""></label>
                    <input type="text" name="password" id="" placeholder="description" class="pass" /> 

                    <button type="submit">Add sigth</button>

                </form>
            </div>
        </>
    )
}
export default Add