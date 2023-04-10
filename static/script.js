$(document).ready(function(){

    console.log('Ready')

    //  Fetch the current date and update it in the DOM
var date = new Date()
let display_date= "Date: " + date.toLocaleDateString()

$(document).ready(function () {
    $("#display_date").html(display_date)
    $('#save_button').prop('disabled', true);
})



    //  write an event, when Submit button is clicked
    $('#button').click(function(){

        let input_data = {
            "text": $("#text").val()
        }
        console.log(input_data)

        //  ajax request
        $.ajax({

            //  type of web request
            type : 'POST',

            //  Data to be sent in JSON format
            data : JSON.stringify(),

            //  type of response expected is json
            dataType : 'json',

            //  contentType
            contentType : 'application/json',

            //  if everything is successful, run this function
            success : function(result){

                // extract prediction and emoticon url from result
                predicted_emotion = result.data.predicted_emotion
                emo_url = result.data.predicted_emotion_img_url
                //  update the DOM elements


                //  show them
                $("#sentiment").html(predicted_emotion)
                $('#sentiment').css("display", "block");

                $("#emoji").attr('src', emo_url);
                $('#emoji').css("display", "block");

            },

            //  if any error, run this function
            error : function(result){

                console.log(result)
            }
        })


        
    })
        
})