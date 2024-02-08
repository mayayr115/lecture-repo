import './style.css'
import { renderMain, renderPlaylist, renderSongs, updateDropDown, findSongHelper} from './utils/render-functions.js';
import Song from './models/Song.js';

const handleSongSubmit = (e) => {
  e.preventDefault();
  const newSong = Object.fromEntries(new FormData(e.target));
  const song = new Song(newSong.name);
  renderSong(song);
  updateDropDown();
  e.target.reset();
}

const handlePlaylistSubmit = (e) => {
  e.preventDefault();
  const songAndPlaylist = Object.fromEntries(new FormData(e.target));
  const song = findSongHelper(songAndPlaylist.name);
  song[0].addPlaylist(songAndPlaylist.name);
  document.querySelector(`#authorUL${song[0].id}`).innerHTML = renderSongs(songAndPlaylist.name);
  e.target.reset();
}

const main = () => {
  renderMain();

  document.getElementById('song-form').addEventListener('submit', handleSongSubmit);
  document.getElementById('playlist-form').addEventListener('submit', handlePlaylistSubmit);
}

main();