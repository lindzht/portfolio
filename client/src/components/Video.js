


function Video({ demo }) {

    return (
        <div id="video-container">
            <iframe title="test" src={demo} frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen id="video">
            </iframe>
        </div>
    )
}

export default Video;


