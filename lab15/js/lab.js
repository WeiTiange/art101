// Author: Tiange Wei
// Date: 11/22/2021

function callAjax() {
  console.log("click");

  // Using the core $.ajax() method
  $.ajax({
      // The URL for the request (from the api docs)
      url: "https://api.scryfall.com/cards/random?q=t:planeswalker",
      // The data to send (will be converted to a query string)
      data: {
              // here is where any data required by the api
              //   goes (check the api docs)
            },
      // Whether this is a POST or GET request
      type: "GET",
      // The type of data we expect back
      dataType : "json",
      // What do we do when the api call is successful
      //   all the action goes in here
      success: function(data) {
          // do stuff
          var newImg = data.image_uris.normal
          $("#card").attr("src", newImg);
          console.log(data.image_uris.normal);
      },
      // What we do if the api call fails
      error: function (jqXHR, textStatus, errorThrown) {
          // do stuff
          console.log("Error:", textStatus, errorThrown);
      }
  })
}

$("#activate").click(callAjax);
