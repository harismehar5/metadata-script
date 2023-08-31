const fs = require("fs");
const xlsx = require("xlsx"); // You'll need to install the 'xlsx' package

// Load Excel file
const workbook = xlsx.readFile("./nft_name.xlsx");
const worksheet = workbook.Sheets[workbook.SheetNames[0]];

// Convert Excel data to JSON
const jsonData = xlsx.utils.sheet_to_json(worksheet);

const metadataArray = []; // Create an empty array to hold metadata objects

// Generate JSON files for each row
jsonData.forEach((row, index) => {
  var counter = index + 1;
  const jsonFileName = counter + ".json";
  if (row.hasOwnProperty("artist") && row.hasOwnProperty("title")) {
    const jsonContent = {
      name: row.name,
      description:
        "Loco Legends NFT: Complimentary annual jerseys & exclusive game tickets. By purchasing the NFT, you agree to the terms and conditions on Jerseyloco.com/nft website.",
      image:
        "https://jade-fascinating-capybara-90.mypinata.cloud/ipfs/QmUHzZVq6bnY4isX9Z9Dxuk7KH2YsaKW6yGKfmoxMamY7U/" +
        row.image_name,
      attributes: [
        { trait_type: "Players", value: row.player },
        { trait_type: "Tier", value: row.tier },
        { trait_type: "Field", value: row.field },
        { trait_type: "Artist", value: row.artist },
        { trait_type: "Title", value: row.title },
      ],
    };
    metadataArray.push(jsonContent); // Add to the metadata array

    fs.writeFileSync(jsonFileName, JSON.stringify(jsonContent, null, 2));
    console.log(`Generated ${jsonFileName}`);
  } else {
    const jsonContent = {
      name: row.name,
      description:
        "Loco Legends NFT: Complimentary annual jerseys & exclusive game tickets. By purchasing the NFT, you agree to the terms and conditions on Jerseyloco.com/nft website.",
      image:
        "https://jade-fascinating-capybara-90.mypinata.cloud/ipfs/QmdtMFTyKaqq5jvNXL1hJTYSJ696jttDB2hpidYvHF7Dkf/" +
        row.image_name,
      attributes: [
        { trait_type: "Players", value: row.player },
        { trait_type: "Tier", value: row.tier },
        { trait_type: "Field", value: row.field },
      ],
    };
    metadataArray.push(jsonContent); // Add to the metadata array

    fs.writeFileSync(jsonFileName, JSON.stringify(jsonContent, null, 2));
    console.log(`Generated ${jsonFileName}`);
  }
});

// Write metadataArray to metadata.json
fs.writeFileSync("metadata.json", JSON.stringify(metadataArray, null, 2));
console.log(`Generated metadata.json`);

console.log("JSON generation completed.");
