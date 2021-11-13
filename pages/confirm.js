import React,{ useEffect,useState} from 'react'
import Map from './components/Map'
import tw from "tailwind-styled-components"
import { useRouter } from "next/router"
import RideSelector from "./components/RideSelector"
import Link from "next/link"

function Confirm() {
    const router = useRouter();

    const { pickup, dropoff} = router.query

    const [pickupCoordinates, setPickupCoordinates] = useState([0,0]);
    const [dropoffCoordinates, setDropoffCoordinates] = useState([0,0]);

    const getCoordinates = (pickup) =>{
    
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?`+ 
            new URLSearchParams({
                access_token: "pk.eyJ1IjoiZGV2ZXNodHJpcGF0aGkiLCJhIjoiY2t0Mnc1cTdlMG9lbjMwcjJ2NGZjcjJocSJ9.XQWKwh5CUHN6JLyWHuNcYg"
            })
        )
        .then(response => response.json())
        .then(data => {
          setPickupCoordinates(data.features[0].center);
        })
      }

      const getDropCoordinates= (dropoff) =>{
    
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?`+ 
            new URLSearchParams({
                access_token: "pk.eyJ1IjoiZGV2ZXNodHJpcGF0aGkiLCJhIjoiY2t0Mnc1cTdlMG9lbjMwcjJ2NGZjcjJocSJ9.XQWKwh5CUHN6JLyWHuNcYg"
            })
        )
        .then(response => response.json())
        .then(data => {
          setDropoffCoordinates(data.features[0].center)
        })
      }

      useEffect(() => {
          getCoordinates(pickup);
          getDropCoordinates(dropoff);
      }, [pickup,dropoff])

    return (
        <Wrapper>
            <ButtonContainer>
                <Link href="/search">
                    <BackButton src="https://www.pinclipart.com/picdir/big/544-5440422_back-arrow-icon-transparent-png-clipart-free-download.png" />
                </Link>
            </ButtonContainer>
            <Map
                pickupCoordinates={pickupCoordinates}
                dropoffCoordinates={dropoffCoordinates}
            />
            <RightContainer>
                
                <RideSelector
                    pickupCoordinates={pickupCoordinates}
                dropoffCoordinates={dropoffCoordinates}
                />
                    
                <ConfirmButtonContainer>
                <ConfirmButton>
                Confirm Button
                </ConfirmButton>
                
                </ConfirmButtonContainer>
            </RightContainer>
        </Wrapper>
    )
}

export default Confirm

const ButtonContainer = tw.div`
rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer  p-2
`

const BackButton = tw.img`
h-8 object-contain 
`

const ConfirmButton = tw.div`
bg-black text-white my-4 mx-4 py-4 text-center text-xl
`

const ConfirmButtonContainer = tw.div`
 border-t-2
`

const Wrapper = tw.div`
flex h-screen flex-col
`
const RightContainer = tw.div`
    flex-1 flex flex-col h-1/2
`