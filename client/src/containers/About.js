import React, { Component } from 'react'
import Header from "../component/Header"
import Footer from "../component/Footer"


const About  = () =>{
    return (
        <div>
              <Header />
                <div className="container col-md-5">
                <h3>สวัสดีครับ </h3>
                <p className="title text-justify mt-4 mb-4">
                    we are bester of transport
                </p>
                <h4 className="text-success">from Rat</h4>
                </div>
                <Footer company="TheSky" email="rat@rat.com" />

        </div>
    )
}

export default About