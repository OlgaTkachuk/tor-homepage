import React, {Component} from 'react';
import Banner from "../Components/Banner";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";

class InDevelopment extends Component {
    render() {
        return (
            <div>
                <Hero>
                    <Banner letter={"D"} title={"In Development"} subtitle={"Please come back later!"}
                            classname={"letter-home"}/>
                </Hero>
                <Footer/>
            </div>
        );
    }
}

export default InDevelopment;