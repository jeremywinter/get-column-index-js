function getColumnIndex() {

  // gets column index
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // enter column and row
  var columnIndex = sheet.getRange("A1").getColumn();
  Logger.log("Column Index is: " + columnIndex);
  
}
