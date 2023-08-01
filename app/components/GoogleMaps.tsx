import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "1200px",
  height: "400px",
};

const center = {
  lat: -4.949481964111328, // Latitude da localização desejada
  lng: -47.498573303222656, // Longitude da localização desejada
};

const GoogleMapsComponent = () => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY!;

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={18}>
        <Marker position={center}>
          <div className="text-sm absolute bottom-5 left-3 bg-white text-black p-4 rounded-lg z-10 shadow-lg">
            <p>R. Dorgival Pinheiro de Souza, 954a - Centro,</p>
            <p>Açailândia - MA, 65930-000</p>
          </div>
        </Marker>
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapsComponent;
