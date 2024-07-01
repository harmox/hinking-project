function Details() {
    function onSubmit(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        const { date } = Object.fromEntries(formData)
        console.log(date)
    }
    //TODO check if owner 
    return (<>
        <div className="details">

            <div className="containerDetails">
                <h3>NAME HERE</h3>
                <img src="/rilski.jpg" alt="rilski" height="200" />
                <h3>Elevation: </h3>
                <h3>Distance in kilometers: </h3>
                <h3>Ascend time:
                    Ascend time is in hours and its for one way only!
                </h3>
                <p className="description">asdasdasdadsa</p>
                <div>
                    <button>Interested</button>
                    <button>Rate</button>
                </div>
                <div className="owner">
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
            <div className="">
                <form onSubmit={onSubmit} >

                    <h4>Date Of Birth:
                        <input type="date"
                            id="Test_DatetimeLocal" name="date" />
                    </h4>
                    <button>Edit</button>
                </form>
            </div>
        </div >
    </>)
}
export default Details