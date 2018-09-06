$(document).ready(function() {
  $(function() {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='registration']").validate({
      // Specify validation rules
      rules: {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side

        model: 'required',
        year: 'required',
        make: 'required'
      },
      // Specify validation error messages
      messages: {
        vehiclename: 'Please enter the vehicle name',
        model: 'Please enter the model',

        year: 'Please enter a valid year'
      },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
      submitHandler: function(form) {
        form.submit();
      }
    });
  });
  $('#mobile a').click(function() {
    $('.tabs-nav').toggle();
  });
  $('.container div').hide(); // Hide all divs
  $('.container div:first').show();
  $('.tabs-nav ul li:first').addClass('active');
  $('.tabs-nav ul li a').click(function() {
    //When any link is clicked
    $('.tabs-nav ul li').removeClass('active'); // Remove active class from all links
    $(this)
      .parent()
      .addClass('active'); //Set clicked link class to active
    var currentTab = $(this).attr('href'); // Set variable currentTab to value of href attribute of clicked link
    $('.container div').hide(); // Hide all divs
    $(currentTab).show(); // Show div with id equal to variable currentTab
    return false;
  });
  $(function() {
    $('#date').datepicker({ dateFormat: 'yy' });
  });
});
