require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/k9LOCDLLlBg-unkcXNTvdby7Nykb-ZZU",
      accounts: [
        "9b8ea0e9a5fc0d1c99984b9283bcaa85e5c4052b4d791519f5b0f78655693efb",
      ],
    },
  },
  // networks: {
  //   localhost: {
  //     url: "http://127.0.0.1:8545/",
  //     accounts: [
  //       "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
  //     ],
  //   },
  // },
};
