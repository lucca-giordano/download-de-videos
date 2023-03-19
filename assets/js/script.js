const axios = require('axios');
const fs = require('fs');

const tweetUrl = document.querySelector('.textinput').value;

const downloadButton = document.querySelector('.button');

downloadButton.addEventListener('click', () => {
    axios.get(tweetUrl)
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
        response.data.pipe(fs.createWriteStream('myvideo.mp4'));
            }
        );
    }
);
});