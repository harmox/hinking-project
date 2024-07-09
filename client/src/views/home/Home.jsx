import { useEffect, useRef, useState } from 'react';
import { homeGet } from '../../utils/api.js';
import Card from './HomeCard.jsx';
import styles from "../../paragraphs.module.css"

function Home() {
    const [data, setData] = useState([])
    useEffect(() => {
        const leaves = document.querySelectorAll('.leaf img');
        leaves.forEach(leaf => {
            leaf.addEventListener('animationend', () => {
                leaf.style.display = 'none';
            });

        });
        (async function Gal() {
            const toShow = await homeGet()
            const data = await toShow.json()
            console.log(data)
            setData(data)
        })();
    }, []);
    return (
        //TODO
        <div className='welcome'>
            <div className='leaf leaf1'><img src="https://pngimg.com/d/green_leaves_PNG3678.png" height="75px" width="75px"></img></div>
            <div className='leaf leaf2'><img src="https://freepngtransparent.com/wp-content/uploads/2023/03/Sun-Png-210.png" height="75px" width="75px"></img></div>
            <div className='leaf leaf3'><img src="https://cdn.pixabay.com/photo/2013/07/12/16/01/maple-150741_640.png" height="75px" width="75px"></img></div>
            <div className='leaf leaf4'><img src="https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Winter-PNG/Blue_Snowflake_PNG_Transparent_Clipart.png?m=1637310419" height="75px" width="75px"></img></div>
            <h1>Escape reallity and explore the horizont</h1>

            <div className='sigths'>
                <h2>Most visited</h2>
                <div className='sigthsScroll' data-mouse-down-at="0" data-prev-percentage="0">
                    {/*TODO generate img from dataBase*/}
                    {data.map(e => <Card hike={e} />)}
                </div>
                <p className={styles.p}><b>Bulgaria</b>is a hiking paradise. This relatively small country abounds in mountains – big and small, high and not so high. <br />In the alpine type mountains, such as the <b>Rila</b> Mountains and <b>Pirin</b> Mountains, pyramidal peaks and steep aretes divide magnificent corries with cobalt blue glacial lakes. Older mountains such as the <b>Stara Planina</b> Mountains (the Balkan Range) and <b>Rhodopes</b> Mountains, are a mixture of gently rolling hills and mighty rounded peaks, topped with rocky wreaths and rugs of flowers and green grass. <br /> Slopes are densely forested with oak, beech, spruce and pine species.
                    A vast network of trails exists in the Bulgarian mountains and numerous mountain huts and hotels, and family guesthouses are waiting for you to offer their hospitality and their delicious home made food.</p>
            </div>
        </div>
    )
}

export default Home