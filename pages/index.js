// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import tw from "tailwind-styled-components"
// import mapboxgl from '!mapbox-gl'
import { useEffect,useState } from 'react'
import Map from './components/Map'
import Link from "next/link"
import {onAuthStateChanged,signOut} from "firebase/auth"
import { useRouter } from "next/router"
import {auth } from "../firebase"

export default function Home() {

  const [user, setUser] = useState(null);
  const router =useRouter()

  useEffect(() => {
    return onAuthStateChanged(auth , user =>{
      if(user){
        setUser({
          name: user.displayName,
          photoUrl : user.photoURL
        })
      } else{
        setUser(null)
        router.push('/login')
      }
    })
  }, [])

  return (
    <Wrapper>
      <Map/>
      <ActionItems>
      {/* Header */}

        <Header>
        <UberLogo src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg" alt="not" />
          <Profile>
            <Name>{user && user.name}</Name>
            <UserImage src={ user && user.photoUrl} onClick={() => signOut(auth)} alt="photo"/>
          </Profile>
        </Header>

        {/* ActiveButton */}
        <ActiveButtons>
        <Link href="/search">
          <ActiveButton>
          <ActiveButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
            Ride
          </ActiveButton>
          </Link>
          <ActiveButton>
          <ActiveButtonImage src="https://i.ibb.co/n776JLm/bike.png" />
            Wheels
          </ActiveButton>
          <ActiveButton>
          <ActiveButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
            Reserve
          </ActiveButton>
        </ActiveButtons>
        
        <InputButton>
            Where to go ?
          </InputButton>

      </ActionItems>


    </Wrapper>


  )
}

const Wrapper = tw.div`
  flex flex-col h-screen 
`

const ActionItems = tw.div`
  flex-1 p-4
`
const Header = tw.div`
  flex justify-between items-center
`
const UberLogo = tw.img`
  h-20 m-4
`


const Profile = tw.div`
  flex items-center
`

const Name = tw.div`
  mx-4 w-20 text-sm
`
const UserImage = tw.img`
  h-12 w-12 rounded-full border border-gray-200 p-3
`
const ActiveButtons = tw.div`
  flex
`
const ActiveButton = tw.div`
  flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl
`
const ActiveButtonImage = tw.img`
  h-3/5
`
const InputButton = tw.div`
  h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8 
`