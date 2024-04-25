import React from 'react';
import './style.css';
import insta1 from '../Images/insta1.png';
import insta2 from '../Images/insta2.png';
import insta3 from '../Images/insta3.png';
import insta4 from '../Images/insta4.png';
import insta5 from '../Images/insta5.png';

function Slides() {

    return (
        <div className='d-flex'>
            <div id="carouselExampleInterval" className="carousel slide  style={{ height: '800px' }}" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <a href='https://www.instagram.com/vinnypsd/'>
                        <div className="carousel-item active" data-bs-interval="10000">
                            <div className="row">
                                <div className="col">
                                    <img src={insta1} className="d-block w-100" alt="..." />
                                </div>
                                <div className="col">
                                    <img src={insta2} className="d-block w-100" alt="..." />
                                </div>
                                <div className="col">
                                    <img src={insta3} className="d-block w-100" alt="..." />
                                </div>
                                <div className="col">
                                    <img src={insta4} className="d-block w-100" alt="..." />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <div className="row">
                                <div className="col">
                                    <img src={insta5} className="d-block w-100" alt="..." />
                                </div>
                                <div className="col">
                                    <img src={insta1} className="d-block w-100" alt="..." />
                                </div>
                                <div className="col">
                                    <img src={insta2} className="d-block w-100" alt="..." />
                                </div>
                                <div className="col">
                                    <img src={insta3} className="d-block w-100" alt="..." />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col">
                                    <img src={insta4} className="d-block w-100" alt="..." />
                                </div>
                                <div className="col">
                                    <img src={insta5} className="d-block w-100" alt="..." />
                                </div>
                                <div className="col">
                                    <img src={insta1} className="d-block w-100" alt="..." />
                                </div>
                                <div className="col">
                                    <img src={insta2} className="d-block w-100" alt="..." />
                                </div>
                             
                            </div>
                        </div>
                    </a>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div >
    );
}

export default Slides;
