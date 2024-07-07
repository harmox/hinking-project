import { useState } from 'react'

function Search() {
    function buttonClick(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        const { search } = Object.fromEntries(formData)
        //TODO get data and reload

        console.log(search)
        if (!search) {
            return
        }

    }
    return (
        //TODO filter results
        <>
            <div className="catalog">
                <form action="" className="searchForm" onSubmit={buttonClick}>
                    <input type="text" name="search" id="searchParam" placeholder="search" className="search" />
                    <button type="submit" id="searchButton">search</button>
                </form>

                <div className='card'>

                    <h3> place name</h3>
                    <img src="/rilski.jpg" alt="rilski" height="200" />
                    <a href="/details/"><button>Details</button></a>
                </div>
            </div>
        </>
    )
}
export default Search