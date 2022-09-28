import Logo from '../../Utils/img/logo2.svg';

export default function Navtop(){
    return <>
        <div className="navtop">
            <div className="navtop__content">
                <div className="navtop__content__img">
                    <img className='navtop__content__img--tm' src={Logo} alt="Logo"></img>
                </div>
            </div>
        </div>
    </>
} 