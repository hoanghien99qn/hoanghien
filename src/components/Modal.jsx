import React, { useEffect, useState } from 'react';

function Modal(props) {
    const [active, setActive] = useState(false)
    let { video, toggleVideo } = props
    if (video === undefined) {
        video = ""
    }

    useEffect(() => {
        setActive(props.active)
    }, [props.active])

    return (
        <div id={props.id} className={`modal ${active ? 'active' : ''}`} onClick={() => toggleVideo(active)}>
            <div className={`modal_content ${active ? 'active' : ''}`}>
                <iframe
                    src={active ? `https://www.youtube.com/embed/${video.key}?autoplay=1` : ""}
                    width="80%" height="500px" title="trailer"
                ></iframe>
            </div>
        </div>
    );
}

export default Modal;