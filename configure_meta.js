const router = require("express").Router();
const fs = require('fs')
const path = require('path')

router.get('/', function (request, response) {

    const filePath = path.resolve(__dirname, 'client/build', 'index.html');
  
    // read in the index.html file
    fs.readFile(filePath, 'utf8', function (err, data) {
      if (err) {
        return console.log(err);
      }
  
      // replace the special strings with server generated strings
      data = data.replace(/\$OG_TITLE/g, 'Weekly - Calendar that focus user experience.');
      data = data.replace(/\$OG_DESCRIPTION/g, "The Simplest calendar to help you keep track of incoming tasks.");
      data = data.replace(/\$TWITTER_TITLE/g, 'Weekly - Calendar that focus user experience.');
      data = data.replace(/\$TWITTER_DESCRIPTION/g, "The Simplest calendar to help you keep track of incoming tasks.");
  
      data = data.replace(/\$OG_IMAGE/g, "./Preview.png");
      data = data.replace(/\$TWITTER_IMAGE/g, "./Preview_twitter.png");
      result = data.replace(/\$TWITTER_IMAGE_SUMMARY/g, "./Preview_twitter_summary.png");
  
      response.send(result);
    });
});

router.get('/detail', function (request, response) {

    const filePath = path.resolve(__dirname, 'client/build', 'index.html');
  
    // read in the index.html file
    fs.readFile(filePath, 'utf8', function (err, data) {
      if (err) {
        return console.log(err);
      }
  
      // replace the special strings with server generated strings
      data = data.replace(/\$OG_TITLE/g, 'Weekly - Calendar that focus user experience.');
      data = data.replace(/\$OG_DESCRIPTION/g, "The Simplest calendar to help you keep track of incoming tasks.");
      data = data.replace(/\$TWITTER_TITLE/g, 'Weekly - Calendar that focus user experience.');
      data = data.replace(/\$TWITTER_DESCRIPTION/g, "The Simplest calendar to help you keep track of incoming tasks.");
  
      data = data.replace(/\$OG_IMAGE/g, "./Preview.png");
      data = data.replace(/\$TWITTER_IMAGE/g, "./Preview_twitter.png");
      result = data.replace(/\$TWITTER_IMAGE_SUMMARY/g, "./Preview_twitter_summary.png");
  
      response.send(result);
    });
});

router.get('/create', function (request, response) {

    const filePath = path.resolve(__dirname, 'client/build', 'index.html');
  
    // read in the index.html file
    fs.readFile(filePath, 'utf8', function (err, data) {
      if (err) {
        return console.log(err);
      }
  
      // replace the special strings with server generated strings
      data = data.replace(/\$OG_TITLE/g, 'Weekly - Calendar that focus user experience.');
      data = data.replace(/\$OG_DESCRIPTION/g, "The Simplest calendar to help you keep track of incoming tasks.");
      data = data.replace(/\$TWITTER_TITLE/g, 'Weekly - Calendar that focus user experience.');
      data = data.replace(/\$TWITTER_DESCRIPTION/g, "The Simplest calendar to help you keep track of incoming tasks.");
  
      data = data.replace(/\$OG_IMAGE/g, "./Preview.png");
      data = data.replace(/\$TWITTER_IMAGE/g, "./Preview_twitter.png");
      result = data.replace(/\$TWITTER_IMAGE_SUMMARY/g, "./Preview_twitter_summary.png");
  
      response.send(result);
    });
});

router.get('/edit/:id', function (request, response) {

    const filePath = path.resolve(__dirname, 'client/build', 'index.html');
  
    // read in the index.html file
    fs.readFile(filePath, 'utf8', function (err, data) {
      if (err) {
        return console.log(err);
      }
  
      // replace the special strings with server generated strings
      data = data.replace(/\$OG_TITLE/g, 'Weekly - Calendar that focus user experience.');
      data = data.replace(/\$OG_DESCRIPTION/g, "The Simplest calendar to help you keep track of incoming tasks.");
      data = data.replace(/\$TWITTER_TITLE/g, 'Weekly - Calendar that focus user experience.');
      data = data.replace(/\$TWITTER_DESCRIPTION/g, "The Simplest calendar to help you keep track of incoming tasks.");
  
      data = data.replace(/\$OG_IMAGE/g, "../Preview.png");
      data = data.replace(/\$TWITTER_IMAGE/g, "../Preview_twitter.png");
      result = data.replace(/\$TWITTER_IMAGE_SUMMARY/g, "../Preview_twitter_summary.png");
  
      response.send(result);
    });
});

module.exports = router;