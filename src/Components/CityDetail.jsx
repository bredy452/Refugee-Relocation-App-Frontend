import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
    )
      .then((res) => res.json())
      .then((data) => setCity(data));
    setIsLoaded(true);
  }, [id]);

  if (!isLoaded) {
    return <h2>Loading...</h2>;
  }

  return (
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
  );
};

export default CityDetail;
