const core = require("@actions/core");
const github = require("@actions/github");
const exec = require("@actions/exec");

function run() {
  const bucket = core.getInput("bucket", { required: true });
  const buckeRegion = core.getInput("bucket-region", { required: true });
  const distFolder = core.getInput("dist-folder", { required: true });

  // upload files
  const s3Uri = `s3://${bucket}`;
  exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${buckeRegion}`);

  const websiteUrl = `http://${bucket}.s3-website-${buckeRegion}.amazonaws.com`;
  core.setOutput("website-url", websiteUrl);
  // core.notice("synced the aws s3 folder");
}

run();
