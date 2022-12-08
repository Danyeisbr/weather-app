import { Link } from "react-router-dom";

export default function City({ city }) {
  if (!city) return <h3>City was not found</h3>;
  return (
    <div className="cards">
      <div className="card mt-3 mb-3">
        <h2 className="card-header text-center"> {city.name} </h2>
        <div className="card-body bg-light">
          <div className="row col-md-12 d-inline">
            <div>Temperature: {city.temp} ºC </div>
            <div>Weather: {city.weather}</div>
            <div>Wind: {city.wind} km/h</div>
            <div>Clouds: {city.clouds}</div>
            <div>Latitude: {city.latitud}º</div>
            <div>Longitude: {city.longitud}º</div>
            <br />
          </div>
        </div>
        <div className="card-footer text-muted">
          {" "}
          <h5 className="card-text">
            <Link to="/weather-app">
              <button type="button" className="btn btn-lg btn-info col-md-12">
                Go Home!
              </button>
            </Link>
          </h5>{" "}
        </div>
      </div>
    </div>
  );
}
