import {useMediaQuery} from 'react-responsive'



function LandingPage (){


    const isDesktop = useMediaQuery({
        query: '(min-width: 1224px)'
      })

    return(
        <div id="landing-page-container">
            <div id="bkgr-circle"></div>
            {isDesktop ? 
                <h1>Lindsay Taylor</h1> 
                : <div id="landing-name">
                    <h1>Lindsay</h1>
                    <h1>Taylor</h1>
                    </div>}
        </div>
    )
}

export default LandingPage;