var request = require('request');
var fs = require('fs');

console.log('Welcome to the GitHub Avatar Downloader!\n')
//The \n character is used to find a newline character.

var GITHUB_USER = "kevinkenny92";
var GITHUB_TOKEN = "0d7cdc2953cd259e6b2ea29a3265f4cee7a7872f";

function complete(){
  console.log('COMPLETED!');
}

function getRepoContributors(repoOwner, repoName, callback) {
  var requestURL = {
        url: 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
        headers: {'User-Agent': 'GitHub Avatar Downloader - Student Project'
          }
      };

request(requestURL, function(err, res, body){
  if (err) throw err;

  var text = JSON.parse(body);
  for (i in text){
    console.log(text[i].login)
    console.log(text[i].avatar_url, '\n');  //The \n character is used to find a newline character.
  }
  });
}




getRepoContributors('jquery', 'jquery', function(err, result) {
  console.log('Errors:', err);
  console.log('Result:', result);
});