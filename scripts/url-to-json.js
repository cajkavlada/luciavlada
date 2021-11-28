const imageUrls = process.argv[2];

const fs = require('fs');
const { forEach } = require('lodash');
const requestImageSize = require('request-image-size');
const url = require('url')
const https = require('https')
var sizeOf = require('image-size');

const verticalPhotos = fs.readFileSync(`./assets/content/listOfVerticalPhotos.txt`, 'utf8');
const arrayVertical = verticalPhotos.split('\r\n');

const urlsString = fs.readFileSync(`./assets/content/${imageUrls}`, 'utf8');


const urlsArray = urlsString.split('\n');

const finalJson = urlsArray.map((string) => {
  const line = string.split('*');
  const line1 = line[0].split(', ');
  const line2 = line[1].split(', ');
  const src = line2[1];
  const shortenedUrl = src.substring(0, src.length-19);
  const finalUrl = shortenedUrl.replace('file/d/', 'uc?id=');
  const srcFull = line1[1];
  const shortenedUrlFull = srcFull.substring(0, srcFull.length-19);
  const finalUrlFull = shortenedUrlFull.replace('file/d/', 'uc?id=');
  const vertical = !!arrayVertical.find((x) => (x === line1[0].substring(0,4)));
  const object = {
    src: finalUrl,
    width: vertical ? 2 : 3,
    height: vertical ? 3 : 2,
    name: line1[0],
    srcFull: finalUrlFull
  };
  return object;
})

/*const srcUrls = urlsArray.map((url) => {
  const shortenedUrl = url.substring(0, url.length-17);
  return shortenedUrl.replace('file/d/', 'uc?id=');
});

const finalJson = srcUrls.map((url) => {
  const object = {
    src: url,
    width: 3,
    height: 2,
  };
  return object;
})

for(let i = 0; i<finalJson.length; i++) {
  finalJson[i].number = i+1;
}

console.log(finalJson);*/
/*const difference = {};
Object.entries(newDictionary).forEach((entry) => {
  const [key, value] = entry;
  if (!(key in oldDictionary)) {
    difference[key] = value;
  }
});*/

fs.writeFileSync(`./assets/content/galleryUrls.json`, JSON.stringify(finalJson, null, ' '));
