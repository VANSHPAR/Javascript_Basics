 $(document).ready(function () {
        console.log("we are using jquery");
        //$('selector').action()
        $('p').click(function () {
            console.log("Clicked on p",this)
         //   $(this).hide()
            //$('p').hide()    //element selctor
            //$('#id').hide()  //id selector
            //$('.class').hide()  //class selector
        });
        //  $('p').dblclick(function () {
        //     console.log("Double Clicked on p",this)
          
        // });
        //  $('p').mouseenter(function () {
        //     console.log("You entered in ",this)
          
        // });

        //events is jquery
    })

//     <!-- there are 3 types of selector
// element selctor
// id selector
// class selector -->