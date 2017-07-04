var request = require('request');
var fs = require('fs');


console.log('Welcome to the GitHub Avatar Downloader!\n');

var GITHUB_USER = 'arnoldthchan';
var GITHUB_TOKEN = 'b56d31ba5c5cb58f1f0a55a2f9d9cf22877f0603';

function complete(){
  console.log('Download completed')
}
function downloadImageByURL(url, filePath) {
  request.get(url)
         .on('error', function (err) {
           throw err;
         })
         .on('response', function (response) {

         })
         .pipe(fs.createWriteStream(filePath + '.jpg').on('finish', complete));
}

//Fetches contributors as a JSON list
//Involves a callback function
//to loop and print out avatar URLs, for each object
function getRepoContributors(repoOwner, repoName, callback) {
var options = {
        url: 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
        headers: {
            'User-Agent': 'GitHub Avatar Downloader - Student Project'
        }
    };

request(options, function(err, res, body){
  if (err) throw err;

  var text = JSON.parse(body);
  for (i in text){

  }
  });
}

//https://github.com/nodejs/node
//https://github.com/jquery/jquery
getRepoContributors('jquery', 'jquery', function(err, result) {
  console.log('Errors:', err);
  console.log('Result:', result);
});

downloadImageByURL("https://avatars2.githubusercontent.com/u/2741?v=3&s=466", "avatars/kvirani")