$(document).ready(function () {
    $("#offerAcceptanceForm").submit(function (event) {
        event.preventDefault();
        const response = $('input[name="offerResponse"]:checked').val();
        
        // Send the response to the server via AJAX
        $.post("/acceptance-endpoint", { response: response }, function (data) {
            if (data.success) {
                alert("Offer response successfully recorded.");
            } else {
                alert("An error occurred. Please try again.");
            }
        });
    });
});
