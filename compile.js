// compile code will go here
const path = require('path');
const fs = require('fs');
const sols = require('sols');
const Inboxpath = path.resolve(_dirname,'contracts','Inbox.sol');
const source = fs.readFileSynk(Inboxpath, 'utf8');
//console.log(solc.compile(source, 1));
//we only care about contracts/inbox property in the utput of the compiled code
module.export = solc.compile(source, 1).contracts[':/Inbox']; 
