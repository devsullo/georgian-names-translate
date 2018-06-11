# georgian-names-translate
This repository includes js file and Angular pipe

# Usage example in js

```
var names = "Lasha Sulaberidze, Roman Zhorzholoani";
console.log( str.trans() );
// ლაშა სულაბერიძე, რომან ჟორჟოლოანი
```

# Usage example in Angular

```
const names = "Lasha Sulaberidze, Roman Zhorzholoani";
console.log( this.transPipe.transform(names) );
// ლაშა სულაბერიძე, რომან ჟორჟოლოანი
```

# Or in Template
```
{{ "Lasha Sulaberidze, Roman Zhorzholoani" | trans }}
```
