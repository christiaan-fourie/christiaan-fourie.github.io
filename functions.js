$(document).ready(function() {
    $( "#design__section" ).show();
    $( "#development__section" ).hide();
    $( "#art__section" ).hide();
    $( "#design_tab" ).addClass('active');
});

// When Design Tab is clicked
$( "#design_tab" ).click(function() {
    $( "#development__section" ).hide();
    $( "#art__section" ).hide();
    $( "#design__section" ).show();
    $( "#design_tab" ).addClass('active');
    $( "#develop_tab" ).removeClass('active');
    $( "#art_tab" ).removeClass('active');
  });
  // When Develop Tab is clicked
$( "#develop_tab" ).click(function() {
    $( "#development__section" ).show();
    $( "#art__section" ).hide();
    $( "#design__section" ).hide();
    $( "#develop_tab" ).addClass('active');
    $( "#design_tab" ).removeClass('active');
    $( "#art_tab" ).removeClass('active');
  });
   // When Art Tab is clicked
$( "#art_tab" ).click(function() {
  $( "#development__section" ).hide();
  $( "#design__section" ).hide();
  $( "#art__section" ).show();
  $( "#develop_tab" ).removeClass('active');
  $( "#design_tab" ).removeClass('active');
  $( "#art_tab" ).addClass('active');
});