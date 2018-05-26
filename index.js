'use strict';

const express = require('express')
const bodyParser = require('body-parser')

const {actionssdk} = require('actions-on-google');

const app = actionssdk({debug: true});

app.intent('actions.intent.MAIN', (conv) => {
  conv.ask('Salut!');
});

app.intent('actions.intent.TEXT', handleTextIntent);

function handleTextIntent(conv, input) {
    if(input === 'Allume la lampe'){
        conv.ask('Comme si c\'était fait!');
    }
    else{
        conv.ask('Désolé mais je n\'ai pas compris.');
    }
  }


express().use(bodyParser.json(), app).listen(3000)