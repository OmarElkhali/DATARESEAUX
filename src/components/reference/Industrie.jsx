import React from 'react'
import './Reference.css'
import indulow from '../../assets/ref1.png'

const Industrie = () => {
return (
    <section className="REF-warmp">
        <div className='Serv-title'>
            <h1><span className="data">NOS</span><span className="reseaux">REFERENCE</span></h1>
        </div>
        <div className="REF-Container">
                <div className='REF-title'>
                    <h1>INDUS<span className="data">TRIE</span></h1>
                </div>
            <div className="REFIMG">
                <img src={indulow} alt="BureauEtudeImg" />
            </div>
        </div>
    </section>
)
}

export default Industrie