'use strict';

const express = require('express')
const bodyParser = require('body-parser')

const {actionssdk} = require('actions-on-google');

const app = actionssdk({debug: true});

app.intent('actions.intent.MAIN', (conv) => {
  conv.ask('Hi!');
});

express().use(bodyParser.json(), app).listen(3000)