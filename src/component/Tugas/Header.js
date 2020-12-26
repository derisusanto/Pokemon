import React from "react";
import { Button, Col, Row, Container } from "reactstrap"

const Header = () => {


  return (

    <>
      <div className="row" style={{ paddingBottom: 20 }}>
        <Container style={{ backgroundColor: "Darkorange" }} className="themed-container" fluid="sm">
          <img src="https://pokeapi.co/static/pokeapi_256.888baca4.png" />
        </Container>

      </div>

    </>
  )
}
export default Header;