import { Song } from "../models/Song.js";

export const renderMain = () => {
  const form = document.querySelector('#app');
  const songSection = document.createElement('div');

  songSection.innerHTML = `
      <h2>Add Song</h2>
      <form id="song-form">
          <label for="song-name">Song Name:</label>
          <input type="text" name='name' id="song-name" required>
          <button type="submit">Add Song</button>
      </form>
  `;
  // form.append(authorSection);

  const playlistSection = document.createElement('div');
  playlistSection.id = 'playlistForm';
  playlistSection.innerHTML = `
  <h2>Add Playlist</h2>
  <form id="playlist-form">
      <label for="artist">Select Artist:</label>
      <select id="artists" name="name" required>
          ${Song.getAllSongs().map(song => `<option value="${song.name}">${song.name}</option>`).join('')}
      </select>
      <label for="playlist-name">Playlist Name:</label>
      <input type="text" name="name" id="playlist-name" required>
      <button type="submit">Add Playlist</button>
  </form>
  `;
  form.append(songSection, playlistSection);
};

export const renderSong = (song) => {
  const songElement = document.createElement('div');
  songElement.id = `songNum${song.id}`;

  const h3 = document.createElement('h3');
  h3.textContent = song.name;

  const ul = document.createElement('ul');
  ul.id = `songUL${song.id}`;
  console.log(song.id, song);
  ul.innerHTML = renderPlaylist(song.name);

  songElement.append(h3, ul);

  document.querySelector('#app').append(songElement);
};
export const findSongHelper = (songName) => {
  return Song.getAllSongs().filter((el) => el.name === songName)
}
export const renderPlaylist = (songName) => {
  const thisSong = findSongHelper(songName);
  const playlists = thisSong[0].getPlaylist();
  return playlists[0] ? playlists.map((playlist) => `<li>${playlist.name}</li>`).join('') : 'No books have been added for this author.'
};

export const updateDropDown = () =>{
  document.querySelector('#authors').innerHTML = `
  ${Author.getAllAuthors().map(author => `<option value="${author.name}">${author.name}</option>`).join('')}
  `
}
