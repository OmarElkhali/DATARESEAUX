import React from 'react'
import './BureauEtude.css'
import BureauEtudeImg from '../../assets/agrege.png'

const Distributeur = () => {
return (
    <section className="BEtude-warmp">
        <div className="BEtude-Container">
            <div className="BEtude4">
                <div className='BEtude-title'>
                    <h1>DISTRIBUTEUR <span className="data"> AGRÉÉ</span></h1>
                </div>
                <h5 className="kteba"><span className="limoni">DATARESEAUX</span> a acquis la confiance de ses clients grâce à son travail irréprochable et <br/> <br/> de sa qualité alliant : innovation, performance et durabilité. Ainsi elle est agréée par:</h5>
            </div>
            <div className="BEtudeImg4">
                <img src={BureauEtudeImg} alt="BureauEtudeImg" />
            </div>
        </div>
    </section>
    )
}

export default Distributeur