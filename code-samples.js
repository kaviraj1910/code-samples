// first sample: to generate an excel file using xlsx and download

const worksheet = xlsx.utils.json_to_sheet(array);
const workbook = xlsx.utils.book_new();
xlsx.utils.book_append_sheet(workbook, worksheet, 'Sheet 1');
const excelBuffer = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
const blob = new Blob([excelBuffer], {type: 'application/octet-stream'});
const link = document.createElement('a');
link.href = URL.createObjectURL(blob);
link.download = 'excel-file.xlsx';
document.body.appendChild(link);
link.click();
document.body.removeChild(link);

