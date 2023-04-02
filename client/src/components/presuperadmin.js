import React from 'react'
import './css/css/presuperadmin.css';
import '../App.css';
import su from './css/css/Oksuperadmin.png';
import github from './css/css/Github2.png';
import Linkedin from './css/css/icons8-linkedin-circled-200.png';
import instagram from './css/css/icons8-instagram-200.png';
import Gototop from './Gototop';
import { ContactUs } from './ContactUs';
import { ethers } from 'ethers';
import abi from '../abi/project.json';
import user from './css/css/masked man.png';
import close from './css/css/cancle.png';
import AOS from 'aos';
import Wobble from 'react-reveal/Wobble';




const presuperadmin = () => {

    const scroll456 = () => {
        AOS.init();
    }

    const addadmin = async () => {

        const { ethereum } = window;

        const account = await ethereum.request({ method: "eth_requestAccounts" });
        const realaccount = account.toString();

        const provider = new ethers.providers.Web3Provider(ethereum);
        const contractaddress = "0x1f3e5a0cfc6801fab6b4e3d6eee3df28729b46a9";
        const abicontract = abi.abi;
        const signers = provider.getSigner();

        const newcontractinstace = new ethers.Contract(contractaddress, abicontract, signers);

        const superadminaddresspre = await newcontractinstace.superadminaddress();

        if (superadminaddresspre.toLowerCase() === realaccount.toLowerCase()) {
            const span = document.getElementById("span");
            const tick = document.getElementById("tick");
            tick.setAttribute("src", `${su}`);
            span.style.color = "green";
            span.innerText = "SuperAdmin";
            setTimeout(() => {
                window.open("/superadmin", "_self");
            }, 1000);

        } else {
            alert("You Must Be Superadmin To Add Admin");
            const tick = document.getElementById("tick");
            tick.setAttribute("src", `${close}`);
            const span = document.getElementById("span");
            span.style.color = "red";
            span.innerText = "Not SuperAdmin";
        }

    }


    const getadmin = async () => {


        const { ethereum } = window;

        const account = await ethereum.request({ method: "eth_requestAccounts" });
        const realaccount = account.toString();

        const provider = new ethers.providers.Web3Provider(ethereum);
        const contractaddress = "0x1f3e5a0cfc6801fab6b4e3d6eee3df28729b46a9";
        const abicontract = abi.abi;
        const signers = provider.getSigner();

        const newcontractinstace = new ethers.Contract(contractaddress, abicontract, signers);

        const superadminaddresspre = await newcontractinstace.superadminaddress();

        if (superadminaddresspre.toLowerCase() === realaccount.toLowerCase()) {
            setTimeout(() => {
                window.open("/getsuperadmins", "_self");
            }, 1000);

        } else {
            alert("You Must Be Superadmin To get Admin");
        }



    }


    return (
        <div>
            <>
                <div className="header_section">
                    <div className="header_main">
                        <div className="container-fluid">
                            <div className="logo"><a><img src={user} id='tick' /></a></div>
                        </div>
                    </div>
                    <div className="banner_section layout_padding">
                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="container">
                                        <h3 className="banner_taital">You Are <br /> <span id='span'>User</span></h3>
                                        <div className="read_bt"><a className='call' to="/superadmin" onClick={addadmin}>Add Admin</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="services_section layout_padding" onMouseOver={scroll456}>
                    <div className="container">
                        <div className="services_section_2">
                            <div className="row">
                                <div className="banner_section layout_padding">
                                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <div className="container">
                                                    <h3 className="banner_taital" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500"><span id='get'   >Get</span><span id='span'>Admins</span></h3>
                                                    <div className="read_bt"><a className='call' to="/getsuperadmins" onClick={getadmin} data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1500"   >Get Admins</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blog_section layout_padding">
                    <div className="container">
                        <h3 className="banner_taital" data-aos="flip-up" data-aos-mirror="true"  data-aos-easing="ease-out-cubic" data-aos-duration="2000"><span>Check MY</span> <span >Profile 😎</span></h3>
                        <div className="logo"><a href='https://github.com/Adidem23'><img className='github' src={github} /></a></div>
                        <Wobble Left><h3 className="banner_taital">Github</h3></Wobble>
                       

                        <div className="logo"><a href='https://www.linkedin.com/in/aditya-suryawanshi-945145235/'><img src={Linkedin} /></a></div>
                        <h3 className="banner_taital">LinkedIn</h3>

                        <div className="logo"><a href='https://www.instagram.com/adityasuryawanshi23456/'><img src={instagram} /></a></div>
                        <h3 className="banner_taital">Instagram</h3>
                    </div>
                </div>

                <div className="footer_section layout_padding">
                    <h3 className="client_taital">Rate Us ??</h3>
                    <br />
                    <div className='Rate2 client'><span id='Good'>😡</span> <span id='Bad'>🤢</span> <span id='Excellent'>😎</span> <span id='Average'> 😑 </span>  </div>

                    <h3 className="client_taital">ContactUs</h3>

                    <ContactUs />

                </div>
                <div className="copyright_section">
                    <div className="mazacontainer">
                        <p className="copyright_text">AutoXchange: Decentralized Car Platform</p>
                    </div>
                </div>
            </>
            <Gototop />
        </div>
    )
}

export default presuperadmin
