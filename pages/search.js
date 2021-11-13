import React, { useState } from 'react'
import tw from "tailwind-styled-components"
import Link from "next/link"

function search() {
    const [pickup, setPickup] = useState("");
    const [dropoff, setDropoff] = useState("");
    return (
        <Wrapper>
           <ButtonContainer>
            <Link href="/">
                <BackButton src="https://static.thenounproject.com/png/344330-200.png"/>
                </Link>
            </ButtonContainer>
            <InputContainer>
                <FromToIcons>
                    <Circle src="https://static.thenounproject.com/png/584014-200.png"/>
                    <Line src="https://banner2.cleanpng.com/20180421/hce/kisspng-ocr-a-clip-art-vertical-line-5adb40d0531af9.4390107215243184163404.jpg"/>
                    <Square src="https://toppng.com/uploads/preview/square-115527604300vrdl6wlrv.png"/>
                </FromToIcons>
                <InputBoxes>
                    <Input value={pickup} onChange={(e) => setPickup(e.target.value)} placeholder="Pick up place location" />
                    <Input value={dropoff} onChange={(e) => setDropoff(e.target.value)} placeholder="Where to" />
                </InputBoxes>
                <PlusIcon src="https://img.icons8.com/ios/50/000000/plus-math.png" />
            </InputContainer>
            <SavePlaces>
                <StarIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png" />
                Save Places 
            </SavePlaces>
            <Confirm>
            <Link href={{
                pathname: './confirm',
                query: {
                    pickup:pickup,
                    dropoff: dropoff
                }
            }}>
                <ConfirmLocation>
                    Confirm Location
                </ConfirmLocation>
            </Link>
            </Confirm>
        </Wrapper>
    )
}

export default search


const Wrapper = tw.div`
    bg-gray-200 h-screen 
`

const ButtonContainer = tw.div`
    bg-white px-4 
`

const BackButton = tw.img`
    h-12
`

const InputContainer = tw.div`
    bg-white flex  items-center px-4 
`
const FromToIcons = tw.div`
    w-10 flex flex-col mr-2 mb-2 items-center
`


const Circle = tw.img`
    h-2.5
`

const Line = tw.img`
    h-10
`
const Square = tw.img`
    h-3
`
const InputBoxes = tw.div`
    flex flex-col flex-1 
`
const Input = tw.input`
    h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none 
`

const PlusIcon  = tw.img`
    w-10 h-10 bg-gray-200 rounded-full ml-3 
`

const SavePlaces =tw.div`
    flex items-center bg-white px-4 py-2 
`
const StarIcon = tw.img`
    bg-gray-400 w-10 h-10 p-2 rounded-full mr-2
`
const ConfirmLocation = tw.div`
    bg-black text-white text-center p-4 border-none rounded-full cursor-pointer
`
const Confirm = tw.div`
    m-3
`