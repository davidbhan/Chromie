/*
const client = new ApiAi.ApiAiClient({accessToken:"d82da7b4ba744715a6c726a03b58147a"});
var promise = client.textRequest("Hi, what's your name?");

$(function(){
   $("#submitButton").click(function(){
       
   })
     
})
*/

$(function(){
    console.log("testing_1");
    const client = new ApiAi.ApiAiClient({accessToken: 'd82da7b4ba744715a6c726a03b58147a'});
    
    $("#submitButton").click(function(){
        var text_req = $("#queryString").val();
        let promise = client.textRequest(text_req);
        promise.then(handleResponse);
    });
    function handleResponse(serverResponse){
        var obj = JSON.stringify(serverResponse.result.fulfillment.speech);
        /*var response = obj.result.fulfillment.speech;*/
        $("#test").text(obj);
        console.log(JSON.stringify(serverResponse));
    }
    
})