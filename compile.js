// compile code will go here
const path = require('path');
const fs = require('fs');
const sols = require('sols');
const Inboxpath = path.resolve(_dirname,'contracts','Inbox.sol');
const source = fs.readFileSynk(Iboxpath, 'utf8');
console.log(solc.compile(source, 1));
