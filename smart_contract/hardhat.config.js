require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/9BfcxUSSdjEBGIa5xCA-Y9OtLsQnIFSM",
      accounts: [
        "dfb882c2610b2ab1e7c2a768360a124c896253ece2b71da8143186aa325c7b0d",
      ],
    },
  },
};
