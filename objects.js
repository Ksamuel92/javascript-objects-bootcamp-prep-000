var playlist = {'The 1975': 'Someone Else',};

function updatePlaylist (playlist, artistName, songTitle) {
   Object.assign({}, playlist, {artistName: songTitle});
   return playlist;
}

function removeFromPlaylist (playlist, artist) {
  delete playlist.artist
  return playlist
}
