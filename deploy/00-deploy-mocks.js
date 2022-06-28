const { networkConfig, developmentChains } = require("../helper-hardhat-config");

const BASE_FEE = ethers.utils.parseEther("0.25");
const GAS_LINK_PRICE = 1000000000;

module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();
    args = [BASE_FEE, GAS_LINK_PRICE];

    if (developmentChains.includes(network.name)) {
        log("Local network detected! Deploying Mocks..");
        await deploy("VRFCoordinatorV2Mock", {
            from: deployer,
            log: true,
            args: args,
        });
        log("Mocks deployed!");
        log("----------------------------------------------");
    }
};

module.exports.tags = ["all", "mocks"];
