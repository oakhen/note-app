import * as fs from "node:fs";
// import myjson from "./1-json.json";

const bufferData = fs.readFileSync("1-json.json");

const myJSON = bufferData.toString();

const myJS = JSON.parse(myJSON);

myJS.age = 32;

myJS.number = 25;

const jsonData = JSON.stringify(myJS);

fs.writeFileSync("1-json.json", jsonData);
