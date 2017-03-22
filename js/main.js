$('audio').attr("src","http://api.soundcloud.com/tracks/90243752/stream?client_id=03e4633e2d85874a921380e47cac705d")

$('#submit').submit(function(e){
  e.preventDefault();
  var artist = $('input').val();
  $('#artistSlot').html(artist);
  $('#searchResults').html('');

  $.ajax({url: "https://api.soundcloud.com/tracks/?q=$%7B"+artist+"%7D&client_id=03e4633e2d85874a921380e47cac705d",
    success: function(response){
      response.forEach(function(song) {
        $('#searchResults').append( `
          <div class="col-md-3 song">
            <div data-id="${song.id}" class="songImage" style="background-image: url(${song.artwork_url});">
            <i class="fa fa-play" aria-hidden="true"></i>
            </div>
            <p>${song.title}</p>
          </div>
          `);
     })
    }
  })
})

$('body').on('click','.song',function(){
  let image = $(this).find('.songImage')
  let source = image.data("id");
  let songSource = "http://api.soundcloud.com/tracks/"+source+"/stream?client_id=03e4633e2d85874a921380e47cac705d"
  $('audio').attr("src",songSource);
})
