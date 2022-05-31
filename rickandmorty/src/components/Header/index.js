import React from 'react'
import {Link} from 'react-router-dom'
import styled from './index.module.css'
const Header = () => {
  return (
    <nav>
       <div
      className={styled.navbar}>
          <div className={styled.img}
          style={{
          cursor: "pointer"
          }}>
            <Link to="/">
              <img src={"https://th.bing.com/th/id/R.d75a3ba582ab80e55b62d975bb3c595a?rik=q2HlmJ%2bPBP1CHA&riu=http%3a%2f%2fpngimg.com%2fuploads%2frick_morty%2frick_morty_PNG7.png&ehk=Sl8BDqTDero4QS5j3dXMX%2bFC1AXmObSgpSYDz2S8I4c%3d&risl=&pid=ImgRaw&r=0"} width="250"/>
            </Link>
            </div>
          <div className="row text-end">
            <button className={`${styled.button}`} type="button">
            <Link style={{textDecoration: "none", color:"white"}} to="/fav">
              Favorites
              </Link>
            </button>
          </div>
        </div>
    </nav>
  )
}

export default Header
