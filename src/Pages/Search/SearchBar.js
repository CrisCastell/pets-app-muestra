import React from 'react';
import { useDispatch } from 'react-redux';
import usePlacesAutocomplete, {getGeocode, getLatLng} from "use-places-autocomplete";
import { useLoadScript} from "@react-google-maps/api"

import {Combobox,ComboboxInput,ComboboxPopover,ComboboxList, ComboboxOption} from "@reach/combobox";
import "@reach/combobox/styles.css";
import { setLocacionAction } from '../../Actions/postActions';


const libraries = ['places']

function SearchBar() {
  const dispatch = useDispatch()
  // const [locacion, setLocacion] = useState({ lat: 10.173780, lng: -68.004433 })

  const setCustomLocacion = (locacion) => {
    dispatch(setLocacionAction(locacion))
  }

  const {isLoaded, loadError} = useLoadScript({
    // googleMapsAPiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    googleMapsApiKey: "AIzaSyAlc2oFkrZ4Fi3aRuEsvA56_sAGA8OVfd4",
    libraries
  })

  console.log(isLoaded)
  console.log(loadError)
  
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      
      location: { lat: () =>  10.173780, lng: () => -68.004433 },
      radius: 1 * 1000,
    },
  });

  // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      console.log(lat, lng)
      setCustomLocacion({ lat, lng });
    } catch (error) {
      console.log("😱 Error: ", error);
    }
  };

  return (
    <div className="search">
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Ingresa tu ubicación"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ place_id, description }) => (
                <ComboboxOption key={place_id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}

export default SearchBar
