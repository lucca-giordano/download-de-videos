require("downloadjs")(data, strFileName, strMimeType);

import axios, { get } from 'axios';
import download from 'downloadjs';
import { createWriteStream } from 'fs';

const tweetUrl = document.querySelector('.textinput').value;

const downloadButton = document.querySelector('.button');

downloadButton.addEventListener('click', () => {
    /*
    get(tweetUrl)
    .then(response => {
    const html = response.data;
    const videoUrl = html.match(/"content_url":"(.*?)"/)[1];

    axios({
        method: 'get',
        url: videoUrl,
        responseType: 'stream'
        }
    )
    .then(response => {
        response.data.pipe(createWriteStream('myvideo.mp4'));
            }
        );
    }
);
*/

download(tweetUrl, 'myvideo.mp4', 'video/mp4')

});