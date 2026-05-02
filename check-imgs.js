const https = require('https');

function checkImage(url, name) {
  https.get(url, (res) => {
    console.log(`${name}: ${res.statusCode}`);
  }).on('error', (e) => {
    console.error(e);
  });
}

checkImage('https://images.unsplash.com/photo-1620025492984-b0e6e737c352', 'Rosario Old');
checkImage('https://images.unsplash.com/photo-1589909202802-8f4aadce1849', 'CABA Old');
checkImage('https://images.unsplash.com/photo-1543837943-40aabe520e5e', 'Cordoba New');
checkImage('https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b', 'Rosario New');
