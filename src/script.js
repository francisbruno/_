import $ from 'jquery'

/*export default function borderStorie(){
$('.Profilefoto').append('<div id="border"></div>');}*/

//TRIGGER STORIES
export default function loadStorie(){
 $('.stories').fadeIn('slow').load('stories.html');
   setTimeout(function(){
    setTimeout(function(){
     $('#bar').width(0)
   },10)

  $('.stories, .loader').fadeOut('fast');
   },10000)

}loadStorie()
