$(document).ready(function () {
    console.log("we are using jquery");
    //$('selector').action()
    // $('p').click(function () {
    //     console.log("Clicked on p",this)
    //  //   $(this).hide()
    //     //$('p').hide()    //element selctor
    //     //$('#id').hide()  //id selector
    //     //$('.class').hide()  //class selector
    // });
    //  $('p').dblclick(function () {
    //     console.log("Double Clicked on p",this)

    // });
    //  $('p').mouseenter(function () {
    //     console.log("You entered in ",this)

    // });

    //on keyword
    $('p').on(
        {
            click: function () {
                console.log("Thanks for clicking")
            },
            mouseleave: function () {
                console.log("Thanks for leaving")
            }
        })
    // $('#wiki').hide(2000,function(){
    //     console.log("hidden");
    // });
    //  $('#wiki').show(2000,function(){
    //     console.log("shown");
    // });
    $('#btn').click(function () {
        //  $('#wiki').toggle(1000);
        $('#wiki').fadeOut(5000);
    })

    //fadeIn()
    //fadeOut()
    //fadeToggle()
    //fadeTo()

    // $('#wiki').slideUp(5000);
    // $('#wiki').slideDown(5000);
    // $('#wiki').slideToggle(5000,function(){
    //     console.log("done");
    // });
    //callback method is optional
    

    //animate function
    // $('#wiki').animate({opacity:0.5,
    //     height:'50px',
    //     width:'350px'
    // },2000)

    //queue functionality
    // $('#wiki').animate({opacity:0.3},4000);
    // $('#wiki').animate({opacity:0.9},1000);
    // $('#wiki').animate({hegiht:'300px'},12000);
    // $('#wiki').animate({width:'350px'},4000);

//     $('#ta').val('change the textarea')
//    // $('#ta').html('change the textarea2')


//     $('#wiki').empty();
//     $('#wiki').remove();
       $('#wiki').css('background-color','green')
       



})

//     <!-- there are 3 types of selector
// element selctor
// id selector
// class selector -->