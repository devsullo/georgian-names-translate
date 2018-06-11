/**
 * Georgian names translate
 *
 * Copyright (c) 2018 Devsullo
 * Influenced from GeoKBD
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 */
String.prototype.trans = function () {
  var __string = this.toLocaleLowerCase(),
    indexI, indexK, chr, chr2,
    text = [],
    symbols = 'abgdevzTiklmnopJrstufqRySCcZwWxjh',
    specSymbols = ['zh', 'gh', 'sh', 'ch', 'ts', 'dz', 'ts', 'ch', 'kh'],
    specSymbolsMatch = ['ჟ', 'ღ', 'შ', 'ჩ', 'ც', 'ძ', 'წ', 'ჭ', 'ხ'];

  for (var i = 0; i < __string.length; i++) {
    chr = __string.substr(i, 1);
    chr2 = __string.substr(i, 2);
    if ((indexI = specSymbols.indexOf(chr2)) >= 0) {
      text.push(specSymbolsMatch[indexI])
      i += 1;
    }
    else if ((indexK = symbols.indexOf(chr)) >= 0) {
      text.push(String.fromCharCode(indexK + 4304));
    } else {
      text.push(chr);
    }
  }
  return text.join('');
};