// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
/*
    on('change', function(song){
      this.playFirst();
    }, this); */
  },

  playFirst: function() {
    this.get()
    this.set('currentSong', this.models[0]);
  },

  currentSong: null,

  model: SongModel
});
