const core = require("@actions/core");
const github = require("@actions/github");
const exec = require("@actions/exec");

function run(params) {
  core.notice("Hello from my custom js acrtion !");
}

run();
