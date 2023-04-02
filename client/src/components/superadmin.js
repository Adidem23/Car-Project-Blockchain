import React from 'react';
import './superadmin.css';
import '../App.css';
import { ethers } from 'ethers';
import abi from '../abi/project.json';



const superadmin = () => {


	const AddAdminprocess = async (e) => {
		e.preventDefault();
		const { ethereum } = window;
		const provider = new ethers.providers.Web3Provider(ethereum);
		const Signers = provider.getSigner();
		const ContractAdd = "0x1f3e5a0cfc6801fab6b4e3d6eee3df28729b46a9";
		const contractabi = abi.abi;

		const contractinstance = new ethers.Contract(ContractAdd, contractabi, Signers);

		const adminname = document.getElementById("name").value;
		const adminage = document.getElementById("age").value;
		const adminaddress = document.getElementById("address").value;
		const admincity = document.getElementById("city").value;

		const addadmin = await contractinstance.Addadmin(adminname, adminage, adminaddress, admincity);

		if (addadmin) {
			alert("Admin added Successfully");
			const noofadminsadded = await contractinstance.no_of_admins();
			alert(noofadminsadded);
		}


	}

	return (
		<>
			
			<div className='App2'>
				<form className="form345">
					<input placeholder="Enter Admin Name" className="input34" type="text" id="name" required />
					<input placeholder="Enter Admin Age" className="input34" type="number" id="age" required />
					<input placeholder="Enter Admin Address" className="input34" type="text" id="address" required />
					<input placeholder="Enter Admin City" className="input34" type="text" id="city" required />
					<button id="loginBtn" className="loginBtn" onClick={AddAdminprocess}> Admin</button>
					
				</form>
			</div>
		</>
	)
}

export default superadmin
