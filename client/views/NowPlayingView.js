var NowPlayingView = Backbone.View.extend({


  tagName: 'div',

  template: _.template('<span><%= artist %> - <%= title %></span>'),

  setSong: function(song){
    this.model = song;
    this.render(song);
  },

  render: function(song){
    if (!song) { return; }
    return this.$el.html(this.template(song.attributes));
  }

});
