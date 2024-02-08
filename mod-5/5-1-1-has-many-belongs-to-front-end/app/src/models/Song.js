import getId from "../utils/getId.js";
import Playlist from "./Playlist.js"

// build the class that would have many things
export class Song {
  static #allSongs = []; 
  #songs = [];

  constructor(name) {
      this.id = getId();
      this.name = name; // Array to store songs
      Song.#allSongs.push(this);
  };

  addPlaylist(title) {
    this.#songs.push(new Playlist(title));
  };

  getSongs(){
    return [...this.#songs];
  };

  static getAllSongs(){
    return [...Song.#allSongs];
  }
}
