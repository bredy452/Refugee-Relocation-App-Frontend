import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet'

const CityDetail = () => {
  const [city, setCity] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const { id } = useParams();

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
    .then((data) => setCity(data));
    setIsLoaded(true);
  }, [id]);

  if (!isLoaded) {
    return <h2>Loading...</h2>;
  }
  
  // let longLat = []
  // let newArr = city.map_center.replace('[', '')
  // let newArr2 = newArr.replace(']', '').replace(',', '').split(' ')
  // console.log(newArr)
  // let longitude = Number(newArr2[0])
  // let latitude = Number(newArr2[1])
  // longLat.push(longitude)
  // longLat.push(latitude)
  // console.log(longLat)

  // city.newMid = longLat
  // console.log(city)
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
  console.log(city)

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
          Median Monthly Housing Cost: {city.med_monthly_housing}
          </div>
        </div>
      </div>

      <MapContainer zoom={9} center={[33.439491, -86.095576]} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[33.439491, -86.095576]}>
          <Popup> 
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <GeoJSON /*this is where geojson needs to go*//>
      </MapContainer>
    </>
  );
};

export default CityDetail;
