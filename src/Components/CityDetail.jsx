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
      `http://gapct2recommendationengine-env.eba-amwf2dwx.us-east-1.elasticbeanstalk.com/api/v1.0/city/${id}`,
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
  
  // let geojson = {
  //   [33.439491, -86.095576]
  //   "type": "FeatureCollection",
  //   "features": [
  //     {
  //       "type": "Feature",
  //       "properties": {},
  //       "geometry": {
  //         "type": "MultiPoint",
  //         "coordinates":
  //         city.coordinates
  //       }
  //     }]
  // }

  // console.log(geojson.features[0].geometry.coordinates)
  
  if (isLoaded) {
    coordinates = city.map_center
  }
  console.log(city.map_center)
  console.log(coordinates)

  return (
    <>
      <h3 className='placeName'>{city.place}</h3>

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
        <GeoJSON /*this is where geojson needs to go*//>
      </MapContainer>} <br></br>

      <div className="city-detail-container">
        
          {/*<div className="city-pop">Population: {city.total_pop}</div>
          <div className="med-month-housing">
          Median Monthly Housing Cost:   ${city.med_monthly_housing}
          </div>*/}
          <div className="unemployment">

            <Card fluid centered>
              <Card.Content>
                <Card.Description>

                  <Grid container columns={2}>
                    <Grid.Column >
                      <Card.Header className='containerSize'>
                        Unemployment Rate:
                      </Card.Header>
                      <Progress className='Progress' percent={(city.unemployment_rate * 100).toFixed(3)} color='blue' size='small' />
                    </Grid.Column>

                    <Grid.Column >
                      <Card.Header>
                        Poverty Rate:
                      </Card.Header>
                      <Progress className='Progress' percent={(city.poverty_rate * 100).toFixed(3)} color='blue' size='small' />
                    </Grid.Column>

                    <Grid.Column>
                      <Card.Header>
                        Population:
                      </Card.Header>
                        {city.total_pop}
                    </Grid.Column>

                    <Grid.Column>
                      <Card.Header>
                        Median Monthly Housing Cost:
                      </Card.Header>
                        ${city.med_monthly_housing}
                    </Grid.Column>
                  </Grid>

                </Card.Description>
              </Card.Content>
            </Card> 

            <h3>Quick Facts</h3>

            <Card fluid centered>
              <Card.Content>
                <Card.Description>
                      {city.description}
                </Card.Description>
              </Card.Content>
            </Card> 

          </div>
          {/*<div className="poverty">Poverty Rate:   <Progress className='Progress' percent={(city.poverty_rate * 100).toFixed(3)} color='blue' size='small'/></div>*/}
        </div>
        <div className="detail">
          <div className="city-name">City:   {city.place}</div>
          <div className="state-name">State:   {city.state}</div>
          <div className="city-description">Description:<br></br>{city.description}</div>
      </div>
    </>
  );
};

export default CityDetail;
