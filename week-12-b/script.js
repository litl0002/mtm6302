// Nasa API key
// wBIccMVSHuvWsPrw6ZnK7kYn68N5xq5wuJacilbB
// https://api.nasa.gov/planetary/apod?api_key=wBIccMVSHuvWsPrw6ZnK7kYn68N5xq5wuJacilbB

fetch('https://api.nasa.gov/planetary/apod?api_key=wBIccMVSHuvWsPrw6ZnK7kYn68N5xq5wuJacilbB')
// fetch('https://api.nasa.gov/planetary/apod?api_key=wBIccMVSHuvWsPrw6ZnK7kYn68N5xq5wuJacilbB&date=2021-11-24')
    .then(function (response) {
        return response.json()
    })
    .then(function (imageData) {
        console.log(imageData)

        if(imageData.media_type === 'video') {
            document.querySelector('p').textContent = 'APOP is a video'
        }
        else {
            document.querySelector('img').setAttribute('src', imageData.url)
        }
    })