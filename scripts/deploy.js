const hre = require("hardhat");

async function main() {

  const contract = await hre.ethers.getContractFactory("project");

  const del = await contract.deploy();

  await del.deployed();

  console.log("The address of contract: " + del.address);

//  contract Address:  0x5FbDB2315678afecb367f032d93F642f64180aa3


}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

