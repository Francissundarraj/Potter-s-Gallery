import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import Heading from "./components/heading"
import Container from "./components/container"
import Banner from "./components/Banner"


const root = ReactDOM.createRoot(document.getElementById("root"))





root.render(
  <div>
    <Heading></Heading>
    <Banner></Banner>
    <Container></Container>
    
  </div>
)