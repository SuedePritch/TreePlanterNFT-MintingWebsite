ipfsAddress = "https://ipfs.io/ipfs/QmcZAvFNFUxpBgTmy3PN6k53gcLLvh7FN4PNp551SmkLN4/"


for (let i = 0; i < 10001; i++) {
    console.log(JSON.stringify(
        {
            "id":i,
            "image": ipfsAddress + i +'.png'
        }
    ) + ',');
}