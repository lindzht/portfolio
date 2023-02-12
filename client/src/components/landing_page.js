import { useMediaQuery } from 'react-responsive'
import NavLinks from './nav_links';


function LandingPage() {


    const isDesktop = useMediaQuery({
        query: '(min-width: 1224px)'
    })

    return (
        <>
            <NavLinks />
            <div id="landing-page-container">
                {/* <div id="bkgr-overlay"></div>
                <div id="bkgr-circle"></div> */}
                {isDesktop ?
                    <h1>Lindsay Taylor</h1>
                    : <div id="landing-name">
                        <h1>Lindsay</h1>
                        <h1>Taylor</h1>
                    </div>}
            </div>
        </>
    )
}

export default LandingPage;