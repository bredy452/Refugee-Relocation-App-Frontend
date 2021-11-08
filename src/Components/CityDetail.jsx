import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet'

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
  console.log(coordinates)

  return (
    <>
      <div className="city-detail-container">
        <div className="detail">
          <div className="city-name">City: {city.place}</div>
          <div className="state-name">State: {city.state}</div>
          <div className="city-description">Description: {city.description}</div>
          <div className="city-pop">Population: {city.total_pop}</div>
          <div className="unemployment">
          Unemployment Rate: {city.unemployment_rate}
          </div>
          <div className="poverty">Poverty Rate: {city.poverty_rate}</div>
          <div className="med-month-housing">
          Median Monthly Housing Cost: ${city.med_monthly_housing}
          </div>
        </div>
      </div>

      {coordinates &&<MapContainer zoom={9} center={coordinates} scrollWheelZoom={true}>
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
      </MapContainer>}
    </>
  );
};

export default CityDetail;
