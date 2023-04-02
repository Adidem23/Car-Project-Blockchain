import React from 'react'
import './cards.css';
import AOS from 'aos';
import {Link} from 'react-router-dom';



const cards = () => {

    return (
        <div>
            <div className="container3">
                <div className="card" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500">
                    <div className="box">
                        <div className="content">
                            <h2>01</h2>
                            <h3>SuperAdmin</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Dolorum exercitationem explicabo, quae eaque
                                fuga quia adipisci quo? Corporis, in nihil.
                            </p>
                           <Link to="/presuperadmin">Add Admins</Link> 
                        </div>
                    </div>
                </div>
                <div className="card" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1500">
                    <div className="box">
                        <div className="content">
                            <h2>02</h2>
                            <h3>Card Two</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Dolorum exercitationem explicabo, quae eaque
                                fuga quia adipisci quo? Corporis, in nihil.
                            </p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="card" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                    <div className="box">
                        <div className="content">
                            <h2>03</h2>
                            <h3>Card Three</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Dolorum exercitationem explicabo, quae eaque
                                fuga quia adipisci quo? Corporis, in nihil.
                            </p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default cards
