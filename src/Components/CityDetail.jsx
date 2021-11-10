import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet'
import {Progress, Card, Grid} from 'semantic-ui-react'

const CityDetail = () => {
  const [city, setCity] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const { id } = useParams();
  let coordinates

  useEffect(() => {
    fetch(
      `https://nest-recommendation-engine.herokuapp.com/api/v1.0/city/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          key: "se73A36yNqLbFyihaMgH",
        },
      }
    ).then((res) => res.json())
    .then((data) =>
      setCity(data) 
    );
    setIsLoaded(true);
  }, [id]);

  if (!isLoaded) {
    return <h2>Loading...</h2>;
  }
  
  let geojson = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "MultiPoint",
          "coordinates":
          city.coordinates
        }
      }]
  }

  // console.log(geojson.features[0].geometry.coordinates)
  
  if (isLoaded) {
    coordinates = city.map_center
  }
  console.log(city)
  console.log(coordinates)

  return (
    <>
      
      

      <div className="city-detail-container">
        <Grid.Column>
          <h3 className='placeName'>{city.place}</h3>
        </Grid.Column>
        <Grid.Column>
          <h4 className='placeName'>{city.state}</h4>
        </Grid.Column>

        {coordinates && <MapContainer zoom={9} center={coordinates} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coordinates}>
          <Popup> 
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        {coordinates && <GeoJSON geojson/>}
      </MapContainer>} <br></br>

          <div className="unemployment">

            <Card fluid centered>
              <Card.Content>
                <Card.Description>

                  <Grid container columns={2}>
                    <Grid.Column >
                      <Card.Header className='containerSize headerSettings'>
                        Unemployment Rate: 
                      </Card.Header>
                      {(city.unemployment_rate * 100).toFixed(2)}%

                      <Progress className='Progress' percent={(city.unemployment_rate * 100).toFixed(3)} color='blue' size='small'/>
                    </Grid.Column>

                    <Grid.Column >
                      <Card.Header className='headerSettings'>
                        Poverty Rate: <br></br>
                      </Card.Header>
                      {(city.poverty_rate * 100).toFixed(2)}%
                      <Progress className='Progress' percent={(city.poverty_rate * 100).toFixed(3)} color='blue' size='small' />
                    </Grid.Column>

                    <Grid.Column>
                      <Card.Header className='headerSettings'>
                        Population:
                      </Card.Header>
                        {city.total_pop}
                    </Grid.Column>

                    <Grid.Column>
                      <Card.Header className='headerSettings'>
                        Median Monthly Housing Cost:
                      </Card.Header>
                        ${city.med_monthly_housing}
                    </Grid.Column>
                  </Grid>

                </Card.Description>
              </Card.Content>
            </Card> 

            <h3>Quick Fact</h3>

            <Card fluid centered>
              <Card.Content>
                <Card.Description>
                      {city.description}
                </Card.Description>
              </Card.Content>
            </Card> 

          </div>
        </div>
    </>
  );
};

export default CityDetail;
