# NFT Metadata Generator

This script converts data from an Excel spreadsheet into NFT metadata files in JSON format. Each row of the spreadsheet corresponds to an NFT, and the script generates a JSON file for each row containing metadata information.

## Prerequisites

Before using this script, make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone this repository to your local machine.
2. Navigate to the repository's directory using the command line.
3. Run the following command to install the required dependencies:

```bash
npm install xlsx
```
## Usage

1. Place your Excel file **(nft_name.xlsx)** containing the NFT data in the same directory as the script.
2. Open a terminal and navigate to the directory containing the script.
3. Run the script using the following command:

```bash
node script.js
```
The script will read the Excel file, convert the data to JSON, generate individual JSON files for each NFT, and create a **metadata.json** file containing metadata information for all NFTs.
