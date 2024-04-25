import React from 'react';
import './style.css';
import servico1 from '../Images/servico1.png';
import servico2 from '../Images/servico2.png';
import servico3 from '../Images/servico3.png';
import servico4 from '../Images/servico4.png';
import servico5 from '../Images/servico5.png';
import servico6 from '../Images/servico6.png';

function Services() {
    return (
        <div className='home container d-flex'>

            <div className='left d-flex flex-column justify-content-around col-md-5'>
                <h1 className='text-uppercase'>Conheca nosso <b>servicos</b></h1>
                <h3>Outro texto motivacional que complementa o de cima</h3>
                <button className='home-button'>Fale comigo</button>
            </div>

            <div className="right ">
                <div class="row justify-content-center align-items-center">
                    <div class="col-md-4 col-6">
                        <img src={servico1} alt="Serviço 1" class="service img-fluid" />
                    </div>
                    <div class="col-md-4 col-6">
                        <img src={servico2} alt="Serviço 2" class="service img-fluid" />
                    </div>
                    <div class="col-md-4 col-6">
                        <img src={servico3} alt="Serviço 3" class="service img-fluid" />
                    </div>
                    <div class="col-md-4 col-6">
                        <img src={servico4} alt="Serviço 4" class="service img-fluid" />
                    </div>
                    <div class="col-md-4 col-6">
                        <img src={servico5} alt="Serviço 5" class="service img-fluid" />
                    </div>
                    <div class="col-md-4 col-6">
                        <img src={servico6} alt="Serviço 6" class="service img-fluid" />
                    </div>

                </div>

            </div>



        </div>
    );
}

export default Services;
