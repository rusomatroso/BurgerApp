$(function() {
    $(".devourIt").on("click", function(event) {
        var id = $(this).data("id");
        var newDevour = $(this).data("newDevour");

        var newDevourState = {
            devoured: newDevour
        };

        $.ajax("/api/updateBurger/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function() {
                console.log("changed devour to", newDevour);
                location.reload();
            }
        );
    });

    $(".add-burger").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            name: $("#bur").val().trim()
        };

        $.ajax("/api/addBurger", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");
                location.reload();
            }
        );
    });
});
