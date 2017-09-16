const client = new ApiAi.ApiAiClient({accessToken:"d82da7b4ba744715a6c726a03b58147a"});
var promise = client.textRequest("Hi, what's your name?");

$(function(){
    $("#submitButton").click(function(){
        promise.then(handleResponse)
                .catch(handleError);
    })
})

function handleResponse(serverResponse) {
        console.log(serverResponse);
}
function handleError(serverError) {
        console.log(serverError);
}