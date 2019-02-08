$(document).ready(function () {
    svg4everybody({});

   
    // Slideout menu
	 var slideout = new Slideout({
        'panel': document.getElementById('panel'),
        'menu': document.getElementById('menu'),
        'padding': 256,
        'tolerance': 70
  });
	// Toggle button
      document.querySelector('.navbar-toggler').addEventListener('click', function() {
        slideout.toggle();
     });

    //user_toggle
    $('.user_toggler').click(function(event) {
        event.preventDefault()
        $('.dropdown-menu1').slideToggle();
    });



    //Close  button
     $('.slide_close').click(function(event) {
     	 slideout.close();
     });
	
  
    // add fielid
    var newField = $('.wrap-div').html();

    $('.field__add').click(function(event) {
        $('.add_field').before('<div class="wrap-div new" > </div>');
        var count = $(".wrap-div").length;
        console.log(count);

        count++;

        $('.new').append(newField);
        $('.new .field__label ').html('Field' +count +':');
        $('.new').removeClass('new');

        //remove Field
        $('.field__del').click(function(event) {
        var elem = $(this).closest(".wrap-div");
        //elem.fadeOut();
        elem.remove();
        });
    });

      //remove Field
    $('.field__del').click(function(event) {
        var elem = $(this).closest(".wrap-div");
        //elem.fadeOut();
        elem.remove();
    });





    //add Search

    var newSearch = $('.newFieldRep').html();

    $('.reports__plus').click(function(event) {
        $('.priceField').before('<div class="new2 form-row align-items-center newFieldRep searchField"> </div>');
        $('.new2').append(newSearch);
        $('.new2').removeClass('new2');

         $('.formRep__del').click(function(event) {
            var elem = $(this).closest(".newFieldRep");
            elem.remove();
         });

    });




    //remove search
    $('.formRep__del').click(function(event) {
        var elem = $(this).closest(".newFieldRep");
        elem.remove();
    });


});
