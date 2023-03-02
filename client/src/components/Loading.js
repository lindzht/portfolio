import hand from '../images/hand.png';

function Loading () {
    return(
        <div id="load-container">
            <h1>Loading</h1>
            <img src={hand} alt="Loading" />
        </div>
    )
}

export default Loading;