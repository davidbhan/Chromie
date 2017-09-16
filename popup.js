$(function(){
    console.log("testing_1");
    const client = new ApiAi.ApiAiClient({accessToken: 'd82da7b4ba744715a6c726a03b58147a'});
    
    var first_run = true;
    if(!localStorage['ran_before']){
        first_run = true;
        localStorage["ran_before"] = "1";
    }
    if(first_run){
          $("#output").append($("<p class='bot_resp'>Hi there! My name is Chromie, and I'm here to help you be on top of your college academics.</p>"));
          $("#output").append($("<p class='bot_resp'>There are a few things I need to know about you to get started. If you're ready, type in 'Ready'!</p>"))    
    }    
    
    $("#input").keyup(function(event){
        if(event.keyCode == 13){
            $("#submitButton").click();
        }
    });

    $("#submitButton").click(function(){
        var text_req = $("#queryString").val();
        $("#output").append($("<p class='user_resp'>" + text_req +"</p>" ));
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
        $("#output").append($("<p class='bot_resp'>" + bot_response + "</p>"))
        console.log(JSON.stringify(serverResponse));
        var objDiv = document.getElementById("output");
        objDiv.scrollTop = objDiv.scrollHeight;
        
    }
    
})