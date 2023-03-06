


function Video({ demo }) {

    return (
        <div>
            <iframe title="test" src={demo} frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen >
            </iframe>
        </div>
    )
}

export default Video;


