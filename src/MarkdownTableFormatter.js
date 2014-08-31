function MarkdownTableFormatter() {
}

////////////////////////////////////////////////////////////////////////////////

MarkdownTableFormatter.prototype.format_table = function(input_table) {
  this.input_table = input_table;
  this.set_input_cells(input_table);
  this.set_column_widths(this.input_cells);
  return input_table;
};


////////////////////////////////////////////////////////////////////////////////

MarkdownTableFormatter.prototype.set_column_widths = function(input_cells) {

  this.column_widths = new Array();

  for (var row_i = 0, row_l = input_cells.length; row_i < row_l; row_i = row_i + 1) {
    for (var col_i = 0, col_l = input_cells[row_i].length; col_i < col_l; col_i = col_i + 1) {
      if (typeof this.column_widths[col_i] === 'undefined') {
        this.column_widths[col_i] = input_cells[row_i][col_i].length;
      }
      else if (this.column_widths[col_i] < input_cells[row_i][col_i].length) {
        this.column_widths[col_i] = input_cells[row_i][col_i].length;
      }
    }
  }
}


////////////////////////////////////////////////////////////////////////////////

MarkdownTableFormatter.prototype.set_input_cells = function(input_table) {

  this.input_cells = new Array();

  var input_line_array = input_table.split("\n");

  for (var lines_i = 0, lines_l = input_line_array.length; lines_i < lines_l; lines_i = lines_i + 1) {
    this.input_cells[lines_i] = new Array();
    var current_cols_array = input_line_array[lines_i].split("\|");

    for (var cols_i = 0, cols_l = current_cols_array.length; cols_i < cols_l; cols_i = cols_i + 1) {
      var cell_data = current_cols_array[cols_i];
      cell_data = cell_data.replace(/^\s+/g,"");
      cell_data = cell_data.replace(/\s+$/g,"");
      this.input_cells[lines_i][cols_i] = cell_data;
    }
  }
}
