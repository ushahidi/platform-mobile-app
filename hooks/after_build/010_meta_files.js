#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var exec = require('child_process').exec;
var root = process.argv[2];
var platform = process.env.CORDOVA_PLATFORMS;
var project = null;
var config = null;
if (process.env.project) {
  project = process.env.project;
  config = require(root + '/projects/' + project + '.json');
}

function puts(error, stdout, stderr) {
  console.log(stdout);
}

function removeMetaFiles() {
  process.stdout.write('removeMetaFiles');
  var apk = "platforms/android/app/build/outputs/apk/release/app-release.apk";
  if (fs.existsSync(root + "/" + apk)) {
    var command = "zip -d " + apk + " META-INF/\*";
    process.stdout.write(command);
    exec(command, puts);
  }
  else {
    process.stdout.write("removeMetaFiles APK " + apk + " does not exist");
  }
}

if (project != null && config != null && platform === 'android') {
  removeMetaFiles();
}
