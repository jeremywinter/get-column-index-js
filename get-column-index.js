function getColumnIndex() {

  // gets column index
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // enter column and row
  const columnIndex = sheet.getRange("A1").getColumn();
  Logger.log("Column Index is: " + columnIndex);
  
}
