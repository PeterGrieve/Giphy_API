

var topics = ["computers", "cars", "soccer"];


$(document).ready(function () {


    renderButtons();


    $("#searchBtn").click(handleSearchClick);

    $(".topicBtn").click([this], handleTopicClick);

});

function handleSearchClick() {

    var newTopic = $("#topicName").val();
    console.log(newTopic);

    var memes = $.get("http://api.giphy.com/v1/gifs/search?q=" + newTopic + "&api_key=yqCJ5Nq2E9NOTJwaFPPYcP0VsYxqE25p&limit=10");
    memes.done(function (result) { 
        console.log("success got data", result);
        var data = result.data;
        var output = "";
        for (var index in data){
            var gifObject = data[index];
          var gifURL = gifObject.images.fixed_height.url;
          output += "<img width='200px' src='"+gifURL+"'/>";
        }
        $("#memeHolder").append(output);
    });

    var newBtn = $('<button/>',
        {
            style: "margin: 5px",
            text: newTopic,
            class: "topicBtn"
        })

    $("#btnHolder").append(newBtn);

}

function handleTopicClick(object){

    var topic = object.target.innerHTML;

    console.log(topic);

    var memes = $.get("http://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=yqCJ5Nq2E9NOTJwaFPPYcP0VsYxqE25p&limit=10");
    memes.done(function (result) { 
        console.log("success got data", result);
        var data = result.data;
        var output = "";
        for (var index in data){
            var gifObject = data[index];
          var gifURL = gifObject.images.fixed_height.url;
          output += "<img width='200px' src='"+gifURL+"'/>";
        }
        $("#memeHolder").append(output);
    });


}

function renderButtons() {

    topics.forEach(element => {

        var newBtn = $('<button/>',
            {
                style: "margin: 5px",
                text: element,
                class: "topicBtn"
            })

        $("#btnHolder").append(newBtn);


    });


}


