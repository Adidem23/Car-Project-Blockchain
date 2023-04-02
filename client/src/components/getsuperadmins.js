import React from 'react';
import { ethers } from 'ethers';
import './superadmin.css';
import abi from '../abi/project.json';

const getsuperadmins = () => {

    const GetAdminprocess = async (e) => {
        e.preventDefault();
        const { ethereum } = window;
        const provider = new ethers.providers.Web3Provider(ethereum);
        const Signers = provider.getSigner();
        const ContractAdd = "0x1f3e5a0cfc6801fab6b4e3d6eee3df28729b46a9";
        const superadminAdd = document.getElementById("getadminaddress").value;
        const contractabi = abi.abi;

        const contractinstance = new ethers.Contract(ContractAdd, contractabi, Signers);

        const admins = await contractinstance.admins(superadminAdd);

        const newdiv = document.getElementById("hr23");
        const newdivname = document.getElementById("hr23name");
        const newdivage = document.getElementById("hr23age");
        const newdivadd = document.getElementById("hr23add");
        const newdivcity = document.getElementById("hr23city");
        const newdivrole = document.getElementById("hr23role");

        newdiv.style.display="block";
        const newstringadmin = admins.toString();
        const newstringadmin2=newstringadmin.split(",");
        
        newdivname.innerText=newstringadmin2[0];
        newdivage.innerText=newstringadmin2[1];
        newdivadd.innerText=newstringadmin2[2].slice(0,13);
        newdivcity.innerText=newstringadmin2[3];
        newdivrole.innerText=newstringadmin2[4];

    }

    return (
        <div className='App2'>
            <form className='form345'>
                <input placeholder="Enter Admin Address" className="input34" type="text" id="getadminaddress" />
                <button id="GetBtn" className="GetBtn" onClick={GetAdminprocess}>Get Admin</button>
            </form>

            <h4 className='App2'>
                Admins
            </h4>

            <hr id='line' />

            <div id='hr23'>
            
            <span>AdminName: <span id='hr23name'></span></span>
            <br />
            <span>AdminAge: <span id='hr23age'></span></span>
            <br />
            <span>AdminAddress: <span id='hr23add'></span></span>
            <br />
            <span>AdminCity: <span id='hr23city'></span></span>
            <br />
            <span>Role: <span id='hr23role'></span></span>
            
            </div>



        </div>
    )
}

export default getsuperadmins
