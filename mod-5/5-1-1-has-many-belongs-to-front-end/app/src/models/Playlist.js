import getId from '../utils/getId.js';

// build the class that would belong to the things that has many things
class Playlist {
  constructor(name) {
    this.id = getId();
    this.name = name;
  }
}

export default Playlist;
