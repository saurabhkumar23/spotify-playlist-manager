## SPOTIFY PLAYLIST MANAGER
Managing playlists with huge amount of data consumes a lot of time. With the help of this application you can manage your playlists fastly. You don't have to create playlists, add or delete songs manually again and again. It will automatically handle those operations. It also contains a JSON file which will track your playlist data.
######
- operations:
  - Create Playlist
    - Add songs to your new Playlist.
  - Modify any Playlist
    - add songs to that Playlist.
    - remove songs from that Playlist.

## Setup/Installation
Open your Terminal/Command in the directory for the project and run these commands.
    
    git clone "https://github.com/saurabhkumar23/spotify-playlist-manager.git"
    cd spotify-playlist-manager
    npm install #install the dependencies from package.json

## Usage
- run this command on your terminal:
    - $spotify-manage
- give your spotify credentials.
- choose your operation. 
- now, script will handle everything:
    - will do the operation.
    - save changes to data.json file.
    - data.json file will contain array of objects. each object has a value i.e. playlist name with the value as a array of songs associated with it.