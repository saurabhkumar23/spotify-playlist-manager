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

async function main() {

    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        slowMo: 20,
        args: ['--start-fullscreen', '--disable-notifications', '--incognito']
    });

    let pages = await browser.pages();
    let page = pages[0];

    // enter credentials
    await fillCredentials(page);

    if(operation == '1'){
        await createPlaylist(page);                    // create playlist


    }


    await page.waitForTimeout(1000);
    await browser.close();

}

async function fillCredentials(page){
    // open spotify website
    page.goto('https://open.spotify.com', {
        waitUntil: 'networkidle2'
    });

    // Login
    await page.waitForSelector("._3f37264be67c8f40fa9f76449afdb4bd-scss._1f2f8feb807c94d2a0a7737b433e19a8-scss", {
        visible: true
    });
    await page.click("._3f37264be67c8f40fa9f76449afdb4bd-scss._1f2f8feb807c94d2a0a7737b433e19a8-scss");

    // writing credentials
    await page.waitForSelector('#login-username', {
        visible: true
    });
    await page.type('#login-username', user,{delay:50});
    await page.type('#login-password', pwd,{delay:50});
    await page.click("#login-button");
}

async function createPlaylist(page){
    // create playlist button
    await page.waitForSelector('[data-testid="create-playlist-button"]', {
        visible: true
    });
    await Promise.all([
        page.waitForNavigation(),
        page.click('[data-testid="create-playlist-button"]'),             
    ]);

    // click playlist name
    await page.waitForSelector('.a12b67e576d73f97c44f1f37026223c4-scss',{
        visible: true
    });
    await page.click('.a12b67e576d73f97c44f1f37026223c4-scss')

    // fill playlist name input field
    await page.waitForSelector('[data-testid="playlist-edit-details-name-input"]',{
        visible: true
    });
    await page.click('[data-testid="playlist-edit-details-name-input"]',{clickCount:3});
    await page.type('[data-testid="playlist-edit-details-name-input"]',newPlaylist);

    // save that input field button
    await page.waitForSelector('[data-testid="playlist-edit-details-save-button"]',{
        visible:true
    });
    await page.click('[data-testid="playlist-edit-details-save-button"]');
}
