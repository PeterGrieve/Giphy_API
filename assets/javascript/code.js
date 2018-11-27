

var topics = ["computers", "cars", "soccer"];


$(document).ready(function () {


    renderButtons();


    $("#searchBtn").click(handleSearchClick);

    $(".topicBtn").click([this], handleTopicClick);



function handleSearchClick() {

    var newTopic = $("#topicName").val();
    console.log(newTopic);

    topics.push(newTopic);

    console.log(topics);

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

    renderButtons();

    $("#searchBtn").click(handleSearchClick);

    $(".topicBtn").click([this], handleTopicClick);

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

    $("#searchBtn").click(handleSearchClick);

    $(".topicBtn").click([this], handleTopicClick);

}

function renderButtons() {

    $("#btnHolder").empty();

    topics.forEach(element => {

        var newBtn = $('<button/>',
            {
                style: "margin: 5px",
                text: element,
                class: "topicBtn"
            })

        $("#btnHolder").append(newBtn);


    });

    return;

}


});