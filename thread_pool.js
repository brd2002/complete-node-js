const crypto = require('crypto');
process.env.UV_THREADPOOL_SIZE = 2 ;
crypto.pbkdf2('Bharat', 'salt', 10000000, 512, 'sha512', () => { 
    console.log("1 - crypto")
});
crypto.pbkdf2('Bharat', 'salt', 10000000, 512, 'sha512', () => { 
    console.log("2 - crypto")
});crypto.pbkdf2('Bharat', 'salt', 1000000, 512, 'sha512', () => { 
    console.log("3 - crypto")
});
crypto.pbkdf2('Bharat', 'salt', 10000000, 512, 'sha512', () => { 
    console.log("4 - crypto")
});
