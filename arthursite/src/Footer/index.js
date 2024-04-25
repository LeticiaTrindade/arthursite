import React from 'react';
import './style.css';
import Profile from '../Images/profile.png';

function Footer() {
    return (
        <div>
            <footer className='text-center'>  
                <div className="contact d-flex flex-row justify-content-around">
                    <div className='d-flex justify-content-around' >
                        <div>
                            <p>
                                ENTRE EM<br /><b>CONTATO</b>
                            </p>
                        </div>
                        <div>
                            <button className='footer-button'>Fale comigo</button>
                        </div>
                    </div>
                </div>


                <div className="credit text-center">
                    <p> Desenvolvido por: Letícia Trindade ® 2024</p>
                    <p>Todos os direitos reservados</p>
                </div>

            </footer>
        </div>
    );
}

export default Footer;
