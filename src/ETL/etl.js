import fs from "fs";
import readline from "readline";
import stream from "stream";
import { Tweet } from "../db/models/Tweets.js";

let dataReadStream = fs.createReadStream("src/ETL/data/data.txt");
dataReadStream.setEncoding("UTF8");
let outstream = new stream();
let lineReader = readline.createInterface(dataReadStream, outstream);

lineReader.on("line", function (line) {
  let currentTweet = JSON.parse(line);
  saveTweetToDatabase(currentTweet);
});
function isTweetDataValid(tweetData) {}

function saveTweetToDatabase(tweetData) {
  Tweet.create(tweetData);
}
