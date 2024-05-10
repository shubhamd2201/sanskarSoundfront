
import logo from '../images/saanskar-sound-logo.png';




const Header = ()=>{
    return(<>
    <header>
        <div className="header_otr">
            <div className="wrapper">
                <div className="header-row row">
                    <div className="logo">
                        <div className="logo-img">
                            <img src={logo} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    </>);
}

export default Header;