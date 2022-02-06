import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import './LandingPage.css'

const LandingPage = () => {
  return (
    <div className="main">
      <Container>
          <Row>
              <Col>
                <div className="intro-text">
                    <div>
                        <h1 className="title">Intro to iNotes</h1>
                        <p className="subtitle"> One Place to keep your Notes Online</p>
                    </div>
                    <div class="buttonContainer">
                        <a href="/login">
                            <Button size="lg" className="landingButton">Login</Button>
                        </a>
                        <a href="/register">
                            <Button size="lg" variant="outline-primary" className="landingButton">Register</Button>
                        </a>
                    </div>
                </div>
              </Col>
          </Row>
      </Container>
    </div>
  )
}

export default LandingPage
