var main = function() {
  
  $('#top-text').keyup(function(){
  var topText = $('input[id=top-text]').val();
  $('.top-caption').text(topText); 
});

$('#bottom-text').keyup(function(){
  var bottomText = $('input[id=bottom-text]').val();
  $('.bottom-caption').text(bottomText);
});

$('#image-url').keyup(function(){
  var imageURL = $('input[id=image-url]').val();
  $('.meme img').attr('src', imageURL);
});
};
 
$(document).ready(main);
