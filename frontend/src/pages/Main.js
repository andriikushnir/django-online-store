import React, { Component } from "react";
import Products from "../components/Products";
import CapSlider from "../components/CapSlider";
import Info from "../components/Info";


class MainPage extends Component{
    render(){
        return(
            <div>
                <CapSlider/>
                <Products/>
                <Info/>
            </div>
        )
    }
}

export default MainPage