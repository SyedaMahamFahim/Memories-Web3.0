const main = async () => {
    const contractFactory = await ethers.getContractFactory("Todo")
    const contract = await contractFactory.deploy()
    await contract.deployed()

    console.log("Contract deployed to: ", contract.address)
    console.log("Contract deployed to: ", contract)
}

const runMain = async () => {
    try {
        await main()
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

runMain()
