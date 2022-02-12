const main = async () => {
  const [owner, randomUser] = await hre.ethers.getSigners();

  const wavePortalContractFactory = await hre.ethers.getContractFactory(
    "WavePortal"
  );

  const wavePortalContract = await wavePortalContractFactory.deploy({
    value: hre.ethers.utils.parseEther("0.005"),
  });

  await wavePortalContract.deployed();

  console.log(`WavePortal contract address: ${wavePortalContract.address}`);
  console.log(`WavePortal contract deployed by: ${owner}\n`);

  let contractBalance = await hre.ethers.provider.getBalance(
    wavePortalContract.address
  );

  console.log(
    "Contract balance : ",
    hre.ethers.utils.formatEther(contractBalance)
  );

  await wavePortalContract.getTotalWaves();

  console.log(`\nStep 2: Waving at ourself`);
  let waveTxn = await wavePortalContract.wave(
    "Waving at ourselves to check how things are going on"
  );
  await waveTxn.wait();

  await wavePortalContract.getTotalWaves();

  contractBalance = await hre.ethers.provider.getBalance(
    wavePortalContract.address
  );

  console.log(
    "Contract balance : ",
    hre.ethers.utils.formatEther(contractBalance)
  );

  await wavePortalContract.getTotalWaves();

  console.log(`\nStep 3: Waving by random user`);
  waveTxn = await wavePortalContract.wave(
    "Wave by random user to check how things are going on"
  );

  await waveTxn.wait();

  contractBalance = await hre.ethers.provider.getBalance(
    wavePortalContract.address
  );

  console.log(
    "Contract balance : ",
    hre.ethers.utils.formatEther(contractBalance)
  );

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
