require("@nomiclabs/hardhat-waffle");
require('dotenv').config({ path: '.env' });

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/Qm0-6J-CCP259ypD0y0N85iWuoUiqKAQ',
      accounts: ['5e8d51107f933c7cb1eb1c7fac4197d632b46b0087022426d2a4bb8c84a8675b'],
    }
  }
};
