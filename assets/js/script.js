/*

const downloadVideo = async (videoUrl, filename) => {
    const response = await fetch(videoUrl)
    const blob = await response.blob()
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = filename
    link.click()
}

*/

const videourl = document.querySelector('.textinput').value;
const downloadButton = document.querySelector('.button');

downloadButton.addEventListener('click', () => {
    event.preventDefault();
    downloadButton.preventDefault();
});