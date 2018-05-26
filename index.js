'use strict';

const express = require('express')
const bodyParser = require('body-parser')

const {actionssdk, Image} = require('actions-on-google');

const app = actionssdk({debug: true});

app.intent('actions.intent.MAIN', (conv) => {
    conv.ask('Salut!');
    conv.ask(new Image({
        url: 'https://i2.wp.com/devotics.fr/wp-content/uploads/2017/08/cropped-logo-tranparent' +
                '-400x434-1.png?fit=400%2C438&ssl=1',
        alt: 'Devotics'
    }))
});

app.intent('actions.intent.TEXT', handleTextIntent);

function handleTextIntent(conv, input) {
    if (input === 'Allume la lampe') {
        conv.ask('Comme si c\'était fait!');
    } else {
        conv.ask('Désolé mais je n\'ai pas compris.');
    }
}

express().use(bodyParser.json(), app).listen(3000)