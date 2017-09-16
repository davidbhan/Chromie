$(function(){
    console.log("testing_1");
    
    const client = new ApiAi.ApiAiClient({accessToken: 'd82da7b4ba744715a6c726a03b58147a'});

    $("#input").keyup(function(event){
        if(event.keyCode == 13){
            $("#submitButton").click();
        }
    });

    $("#submitButton").click(function(){
        var currentdate = new Date();
        var text_req = $("#queryString").val();
        $("#output").append($("<p class='user_resp'>" + text_req +"</p>"));

            
        let promise = client.textRequest(text_req);
        promise.then(handleResponse);


        $("#queryString").val('');
        var objDiv = document.getElementById("output");
        objDiv.scrollTop = objDiv.scrollHeight;
    });

 
    function handleResponse(serverResponse){
        var obj = JSON.stringify(serverResponse);
        var bot_response = JSON.stringify(serverResponse.result.fulfillment.speech).slice(1,-1);
        /*var response = obj.result.fulfillment.speech;*/
        $("#test").text(obj);

        setTimeout(function(){        
            $("#output").append($("<p class='bot_resp'>" + bot_response + "</p>"))
        },700);  // The millis to wait before executing this block

        console.log(JSON.stringify(serverResponse));
        var objDiv = document.getElementById("output");
        objDiv.scrollTop = objDiv.scrollHeight;
        
    }
    
})