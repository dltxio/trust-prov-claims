const Contract = artifacts.require("EthereumClaimsRegistry");

module.exports = async (deployer) => {
  await deployer.deploy(Contract);
};
