// https://eth-ropsten.alchemyapi.io/v2/y2HgWk68mJFT2U5lVRkOQ6kghklrTIvi

require('@nomiclabs/hardhat-waffle');

module.exports= {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/y2HgWk68mJFT2U5lVRkOQ6kghklrTIvi',
      accounts: [ '73be1f2142c2770680a59d42b994ba6eaeb72a9d3de34de55d63543cdfba6b97' ]
    }
  }
}