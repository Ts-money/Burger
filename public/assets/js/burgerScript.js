$(function () {
    
    // Changes burger's status to devoured
    $(document).on("click", ".devour", function () {
        var id = $(this).data("id");

        
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: { devoured: true }
        }).then(
            function () {
                console.log("Changed status to devoured!");
                
                location.reload();
            }
        );
    });

    // Creates new burger
    $(".create-form").on("submit", function (event) {
        
        event.preventDefault();
        var burgerType = "Regular ";
        var radiobuttons = document.getElementsByName('burgertype');
        for (var i = 0; i < radiobuttons.length; i++) {
            if (radiobuttons[i].checked) {
                burgerType = radiobuttons[i].value;
            }
        }
        var newBurger = $("#burger").val().trim();
        
        if (newBurger.length > 0) {
            newBurger = burgerType + newBurger;
            
            $.ajax("/api/burgers", {
                type: "POST",
                data: { name: newBurger }
            }).then(
                function () {
                    console.log("Created new burger!");
                    
                    $(".replicator").append(`<button class="replicated">${newBurger}</button>`);
                    $(".replicated").fadeIn(3000, function () {
                        
                        setTimeout(function () {
                            location.reload();
                        }, 2000);
                    });
                }
            );
        }
    });
});