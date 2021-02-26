const iss_url = "http://api.open-notify.org/iss-now.json"
const astros_url = "http://api.open-notify.org/astros.json"

const people = document.getElementById("people");
const map = document.getElementById("map")



fetch(iss_url)
    .then(response => response.json())
    .then(function(data) {
        latitude = data.iss_position.latitude;
        longitude = data.iss_position.longitude
        console.log(JSON.stringify(data.iss_position));
        const labels = [{
            type: 'scattergeo',
            mode: 'markers+text',
            text: ["ISS"],
            lon: [longitude],
            lat: [latitude],
            marker: {
                size: 20,
                color: [
                    '#16DBC2'
                ],
            },
            name: 'International Space Station',
        }];
        var layout = {
            autosize: true,
            title: '',
            geo: {
                scope: 'world',
                resolution: 200,
            }
        };

        Plotly.newPlot('map', labels, layout);

    });



fetch(astros_url)
    .then(response => response.json())
    .then(function(data) {
        let names = []
        for (let index = 0; index < data.people.length; index++) {
            names.push(data.people[index].name)

        }
        people.innerHTML = `And there ${data.number} people on board: ${names.join(", ")}`;


    });