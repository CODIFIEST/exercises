// Monitor Ethereum activity in real time
// sign up for Infura account
// using the ethers npm library, display the following information
const prompt = require("prompt-promise")
const ethers = require("ethers");
const { isAddress, formatEther } = require("ethers/lib/utils");
const url = 'https://mainnet.infura.io/v3/5b51db67a5b64f13aa905ca545baf4f3';
const provider = new ethers.providers.JsonRpcProvider(url);


// provider.getBlockNumber().then((blockum) => {console.log(`The most recent block number is ${blockum}`)})
// provider.getGasPrice().then((gas) => {console.log(`The most recent gas price is ${gas}`)})
// provider.getNetwork().then((network) => {console.log(`The current Chain ID is ${network.chainId}`)})

async function displayBalance(){
    const address = await prompt("Give the address you want to check\n");
    if (isAddress(address)){
        console.log("You entered", address);
    
    await provider.getBalance(address).then((balance) => console.log(`Nice. you have ${balance.toString()} in WEI and ${formatEther(balance)} in ETH.`));
    console.log(`Your transaction count is ${await provider.getTransactionCount(address)}`);
    console.log("Press ctrl-c to quit")
}
    
    if (!(isAddress(address))) {
        console.log("that is not an address, but it won't get here because the fuction throws an error");
        throw error ("that is not an address")
    }
    
    
}
displayBalance();