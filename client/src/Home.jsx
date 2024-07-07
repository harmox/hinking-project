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
        //TODO
        <div className='welcome'>
            <div className='leaf leaf1'><img src="https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Winter-PNG/Blue_Snowflake_PNG_Transparent_Clipart.png?m=1637310419" height="75px" width="75px"></img></div>
            <div className='leaf leaf2'><img src="https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Winter-PNG/Blue_Snowflake_PNG_Transparent_Clipart.png?m=1637310419" height="75px" width="75px"></img></div>
            <div className='leaf leaf3'><img src="https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Winter-PNG/Blue_Snowflake_PNG_Transparent_Clipart.png?m=1637310419" height="75px" width="75px"></img></div>
            <div className='leaf leaf4'><img src="https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Winter-PNG/Blue_Snowflake_PNG_Transparent_Clipart.png?m=1637310419" height="75px" width="75px"></img></div>
            <h1>Explore the horizont and escape reallity</h1>

            <div className='sigths'>
                <h2>Best rating sigths</h2>
                <div className='sigthsScroll' data-mouse-down-at="0" data-prev-percentage="0">
                    {/*TODO generate img from dataBase*/}

                    <div className='card'>
                        <h3> place name</h3>
                        <img src="/rilski.jpg" alt="rilski" height="300" />
                        <a href="/details/"><button>Details</button></a>
                    </div>
                    <div className='card'>
                        <h3> place name</h3>
                        <img src="/rilski.jpg" alt="rilski" height="300" />
                        <button>Details</button>

                    </div>
                    <div className='card'>
                        <h3> place name</h3>
                        <img src="/rilski.jpg" alt="rilski" height="300" />
                        <button>Details</button>
                    </div>


                </div>
                <p><b>Bulgaria</b>is a hiking paradise. This relatively small country abounds in mountains – big and small, high and not so high. <br />In the alpine type mountains, such as the <b>Rila</b> Mountains and <b>Pirin</b> Mountains, pyramidal peaks and steep aretes divide magnificent corries with cobalt blue glacial lakes. Older mountains such as the <b>Stara Planina</b> Mountains (the Balkan Range) and <b>Rhodopes</b> Mountains, are a mixture of gently rolling hills and mighty rounded peaks, topped with rocky wreaths and rugs of flowers and green grass. <br /> Slopes are densely forested with oak, beech, spruce and pine species.
                    A vast network of trails exists in the Bulgarian mountains and numerous mountain huts and hotels, and family guesthouses are waiting for you to offer their hospitality and their delicious home made food.</p>
            </div>
        </div>
    )
}

export default GaleryScroll