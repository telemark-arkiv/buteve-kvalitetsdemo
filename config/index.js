'use strict';

var config = {
  SERVER_PORT: 3000,
  FIREBASE_URL: 'your-firebase-url',
  FIREBASE_DB: 'your-firebase-db',
  ACHECKER_ID: 'your-achecker-id',
  GOOGLE_API_KEY: 'your-google-id',
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