import Fondoimg from '../../Utils/img/fondo.svg'


export default function Header() {
    return <>
        <div className="head">
            <div className="head__left">
                <div className="head__left--title">
                    Lorem Ipsum
                </div>
                <div className='head__left--subtitle'>
                    What is Lorem Ipsum?
                </div>
                <div className='head__left__card'>
                    <div className='head__left__card__content'>
                        <div className='head__left__card__content--icon'>
                            <i className="lni lni-apple-music"></i>
                        </div>
                    </div>
                    <div className='head__left__card__content'>
                        <div className='head__left__card__content--icon'>
                            <i className="lni lni-spotify-original"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="head__right">
                <img className='head__right--img' src={Fondoimg} alt="Imagen"></img>
            </div>
        </div>
    </>
}