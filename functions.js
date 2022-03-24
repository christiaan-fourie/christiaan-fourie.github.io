$(document).ready(function() {
    $( "#about__section" ).show();
    $( "#projects__section" ).hide();
    $( "#art__section" ).hide();
    $( "#about_tab" ).addClass('active');
});

// When About Tab is clicked
$( "#about_tab" ).click(function() {
    $( "#projects__section" ).hide();
    $( "#art__section" ).hide();
    $( "#about__section" ).show();
    $( "#about_tab" ).addClass('active');
    $( "#projects_tab" ).removeClass('active');
    $( "#art_tab" ).removeClass('active');
  });
  // When Develop Tab is clicked
$( "#projects_tab" ).click(function() {
    $( "#projects__section" ).show();
    $( "#art__section" ).hide();
    $( "#about__section" ).hide();
    $( "#projects_tab" ).addClass('active');
    $( "#about_tab" ).removeClass('active');
    $( "#art_tab" ).removeClass('active');
  });
   // When Art Tab is clicked
$( "#art_tab" ).click(function() {
  $( "#projects__section" ).hide();
  $( "#about__section" ).hide();
  $( "#art__section" ).show();
  $( "#projects_tab" ).removeClass('active');
  $( "#about_tab" ).removeClass('active');
  $( "#art_tab" ).addClass('active');
});