import { useEffect, useRef, useState } from 'react';

function GaleryScroll() {
    useEffect(() => {
        const leaves = document.querySelectorAll('.leaf img');
        leaves.forEach(leaf => {
            leaf.addEventListener('animationend', () => {
                leaf.style.display = 'none';
            });
        });
    }, []);
    return (
        <div className='welcome'>
            <div className='leaf leaf1'><img src="http://www.pngmart.com/files/1/Fall-Autumn-Leaves-Transparent-PNG.png" height="75px" width="75px"></img></div>
            <div className='leaf leaf2'><img src="http://www.pngmart.com/files/1/Transparent-Autumn-Leaves-Falling-PNG.png" height="75px" width="75px"></img></div>
            <div className='leaf leaf3'><img src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Pictures-Collage-PNG.png" height="75px" width="75px"></img></div>
            <div className='leaf leaf4'><img src="http://www.pngmart.com/files/1/Green-Leaves-PNG-File.png" height="75px" width="75px"></img></div>
            <h1>Explore the horizont and escape reallity</h1>

            <div className='sigths'>
                <p>Sights you can visit</p>
                <div className='sigthsScroll' data-mouse-down-at="0" data-prev-percentage="0">
                    {/*TODO generate img from dataBase*/}
                    <img src="/rilski.jpg" alt="rilski" />
                </div>
            </div>
        </div>
    )
}

export default GaleryScroll