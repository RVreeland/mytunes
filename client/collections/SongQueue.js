// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
/*
    on('change', function(song){
      this.playFirst();
    }, this); */
  },

  playFirst: function() {},

  model: SongModel
});
