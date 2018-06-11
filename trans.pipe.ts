/**
 * Georgian names translate
 *
 * Copyright (c) 2018 Devsullo
 * Influenced from GeoKBD
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 */

import { Pipe, PipeTransform } from '@angular/core';
const symbols = 'abgdevzTiklmnopJrstufqRySCcZwWxjh',
  specSymbols = ['zh', 'gh', 'sh', 'ch', 'ts', 'dz', 'ts', 'ch', 'kh'],
  specSymbolsMatch = ['ჟ', 'ღ', 'შ', 'ჩ', 'ც', 'ძ', 'წ', 'ჭ', 'ხ'];

@Pipe({
  name: 'trans'
})

export class TransPipe implements PipeTransform {

  transform(value: string): string {
    const _value = value.toLocaleLowerCase();
    const text = [];
    let indexI, indexK;
    for (let i = 0; i < _value.length; i++) {
      const chr = _value.substr(i, 1);
      const chr2 = _value.substr(i, 2);
      if ((indexI = specSymbols.indexOf(chr2)) >= 0) {
        text.push(specSymbolsMatch[indexI]);
        i += 1;
      } else if ((indexK = symbols.indexOf(chr)) >= 0) {
        text.push(String.fromCharCode(indexK + 4304));
      } else {
        text.push(chr);
      }
    }
    return text.join('');
  }

}