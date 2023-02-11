import {useMediaQuery} from 'react-responsive'



function LandingPage (){


    const isDesktop = useMediaQuery({
        query: '(min-width: 1224px)'
      })

    return(
        <div id="landing-page-container">
           {isDesktop ? <h1>Lindsay Taylor</h1> : <><h1>Lindsay</h1> <br /> <h1>Taylor</h1></>}
        </div>
    )
}

export default LandingPage;