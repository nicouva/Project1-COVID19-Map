import "https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.js";

const mapbox_token = "pk.eyJ1Ijoibmljby1ncmFwZSIsImEiOiJja2hjY2lnbnEwOGRuMnpvNDU0d3UwcW1rIn0.JV7_iAXF6ByehthcPhB59w";

mapboxgl.accessToken = mapbox_token;
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v10',
  center: [-95, 40],
  zoom: 2
});


document.getElementById('submit').addEventListener('click', function () {
  fetch("/covidex.json")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      let countryName = document.getElementById('searchCountry').value 
        for (i = 0; i < country.length; i ++) {
          if (countryName === country.country) {
            
           return
          }
        }
        
      //const { country, cases } = data;
      //console.log(cases)

      //cases.filter(case)
      //.forEach(cases => {
      //console.log(cases);
      //})

      data.forEach(country => {
        console.log(country.country)

      })

      data.forEach(country =>
        console.log(country.cases))
    });
})


