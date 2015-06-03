'use strict';

var config = {
  SERVER_PORT: 3000,
  FIREBASE_URL: 'your-firebase-url',
  FIREBASE_DB: 'your-firebase-demo',
  ACHECKER_ID: 'your-achecker-api-key',
  GOOGLE_API_KEY: 'your-google-api-key',
  SITES: [
    {
      'id' : 'bfk',
      'name': 'Buskerud',
      'url': 'http://www.bfk.no'
    },
    {
      'id' : 'tfk',
      'name': 'Telemark',
      'url': 'http://www.telemark.no'
    },
    {
      'id' : 'vfk',
      'name': 'Vestfold',
      'url': 'https://www.vfk.no'
    }
  ]
};

module.exports = config;