// Grab the articles as a json
// function getJson() {
//   $.getJSON("/articles", function(data) {
     
//     // For each one
//     for (var i = 0; i < data.length; i++) {
//       // Display the information on the page
//       $("#articles").append(
//           // build a card
          
//         "<div class='card blue-grey'><div class='card-content white-text'><span class='card-title'>" + data.author + "<br>" + data.date + "</span>" +
//         "<p>" + data.summary + "</p>" +
//         "</div>" +
//         "<div class=card-action>" + "<a href='https://www.yellowpages.com/monroe-nc/mip/mcneills-body-shop-459617928>View Source'" + 
//         "</div>" +
        
//         "</div>" +
//         "</div>"
        
//       );
//     }
//   });
// }

// get my data
// getJson();

window.onload = function() { 

 $.ajax({
        method: "GET",
        url: "/articles",
    }).done(function(data) {

        getStuff(data)
    })

 function getStuff(data) {
        if (data.length !== 0) {
          
            data.forEach(function(result) {

                var div1 = $("<div>").append(
                     "<div class='card blue-grey'><div class='card-content white-text'><span class='card-title'>" + result.author + "<br>" + result.date + "</span>" +
                      "<p>" + result.summary + "</p>" + "<br>" +
                     
                       "<a class='white-text right' href='https://www.yellowpages.com/monroe-nc/mip/mcneills-body-shop-459617928'>View Source</a>" + 
                       "</div>" +
                      
                      "</div>" +
                      "</div>"
                );

                $("#articles").append(div1);
            })

        }

    }

}