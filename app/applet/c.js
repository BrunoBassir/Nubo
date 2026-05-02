const https = require('https');

function checkImage(url, name) {
  https.get(url, (res) => {
    console.log(`${name}: ${res.statusCode}`);
  }).on('error', (e) => {
    console.error(e);
  });
}

checkImage('https://images.unsplash.com/photo-1513635269975-59663e0ac1ad', 'Cordoba');
checkImage('https://images.unsplash.com/photo-1542144616-1b9f4a0c8724', 'Rosario');
checkImage('https://images.unsplash.com/photo-1449844908441-8829872d2607', 'City 3');
