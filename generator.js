import crypto from 'crypto'

const randomBytes1 = crypto.randomBytes(16);
const randomBytes2 = crypto.randomBytes(32);
console.log('Random 16 Bytes:', randomBytes1.toString('hex'));
console.log('Random 32 Bytes:', randomBytes2.toString('hex'));