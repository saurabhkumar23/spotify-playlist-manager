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

// ask for operation
operation = readline.question('Choose your operation:\n1. Create new playlist and add songs. \n2. Modify your current playlist (add or remove songs from it) \n')
console.log('------------------------------------')
if(operation !=  '1' && operation != '2'){
    console.log('Sorry, we have only these operations available. choose correct option :)')
    process.exit()
}
else if(operation == '1'){
    newPlaylist = readline.question('Give your playlist name: ')
    noOfSongsToAdd = readline.question('How many songs you want to add: ')
    console.log('------------------------------------')
    for(let i=0;i<noOfSongsToAdd;i++){
        songsToAdd[i] = readline.question(`${i+1}. `)
    }
    main();
}
else{
    modifyPlaylist = readline.question('Give your playlist name: ')
    console.log('------------------------------------')
    modifyOperation = readline.question('Choose your operation:\n1. Add new songs. \n2. Remove songs. \n3. Add and Remove both.\n')
    console.log('------------------------------------')
    if(modifyOperation !=  '1' && modifyOperation != '2' && modifyOperation != '3'){
        console.log('Sorry, we have only these operations available. choose correct option :)')
        process.exit()
    }
    else if(modifyOperation == '1'){
        noOfSongsToAdd = readline.question('How many songs you want to add: ')
        console.log('------------------------------------')
        for(let i=0;i<noOfSongsToAdd;i++){
            songsToAdd[i] = readline.question(`${i+1}. `)
        }
        main();
    }
    else if(modifyOperation == '2'){
        noOfSongsToRemove = readline.question('How many songs you want to remove: ')
        console.log('------------------------------------')
        for(let i=0;i<noOfSongsToRemove;i++){
            songsToRemove[i] = readline.question(`${i+1}. `)
        }
        main();
    }
    else{
        noOfSongsToAdd = readline.question('How many songs you want to add: ')
        console.log('------------------------------------')
        for(let i=0;i<noOfSongsToAdd;i++){
            songsToAdd[i] = readline.question(`${i+1}. `)
        }
        console.log('------------------------------------')
        noOfSongsToRemove = readline.question('How many songs you want to remove: ')
        console.log('------------------------------------')
        for(let i=0;i<noOfSongsToRemove;i++){
            songsToRemove[i] = readline.question(`${i+1}. `)
        }
        main();
    }
}
