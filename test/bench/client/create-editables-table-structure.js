module.exports = function ($editablesTable, tag) {
  $editablesTable.find('tbody').append([
    '<tr class="' + tag + '">',
      '<td class="tag">' + tag + '</td>',
      '<td class="element"></td>',
      '<td class="callback-count">',
        '<ul style="list-style-type: none">',
          '<li>onSensible: <span class="report on-sensible">0</span></li>',
          '<li>onAny: <span class="report on-any">0</span></li>',
        '</ul>',
      '</td>',
    '</tr>'
  ].join(''))
}