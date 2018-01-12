#! /usr/bin/env node

'use strict';

const coinTicker = require('coin-ticker');
const meow = require('meow');

const cli = meow(`
    Modo de uso:
      $ coinm <COIN> <PAIR>

    Exemplo:
      $ coin-market LTC BTC

`, {});

const busca = cli.input.join(' ');

if (busca.length === 0) {
	console.log('Ops, você digitou uma moeda inválida!');
	return;
}

const exchanges = coinTicker();

console.log(exchanges);
