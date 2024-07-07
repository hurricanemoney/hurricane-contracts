import * as hardhat from "hardhat";
import { ethers } from "hardhat";
import { Hurricane } from "../typechain-types/contracts";

async function main() {

  const FEE = 10_000;

  const [owner] = await ethers.getSigners();
  console.log(`📄 Using account: ${owner.address}`);

  // Declare Factory
  const hurricaneFactory = await ethers.getContractFactory("Hurricane");

  // Attach Hurricane
  const hurricane = hurricaneFactory.attach("0xB632e0Ec636e19cFfD42642b9b1D74472E38887f") as Hurricane;
  console.log(`🔨 Attached Hurricane at: ${hurricane.address}`);

  // Set Fee
  await hurricane.setFee(FEE);
  console.log(`🔧 Fee set to: ${FEE / 100}%`);

  // End
  console.log("✅ Done");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
