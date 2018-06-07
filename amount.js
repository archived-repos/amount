
var currency_formatters = [
  'AED|,|.|1| |2|د.إ.‏',
  'AFN|,|.|1||2|؋',
  'ALL|.|,|0||2|Lek',
  'AMD|,|.|0| |2|֏',
  'ANG|,|.|1||2|ƒ',
  'AOA|,|.|1||2|Kz',
  'ARS|.|,|1| |2|$',
  'AUD|,|.|1||2|$',
  'AWG|,|.|1||2|ƒ',
  'AZN| |,|0| |2|₼',
  'BAM|.|,|0| |2|КМ',
  'BBD|,|.|1||2|$',
  'BDT|,|.|1| |0|৳',
  'BGN| |,|0| |2|лв.',
  'BHD|,|.|1| |3|د.ب.‏',
  'BIF|,|.|0||0|FBu',
  'BMD|,|.|1||2|$',
  'BND|.|,|1||0|$',
  'BOB|.|,|1| |2|Bs',
  'BRL|.|,|1| |2|R$',
  'BSD|,|.|1||2|$',
  'BTC|,|.|0||2|Ƀ',
  'BTN|,|.|1| |1|Nu.',
  'BWP|,|.|1||2|P',
  'BYR| |,|0| |2|р.',
  'BZD|,|.|1||2|BZ$',
  'CAD|,|.|1||2|$',
  'CDF|,|.|0||2|FC',
  'CHF|\'|.|0| |2|CHF',
  'CLP|.|,|1| |2|$',
  'CNY|,|.|1||2|¥',
  'COP|.|,|1| |2|$',
  'CRC|.|,|1||2|₡',
  'CUC|,|.|1||2|CUC',
  'CUP|,|.|1||2|$MN',
  'CVE|,|.|1||2|$',
  'CZK| |,|0| |2|Kč',
  'DJF|,|.|0||0|Fdj',
  'DKK||,|0| |2|kr.',
  'DOP|,|.|1||2|RD$',
  'DZD|,|.|1| |2|د.ج.‏',
  'EGP|,|.|1| |2|ج.م.‏',
  'ERN|,|.|0||2|Nfk',
  'ETB|,|.|1||2|ETB',
  'EUR| |,|0| |2|€',
  'FJD|,|.|1||2|$',
  'FKP|,|.|1||2|£',
  'GBP|,|.|1||2|£',
  'GEL| |,|0| |2|Lari',
  'GHS|,|.|1||2|₵',
  'GIP|,|.|1||2|£',
  'GMD|,|.|0||2|D',
  'GNF|,|.|0||0|FG',
  'GTQ|,|.|1||2|Q',
  'GYD|,|.|1||2|$',
  'HKD|,|.|1||2|HK$',
  'HNL|,|.|1| |2|L.',
  'HRK|.|,|0| |2|kn',
  'HTG|,|.|1||2|G',
  'HUF| |,|0| |2|Ft',
  'IDR|.|,|1||0|Rp',
  'ILS|,|.|1| |2|₪',
  'INR|,|.|1||2|₹',
  'IQD|,|.|1| |2|د.ع.‏',
  'IRR|,|/|1| |2|﷼',
  'ISK|.|,|0| |0|kr.',
  'JMD|,|.|1||2|J$',
  'JOD|,|.|1| |3|د.ا.‏',
  'JPY|,|.|1||0|¥',
  'KES|,|.|1||2|KSh',
  'KGS| |-|0| |2|сом',
  'KHR|,|.|0||0|៛',
  'KMF|,|.|0||2|CF',
  'KPW|,|.|1||0|₩',
  'KRW|,|.|1||0|₩',
  'KWD|,|.|1| |3|د.ك.‏',
  'KYD|,|.|1||2|$',
  'KZT| |-|1||2|₸',
  'LAK|,|.|0||0|₭',
  'LBP|,|.|1| |2|ل.ل.‏',
  'LKR|,|.|1| |0|₨',
  'LRD|,|.|1||2|$',
  'LSL|,|.|0||2|M',
  'LYD|,|.|1||3|د.ل.‏',
  'MAD|,|.|1| |2|د.م.‏',
  'MDL|,|.|0| |2|lei',
  'MGA|,|.|1||0|Ar',
  'MKD|.|,|0| |2|ден.',
  'MMK|,|.|1||2|K',
  'MNT| |,|1||2|₮',
  'MOP|,|.|1||2|MOP$',
  'MRO|,|.|0||2|UM',
  'MTL|,|.|1||2|₤',
  'MUR|,|.|1||2|₨',
  'MVR|,|.|0| |1|MVR',
  'MWK|,|.|1||2|MK',
  'MXN|,|.|1||2|$',
  'MYR|,|.|1||2|RM',
  'MZN|,|.|1||0|MT',
  'NAD|,|.|1||2|$',
  'NGN|,|.|1||2|₦',
  'NIO|,|.|1| |2|C$',
  'NOK| |,|1| |2|kr',
  'NPR|,|.|1||2|₨',
  'NZD|,|.|1||2|$',
  'OMR|,|.|1| |3|﷼',
  'PAB|,|.|1| |2|B/.',
  'PEN|,|.|1| |2|S/.',
  'PGK|,|.|1||2|K',
  'PHP|,|.|1||2|₱',
  'PKR|,|.|1||2|₨',
  'PLN| |,|0| |2|zł',
  'PYG|.|,|1| |2|₲',
  'QAR|,|.|1| |2|﷼',
  'RON|.|,|0| |2|lei',
  'RSD|.|,|0| |2|Дин.',
  'RUB| |,|0| |2|₽',
  'RWF| |,|1| |2|RWF',
  'SAR|,|.|1| |2|﷼',
  'SBD|,|.|1||2|$',
  'SCR|,|.|1||2|₨',
  'SDD|,|.|0||2|LSd',
  'SDG|,|.|1||2|£‏',
  'SEK|.|,|0| |2|kr',
  'SGD|,|.|1||2|$',
  'SHP|,|.|1||2|£',
  'SLL|,|.|1||2|Le',
  'SOS|,|.|1||2|S',
  'SRD|,|.|1||2|$',
  'STD|,|.|1||2|Db',
  'SVC|,|.|1||2|₡',
  'SYP|,|.|1| |2|£',
  'SZL|,|.|1||2|E',
  'THB|,|.|1||2|฿',
  'TJS| |;|0| |2|TJS',
  'TMT| |,|0||0|m',
  'TND|,|.|1| |3|د.ت.‏',
  'TOP|,|.|1||2|T$',
  'TRY|.|,|0| |2|TL',
  'TTD|,|.|1||2|TT$',
  'TVD|,|.|1||2|$',
  'TWD|,|.|1||2|NT$',
  'TZS|,|.|1||2|TSh',
  'UAH| |,|0||2|₴',
  'UGX|,|.|1||2|USh',
  'USD|,|.|1||2|$',
  'UYU|.|,|1| |2|$U',
  'UZS| |,|0| |2|сўм',
  'VEB|,|.|1||2|Bs.',
  'VEF|.|,|1| |2|Bs. F.',
  'VND|.|,|0| |1|₫',
  'VUV|,|.|0||0|VT',
  'WST|,|.|1||2|WS$',
  'XAF|,|.|0||2|F',
  'XCD|,|.|1||2|$',
  'XOF| |,|0||2|F',
  'XPF|,|.|0||2|F',
  'YER|,|.|1| |2|﷼',
  'ZAR| |,|1||2|R',
  'ZMW|,|.|1||2|ZK',
  'WON|,|.|1||2|₩',
].reduce(function (currencies, currency) {
  var args = currency.split('|');
  currencies[args[0]] = _formatCurrencyFn.apply(_normalizeThis.apply(null, args), _normalizeArgs.apply(null, args) );
  return currencies;
}, {});

