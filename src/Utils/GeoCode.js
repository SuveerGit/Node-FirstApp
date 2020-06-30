
const request = require('request')
console.log('geo code called')
const geocode = (address, callback) => {
    // const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1'
    const url ='http://api.weatherstack.com/current?access_key=81c348bbfc20add8713ab2b300e489db&query='+ address +'';
    console.log(url)
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        }  else {
            // callback(undefined, {
            //     latitude: body.features[0].center[1],
            //     longitude: body.features[0].center[0],
            //     location: body.features[0].place_name
            // })
            // console.log(response.body.current.temperature)
            // callback(undefined,console.log(body.current.temperature))
            callback(undefined,{
                temperature:body.current.temperature,
               
            })
        }
    })
}

module.exports = geocode