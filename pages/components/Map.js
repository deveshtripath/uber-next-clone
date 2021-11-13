import React,{useEffect} from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoiZGV2ZXNodHJpcGF0aGkiLCJhIjoiY2t0Mnc1cTdlMG9lbjMwcjJ2NGZjcjJocSJ9.XQWKwh5CUHN6JLyWHuNcYg';

function Map(props) {

      
  useEffect(() => {
    
    const map = new mapboxgl.Map({
      container: "map",
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-60.5937, 30.9629],
      zoom: 3,

    });
    if(props.pickupCoordinates){
          addToMap(map,props.pickupCoordinates)
        }
        if(props.dropoffCoordinates){
          addToMap(map,props.dropoffCoordinates)
        }
        if(props.pickupCoordinates && props.dropoffCoordinates){
          map.fitBounds([
             props.dropoffCoordinates,
             props.pickupCoordinates
            ],{
              padding: 60
            });
        }

  },[props.pickupCoordinates,props.dropoffCoordinates]);

  const addToMap = (map,coordinate) => {
    const marker1 = new mapboxgl.Marker()
      .setLngLat(coordinate)
      .addTo(map);
  }

    return (
        <Wrapper id = "map"></Wrapper>
    )
}

export default Map

const Wrapper = tw.div`
  flex-1 h-1/2
`