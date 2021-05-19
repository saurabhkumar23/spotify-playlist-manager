///////////////////////////////////////////// requires //////////////////////////////////
let fs = require("fs");
let puppeteer = require('puppeteer');
let readline = require('readline-sync');

////////////// variables ///////////////
let newPlaylist;
let modifyPlaylist;
let noOfSongsToAdd;
let noOfSongsToRemove;
let songsToAdd = [];
let songsToRemove = [];
let user;
let pwd;
let operation;
let modifyOperation;
let appDB = [];

// ask for spotify credentials
user = readline.question('Give your spotify email: ')
pwd = readline.question('Give your spotify password: ')
console.log('------------------------------------')
