var playlist = {'The 1975': Someone Else, 'MF DOOM': Accordion, 'Miles Davis': Four}

function updatePlaylist (playlist, artist, song) {
   Object.assign({}, playlist, {artist: song});
   return playlist;
}

function removeFromPlaylist (playlist, artist) {
  delete playlist.artist
  return playlist
}
