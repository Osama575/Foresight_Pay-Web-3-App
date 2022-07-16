require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/2Ag8-owce6x5OIPVdDYh4himV8-Knk9C',
      accounts: ['413a39cfc1ccd07974fed8725ff622176250132559e40e120ee553a299a0ea5e'],
    },
  },
};