import * as hardhat from "hardhat";
import { ethers } from "hardhat";
import { Hurricane } from "../typechain-types/contracts";

async function main() {

  const VERIFY = false;

  const [owner] = await ethers.getSigners();
  console.log(`📄 Deploying contracts with the account: ${owner.address}`);

  // Declare Factory
  const hurricaneFactory = await ethers.getContractFactory("Hurricane");

  // Deploy Hurricane
  const hurricane = await hurricaneFactory.deploy() as Hurricane;
  await hurricane.deployed();
  console.log(`🔨 Deployed Hurricane at: ${hurricane.address}`);

  // Verify Hurricane
  if (VERIFY) {
    await hardhat.run("verify:verify", {
      address: hurricane.address,
      constructorArguments: []
    });
  }

  // End
  console.log("✅ Done");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
