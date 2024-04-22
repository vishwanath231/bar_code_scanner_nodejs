// import fs from 'fs';
// import csv from 'csv-parser';
import path from 'path';
import { readFile } from 'fs/promises';


const homePage = (req, res) => {
    res.render('index')
}

const readCSV = async (req, res) =>{

    const { barcode } = req.body;

    const __dirname = path.resolve()
    
    // const dataArray = [];

    // fs.createReadStream(path.join(__dirname, '/upload/Product Master Retail Rank 3 1.csv'))
    //   .pipe(csv())
    //   .on('data', (row) => {
    //     // Assuming the CSV file has headers, each row will be an object
    //     dataArray.push(row);
    //   })
    //   .on('end', () => {


    //     

    // });

    let data = JSON.parse(await readFile(path.join(__dirname, '/upload/data1.json'), "utf8"));

    const filteredArray = filterByBarcode(data, barcode);
    res.send(filteredArray)
}

function filterByBarcode(arr, barcode) {
    return arr.filter(item => item.Barcode === barcode);
}


export {
    homePage,
    readCSV
}