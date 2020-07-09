"use strict";

let userName;
//let i = 0;
let repoObject;

function getRepos(){
    const url=`https://api.github.com/users/${userName}/repos`;
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(responseJson => {
        console.log(responseJson);
        console.log(responseJson.length);
        displayRepos(responseJson);
        //repoObject = responseJson;
        //for(let i = 0; i < responseJson.length; i ++){
        //displayLoop();
    //}
    });
}

// function displayLoop(){
//     for(let i = 0; i < repoObject.length; i ++){
//     displayRepos();
//     }
// }

function displayRepos(responseJson){
    console.log("displaying");
    $(".repos").empty();
    for(let i = 0; i < responseJson.length; i ++){
    $(".repos").append(`<p>${responseJson[i].name}</p> <p><a href="${responseJson[i].url}">${responseJson[i].url}</a></p>`);
    //displayLoop();
}}

function getUser(){
    $("form").submit(function(event){
        event.preventDefault();
        console.log("get user running.");
        userName = $("input[name='handle']").val();
        console.log(userName);
        getRepos();
    })
    
}

$(getUser);