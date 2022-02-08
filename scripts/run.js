const main = async () => {
  const [owner] = await hre.ethers.getSigners();

  const wavePortalContractFactory = await hre.ethers.getContractFactory(
    "WavePortal"
  );

  const wavePortalContract = await wavePortalContractFactory.deploy();

  await wavePortalContract.deployed();

  console.log(`WavePortal contract address: ${wavePortalContract.address}`);
  console.log(`WavePortal contract deployed by: ${owner}`);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
