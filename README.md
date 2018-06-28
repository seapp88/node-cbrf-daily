# node-cbrf-daily

Простой модуль для получения текущих курсов валюты ЦБ РФ.

### Инициализация

```javascript
const CBRF = require("patch/to/file");
const RATE = new CBRF()
```

> Данный модуль имеет всего один метод но когда дойдут руки я его расширю)))

### Методы

```javascript
RATE.daily().then((data) => {
    console.log(data)
})
```
> Возвращает текущие курсы валют