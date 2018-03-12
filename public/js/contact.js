window.onload = function() {

    function randomNums() {
        var randNum1 = Math.floor(Math.random() * 20) + 1;
        var randNum2 = Math.floor(Math.random() * 20) + 1;
        document.getElementById("digit1").innerHTML = randNum1;
        document.getElementById("digit2").innerHTML = randNum2;
    }

    // get random nums
    randomNums();

    // Adding an event listener for when the form is submitted
    $("#submitButton").on('click', handleFormSubmit);

    // submit form function
    function handleFormSubmit(event) {

        var answer = $("#answer").val();
        var digit1 = parseInt(document.getElementById("digit1").innerHTML);
        var digit2 = parseInt(document.getElementById("digit2").innerHTML);
        var sum = digit1 + digit2;
        var bodyInput = $("#message").val().trim();
        var nameInput = $("#name").val().trim();
        var phoneInput = $("#phone").val().trim();
        var emailInput = $("#email").val().trim();
        var time = $("#time").val().trim();
        var date = $("#date").val().trim();
        var appointment = ("I would like to schedule an appointment for " + date + " at " + time)

        event.preventDefault();
        // Don't submit unless the form is complete...... they don't have to give phone#
        if (!nameInput) {
            $("#wrong").text("Please complete the name section");
            $('#pleaseComplete').modal('open');
        }
        else if (!emailInput) {
            $("#wrong").text("Please provide an e-mail address for us to contact you at");
            $('#pleaseComplete').modal('open');
        }
        else if (!bodyInput) {
            $("#wrong").text("Please complete the message section");
            $('#pleaseComplete').modal('open');
        }
        else if (answer === null || answer === "") {
            $("#wrong").text("Please solve the equation");
            $('#pleaseComplete').modal('open');
            randomNums();

        }
        else if (answer != sum) {
            $("#wrong").text("Your math is wrong!");
            $('#pleaseComplete').modal('open');
            $("#answer").val("");
            randomNums()
        }
        else {
            // Constructing a newMessage
            var newMessage = {
                name: nameInput,
                email: emailInput,
                phone: phoneInput,
                body: bodyInput,
                appointment: appointment

            }; // submit the new message
            submitMessage(newMessage);
            $('#thankYou').modal('open');

            // empty out the input fields
            $("#message").val("");
            $("#name").val("");
            $("#email").val("");
            $("#phone").val("");
            $("#date").val("");
            $("#time").val("");

        }

    }
    // Submits the message
    function submitMessage(message) {
        console.log("about to send message");
        $.get("/send", {
                to: "joshjanculawebpage@gmail.com",
                subject: "New Message",
                html: "<h3>" + "name: " + message.name + "</h3>" + "<br>" +
                    "<h4>" + "email: " + message.email + "</h4>" +
                    "<h4>" + "phone: " + message.phone + "</h4>" +
                    "<p>" + "message: " + message.body + "</p>" +
                    "<p>" + "appointment: " + message.appointment + "</p>"

            },
            function(data) {
                if (data == "sent") {
                    console.log("Great Success!");
                }
            });
    }

};
