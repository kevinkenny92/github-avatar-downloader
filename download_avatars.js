var request = require('request');
var fs = require('fs');
var args = process.argv;

//
var repOwner = process.argv[2];
var repo = process.argv[3];

var GITHUB_USER = "kevinkenny92";
var GITHUB_TOKEN = "0d7cdc2953cd259e6b2ea29a3265f4cee7a7872f";



function downloadImageByURL(url, filePath) {
  request.get(url)
         .on('error', function (err) {
           throw err;
         })
         .pipe(fs.createWriteStream(filePath + '.jpg'));
}

function iterateContributors(text){
  for (i in text){
    downloadImageByURL(text[i].avatar_url, `avatars/${text[i].login}`);
    }
}

function getRepoContributors(repoOwner, repoName, callback) {
  var requestURL = {
        url: 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
        headers: {'User-Agent': 'GitHub Avatar Downloader - Student Project'
          }
      };
      request(options, function(err, res, body){
      if (err) throw err;
        var text = JSON.parse(body);
      callback (text);
  });
}




//downloadImageByURL("https://avatars2.githubusercontent.com/u/2741?v=3&s=466", "avatars/kvirani")