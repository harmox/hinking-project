import { useEffect, useRef, useState } from 'react';
import { homeGet } from '../../utils/api.js';
import Card from './Card.jsx';
import styles from "../../paragraphs.module.css"
import { ClipLoader } from 'react-spinners'; 

function Home({setError}) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async function Gal() {
            try {
                const toShow = await homeGet();
                const data = await toShow.json();
                setData(data);
            } catch (error) {
               setError(`Error with fetching data ${err.message}`)
            } finally {
                setLoading(false);
            }
        })();
    }, []);
    return (
        <div className='welcome'>
            <h1>Escape reallity and explore the horizont</h1>

            <div className='sigths'>
                <h2>Most visited</h2>
                <div className='sigthsScroll' data-mouse-down-at="0" data-prev-percentage="0">
                    {loading ? (
                        <div className="spinner-container">
                            <ClipLoader color="#123abc" loading={loading} size={400} /> {/* Spinner */}
                        </div>
                    ) : (
                        data.map(e => <Card hike={e} key={e._id} scale="300" width="500" />)
                    )}
                </div>
                <p className={styles.p}><b>Bulgaria</b>is a hiking paradise. This relatively small country abounds in mountains – big and small, high and not so high. <br />In the alpine type mountains, such as the <b>Rila</b> Mountains and <b>Pirin</b> Mountains, pyramidal peaks and steep aretes divide magnificent corries with cobalt blue glacial lakes. Older mountains such as the <b>Stara Planina</b> Mountains (the Balkan Range) and <b>Rhodopes</b> Mountains, are a mixture of gently rolling hills and mighty rounded peaks, topped with rocky wreaths and rugs of flowers and green grass. <br /> Slopes are densely forested with oak, beech, spruce and pine species.
                    A vast network of trails exists in the Bulgarian mountains and numerous mountain huts and hotels, and family guesthouses are waiting for you to offer their hospitality and their delicious home made food.</p>
            </div>
        </div>
    )
}

export default Home