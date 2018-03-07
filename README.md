
# amount

[![npm](https://img.shields.io/npm/v/amount.svg)](https://www.npmjs.com/package/amount)
[![Build Status](https://travis-ci.org/kiltjs/amount.svg?branch=master)](https://travis-ci.org/kiltjs/amount)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

> node

``` sh
npm i amount --save
```

> yarn

``` sh
yarn add amount
```

### Usage

``` js

amount(87686.987);
// '87686.987'

// setting decimals separator

amount(87686.987, ',');
// '87686,987'

// setting thousands separator

amount(87686.987, ',', '.');
// '87.686,987'

// setting number of decimals

amount(87686.987, ',', '.', 2);
// '87.686,98'

amount(87686.987, ',', '.', 1);
// '87.686,9'

amount(87686, ',', '.', 2);
// '87.686,00'

```

### currency

``` js

amount.currency(87686.987, 'EUR');
// '87 686,98 €'

amount.currency(87686.987, 'USD');
// '$87,686.98'

```
