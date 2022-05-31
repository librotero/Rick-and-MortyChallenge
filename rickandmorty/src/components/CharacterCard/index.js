import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const StyleCharacterCardContainer = styled.div`
backgroun: green;
`

const CharacterCard = ({ character, buttonParams }) => {
  const [show, setShow] = useState(false)

  const { handlerFunction, text } = buttonParams
  const { id, image, name, status, location} = character

  const element = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const { isIntersecting } = entries[0]

      if (isIntersecting) {
        setShow(true)
        observer.disconnect()
      }
    })

    observer.observe(element.current)
  }, [element])

  return (
    <StyleCharacterCardContainer ref={element}>
      {
          <div
          style={
            {
              border: "2px solid green",
              width: "205px",
            }
          } 
          className="m-2">
            <img src={image} with="60" style={{width:"200px"}}/>
            
            <div className="m-1">
            <Link to={`/${id}`}><h4>{name}</h4></Link>
            <br />
            <h7 style={{color: 'white'}}>status</h7>
            <h5 style={{color: 'white'}}>{status}</h5>
            <h7 style={{color: 'white'}}>location</h7>
            <h5 style={{color: 'white'}}>{location.name}</h5>

            <br />
            <div className="text-center">
            <button style={{
            color:"black",
            cursor: "pointer",
            border: "none"
            }}
            className="text-center mb-2 btn btn-primary" 
            onClick={() => handlerFunction(character)}>
              {text}
            </button>
            </div>
            </div>
          </div>
      }
    </StyleCharacterCardContainer>
  )
}

CharacterCard.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  buttonParams: PropTypes.shape({
    handlerFunction: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
  })
}

export default CharacterCard
