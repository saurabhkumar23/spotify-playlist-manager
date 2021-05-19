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
