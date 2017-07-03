var request = require('request');
var fs = require('fs');

console.log('Welcome to the GitHub Avatar Downloader!\n');

var GITHUB_USER = "kevinkenny92";
var GITHUB_TOKEN = "0d7cdc2953cd259e6b2ea29a3265f4cee7a7872f";;

function complete(){
  console.log('COMPLETED!');
}

function getRepoContributors(repoOwner, repoName, callback) {
  var requestURL = {
        url: 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
        headers: {'User-Agent': 'GitHub Avatar Downloader - Student Project'
          }
      };

request.get(requestURL)
       .on('error', function (err) {
         throw err;
       })
       .on('response', function (response) {
         console.log('Response Status Code: ', response.statusCode, '\nResponse Content Type:', response.headers['content-type']);
       })
       .pipe(fs.createWriteStream('./new.txt'));
}


getRepoContributors('jquery', 'jquery', function(err, result) {
  console.log('Errors:', err);
  console.log('Result:', result);
});