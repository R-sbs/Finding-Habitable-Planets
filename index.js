const fs = require('fs');
const { parse } = require('csv-parse');


const habitablePlanets = [];

function habitablePlanet(planet) {
    return planet['koi_disposition'] === 'CONFIRMED'
        && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
        && planet['koi_prad'] < 1.6;
}

fs.createReadStream('./kepler_data.csv')
    .pipe(parse({ comment: '#', columns: true }))
    .on('data', (data) => {
        if (habitablePlanet(data)) {
            habitablePlanets.push(data)
        }
    })
    .on('error', (err) => {
        console.log('An Error Occurred', err);
    })
    .on('end', () => {
        fs.writeFile('output.json', JSON.stringify(habitablePlanets, null, 2), (err) => {
            if (err) {
              console.error('Error writing JSON file:', err);
            } else {
              console.log('Output JSON file has been written successfully.');
            }
          });
    });





