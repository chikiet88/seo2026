import XLSX from 'xlsx';
import path from 'path';

const filePath = '/mnt/chikiet/kpiseo/kehoach/Plan Timona + taza.xlsx';
const workbook = XLSX.readFile(filePath);

console.log('Sheets:', workbook.SheetNames);

workbook.SheetNames.forEach(sheetName => {
    console.log(`\n--- ${sheetName} ---`);
    const worksheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    // Print first 20 rows to understand structure
    data.slice(0, 20).forEach((row, i) => {
        console.log(`Row ${i}:`, row);
    });
});
