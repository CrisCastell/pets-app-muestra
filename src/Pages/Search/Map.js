import React, {useCallback, useState, useRef} from 'react'
import {useSelector} from 'react-redux'
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"

import "@reach/combobox/styles.css";

const libraries = ['places']
const mapContainerStyle = {
  width:"100%",
  height:"100%"
}

//SI quiero customizar los colores puedo usar un json de esta pagina https://snazzymaps.com/style/1243/xxxxxxxxxxx
const options = {
  // styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: false,
};


// const center = { lat: 10.173780, lng: -68.004433 }





const Map = ({petLocacion, petLocacionList, fromList}) => {

  const [petLocation, setPetLocation] = useState({})

  console.log(petLocation)
  const center = useSelector(state => state.postReducer.locacion)

  const customZoom = fromList ? 14 : 15

  const onMapClick = useCallback((event)=>{
    setPetLocation(
      {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      }
    )

    console.log({
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    })
  }, [])

  const mapRef = useRef()

  const onMapLoad = useCallback((map) => {
      mapRef.current = map
    }, [])


  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);

  const {isLoaded, loadError} = useLoadScript({
    // googleMapsAPiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    googleMapsApiKey: "AIzaSyAlc2oFkrZ4Fi3aRuEsvA56_sAGA8OVfd4",
    libraries
  })

  if(loadError) return "Error loading maps"
  if(!isLoaded) return "Loading Maps"


  return(
    <div style={{
      width:"100%",
      height:"100%"
    }}>

        <Locate panTo={panTo} />
        <GoogleMap 
        mapContainerStyle={mapContainerStyle} 
        zoom={customZoom} 
        center={petLocacion ? {lat:Number(petLocacion.lat), lng: Number(petLocacion.lng)} : center}
        onClick={onMapClick}
        onLoad={onMapLoad}
        options={options}
        >

          {petLocacion ? <Marker position={{lat:Number(petLocacion.lat), lng: Number(petLocacion.lng)}} /> : null}

          {petLocacionList ? 

            petLocacionList.map(loc => <Marker key={loc.id} position={{lat:Number(loc.lat), lng: Number(loc.lng)}} /> )
            
          : null}
        </GoogleMap>
    </div>
  )
}


export default Map


function Locate({ panTo }) {
  return (
    <button
      className="locate btn btn-success"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => null
        );
      }}
    >
      Obten tu posicion actual
      {/* <img src="/compass.svg" alt="compass" /> */}
    </button>
  );
}




// function Search({panTo}) {
//   const {
//     ready,
//     value,
//     suggestions: { status, data },
//     setValue,
//     clearSuggestions,
//   } = usePlacesAutocomplete({
//     requestOptions: {
      
//       location: { lat: () =>  10.173780, lng: () => -68.004433 },
//       radius: 1 * 1000,
//     },
//   });

//   // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest

//   const handleInput = (e) => {
//     setValue(e.target.value);
//   };

//   const handleSelect = async (address) => {
//     setValue(address, false);
//     clearSuggestions();

//     try {
//       const results = await getGeocode({ address });
//       const { lat, lng } = await getLatLng(results[0]);
//       console.log(lat, lng)
//       panTo({ lat, lng });
//     } catch (error) {
//       console.log("😱 Error: ", error);
//     }
//   };

//   return (
//     <div className="search">
//       <Combobox onSelect={handleSelect}>
//         <ComboboxInput
//           value={value}
//           onChange={handleInput}
//           disabled={!ready}
//           placeholder="Search your location"
//         />
//         <ComboboxPopover>
//           <ComboboxList>
//             {status === "OK" &&
//               data.map(({ place_id, description }) => (
//                 <ComboboxOption key={place_id} value={description} />
//               ))}
//           </ComboboxList>
//         </ComboboxPopover>
//       </Combobox>
//     </div>
//   );
// }

 