// Define the make_album function

import { title } from "process";

function make_album(artist_name: string, album_title: string, tracks?: number){
    let album: {artist: string, title: string, tracks?: number} = {
        artist: artist_name,
        title: album_title,
    };

    if (tracks !== undefined){
        album.tracks = tracks;
    }

     return album;

}

// Calling three functions and cerating 3 variables with different values

let album1 = make_album("Afham", "Album title 1");

let album2 = make_album("Jahanzaib", "Album title2");

// Calling a make_album function with third parameter

let album3 = make_album("Talha", "Album title3", 10);

// Printing values of our object created my function

console.log(album1);

console.log(album2);

console.log(album3);
