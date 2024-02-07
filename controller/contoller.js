import fs from 'fs';
import csv from 'csv-parser';
import path from 'path';

const homePage = (req, res) => {
    res.render('index')
}

const readCSV = (req, res) =>{

    const { barcode } = req.body;

    const __dirname = path.resolve()
    
    const dataArray = [];

    fs.createReadStream(path.join(__dirname, '/upload/Product_Master.csv'))
      .pipe(csv())
      .on('data', (row) => {
        // Assuming the CSV file has headers, each row will be an object
        dataArray.push(row);
      })
      .on('end', () => {


        const filteredArray = filterByBarcode(dataArray, barcode);
        res.send(filteredArray)

    });

}

function filterByBarcode(arr, barcode) {
    return arr.filter(item => item.Barcode === barcode);
}



export {
    homePage,
    readCSV
}