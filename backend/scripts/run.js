const main = async () => {
  const [owner, randomUser] = await hre.ethers.getSigners();

  const wavePortalContractFactory = await hre.ethers.getContractFactory(
    "WavePortal"
  );

  const wavePortalContract = await wavePortalContractFactory.deploy();

  await wavePortalContract.deployed();

  console.log(`WavePortal contract address: ${wavePortalContract.address}`);
  console.log(`WavePortal contract deployed by: ${owner}\n`);

  await wavePortalContract.getTotalWaves();

  console.log(`\nStep 2: Waving at ourself`);
  let waveTxn = await wavePortalContract.wave(
    "Waving at ourselves to check how things are going on"
  );
  await waveTxn.wait();

  await wavePortalContract.getTotalWaves();

  console.log(`\nStep 3: Waving at ourself`);

  waveTxn = await wavePortalContract
    .connect(randomUser)
    .wave("Random user waved at you, something good is happening");

  await waveTxn.wait();

  await wavePortalContract.getTotalWaves();

  let allWaves = await wavePortalContract.getAllWaves();
  console.log(allWaves);
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
