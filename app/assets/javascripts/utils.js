// TODO: replace with rails 
$(document).on("click", "#contact-us-button", function(e) {
  e.preventDefault();

  var from = $("#email-from").val();
  var text  = $("#email-content").val();
  var name = $("#email-name").val();
  console.log(from);
  console.log(text);
  console.log(name);

  if(from=='' || text=='' || name=="")
    return false;

  // For more options in mandrill data check:
  // https://mandrillapp.com/api/docs/messages.JSON.html
  $.ajax({
    type: "POST",
    url: "https://mandrillapp.com/api/1.0/messages/send.json",
    data: {
      "key": "4amdG4T3xH955gWIqF1RFw",
      "message": {
        "text": text,
        "subject": "New submission from www.asimisoft.com",
        "from_email": from,
        "from_name": name,
        "to": [
          {
            "email": "amazingrails@gmail.com",
            "name": "Asimi Soft Pvt. Ltd.",
            "type": "to"
          }
        ]
      },
      "async": false,
      "ip_pool": "Main Pool"
    },
    success: function(data){
      alert("Thank you for contacting us. We will get back to you soon.");
    },
    error: function(xhr, status, err) {
      alert("Sorry! we are unable to process your email.")
    }
  });
});


// Owl carousel
jQuery(document).ready(function($) {
    var theme_slider = $("#owl-demo");
          $("#owl-demo").owlCarousel({
              navigation: false,
              slideSpeed: 300,
              paginationSpeed: 400,
              autoPlay: 6000,
              addClassActive: true,
           // transitionStyle: "fade",
              singleItem: true
          });
          $("#owl-demo2").owlCarousel({
              slideSpeed: 300,
              autoPlay: true,
              navigation: true,
              navigationText: ["&#xf007","&#xf006"],
              pagination: false,
              singleItem: true
          });

          // Custom Navigation Events
          $(".next-arrow").click(function() {
              theme_slider.trigger('owl.next');
          })
          $(".prev-arrow").click(function() {
              theme_slider.trigger('owl.prev');
          })
});
