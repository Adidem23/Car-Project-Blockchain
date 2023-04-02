//SPDX-License-Identifier:MIT

pragma solidity ^0.8.10;

contract project {
    address public superadminaddress;
    string public supradminname;
    uint256 public noofcarsadmin;

    struct Admin {
        string name;
        uint256 age;
        address adminaddress;
        string city;
        string role;
    }

    struct Owner {
        string ownername;
        string ownercarsname;
        address owneraddress;
        string role;
        address adminaddressowner;
    }

    uint256 public no_of_admins;
    uint256 public no_of_owners;

    mapping(address => Admin) public admins;
    mapping(address => Owner) public owners;
    mapping(address=>mapping(string=>Owner)) public admin_owner;

    constructor() {
        superadminaddress = msg.sender;
        supradminname = "Aditya Suryawnashi";
    }

    modifier OnlySuperAdmin() {
        require(
            msg.sender == superadminaddress,
            "You must be superadmin to add admin"
        );
        _;
    }

    function Addadmin(
        string memory _adminname,
        uint256 _adminage,
        address _adminaddressofcontract,
        string memory _admincity
    ) external OnlySuperAdmin {
        Admin memory Admins = Admin(
            _adminname,
            _adminage,
            _adminaddressofcontract,
            _admincity,
            "Admin"
        );
        admins[_adminaddressofcontract] = Admins;
        no_of_admins++;
    }

    modifier checkAdmin() {
        require(
            admins[msg.sender].adminaddress == msg.sender,
            "You Must Be Admin To Add Owner"
        );
        _;
    }

    function addowner(
        string memory _ownernamep,
        string memory _ownercarsp,
        address _owneraddressp
    ) external checkAdmin {
        Owner memory Owners = Owner(
            _ownernamep,
            _ownercarsp,
            _owneraddressp,
            "Owner",
            admins[msg.sender].adminaddress
        );
        owners[_owneraddressp] = Owners;
        admin_owner[admins[msg.sender].adminaddress][_ownernamep]=Owners;
        no_of_owners++;
    }

   
}