function _normalizeArgs (currency_code, thousands_separator, decimals_separator, symbol_on_left, symbol_space, decimal_digits, symbol) {
  return [currency_code, decimals_separator, thousands_separator, /\d/.test(decimal_digits) ? Number(decimal_digits) : null, symbol, symbol_on_left === '1', symbol_space];
}
function _normalizeThis (currency_code, thousands_separator, decimals_separator, symbol_on_left, symbol_space, decimal_digits, symbol) {
  return {
    currency_code: currency_code,
    thousands_separator: thousands_separator,
    decimals_separator: decimals_separator,
    decimal_digits: /\d/.test(decimal_digits) ? Number(decimal_digits) : null,
    symbol: symbol,
    symbol_on_left: symbol_on_left === '1',
    symbol_space: symbol_space,
  };
}

function _thousandsZeros (amount_str) {
  if( amount_str.length === 1 ) return '00' + amount_str;
  if( amount_str.length === 2 ) return '0' + amount_str;
  return amount_str;
}

function _separateThousands(amount, thousands_separator) {
  if( amount < 1000 || thousands_separator === undefined ) return '' + amount;
  return _separateThousands( parseInt(amount/1000), thousands_separator ) + thousands_separator + _thousandsZeros('' + amount%1000);
}

function _getDecimals (decimals, decimal_digits) {
  if( typeof decimal_digits !== 'number' ) return decimals;
  decimals = decimals.substr(0, decimal_digits);
  for( var i = decimal_digits - decimals.length ; i > 0 ; i-- ) decimals += '0';
  return decimals;
}

function _formatAmount(amount, decimals_separator, thousands_separator, decimal_digits) {
  var amount_parts = (amount + '').split('.');
  if( decimals_separator === undefined ) return '' + amount;

  return _separateThousands( parseInt(amount), thousands_separator ) + ( amount_parts[1] ? ( decimals_separator + _getDecimals(amount_parts[1], decimal_digits) ) : '' );
}

function _formatCurrencyFn (currency_code, decimals_separator, thousands_separator, decimal_digits, symbol, symbol_on_left, symbol_space) {
  return symbol_on_left ? function (amount) {
    return symbol + symbol_space + _formatAmount(amount, decimals_separator, thousands_separator, decimal_digits);
  } : function (amount) {
    return _formatAmount(amount, decimals_separator, thousands_separator, decimal_digits) + symbol_space + symbol;
  };
}

function _formatCurrency (amount, code) {
  if( typeof code === 'string' ) return currency_formatters[code](amount);
  return _formatCurrencyFn(null, code.decimals_separator, code.thousands_separator, code.decimal_digits, code.symbol, code.symbol_on_left, code.symbol_space)(amount);
}

_formatAmount.currency = _formatCurrency;

module.exports = _formatAmount;
