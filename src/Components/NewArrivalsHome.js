import React, {Component} from 'react';

import prod1_home from '../assets/prod1_home.png'
import prod2_home from '../assets/prod2_home.png'
import prod3_home from '../assets/prod3_home.png'
import Carousel from 'nuka-carousel';
import Media from 'react-media';

class NewArrivalsHome extends Component {

    render() {

        return (
            <div>
                <Media query="(max-width: 599px)">
                    {matches =>
                        matches ? (
                            <section className="new-arr-section">
                                <h1 className="section-title new-arr-title">New Arrivals</h1>
                                <hr className="hr-same new-arr-hr"/>
                                    <Carousel slideWidth="300" cellAlign='center' withoutControls={true}>
                                        <div className="new-arr-card new-arr-card-mob">
                                            <div className="new-arr-img-container">
                                                <img src={prod1_home} className="new-arr-img"/>
                                            </div>
                                            <h2 className="new-arr-name">Mouth-blown Vase</h2>
                                            <p className="new-arr-code">A5679</p>
                                        </div>
                                        <div  className="new-arr-card">
                                            <div className="new-arr-img-container">
                                                <img src={prod2_home} className="new-arr-img"/>
                                            </div>
                                            <h2 className="new-arr-name">Mouth-blown Vase</h2>
                                            <p className="new-arr-code">A5679</p>
                                        </div>
                                        <div  className="new-arr-card">
                                            <div className="new-arr-img-container">
                                                <img src={prod3_home} className="new-arr-img"/>
                                            </div>
                                            <h2 className="new-arr-name">Mouth-blown Vase</h2>
                                            <p className="new-arr-code">A5679</p>
                                        </div>
                                    </Carousel>

                            </section>
                        ) : (
                            <section className="new-arr-section">
                                <h1 className="section-title new-arr-title">New Arrivals</h1>
                                <hr className="hr-same new-arr-hr"/>

                                <div className="new-arr-container">
                                    <div id={1} className={"new-arr-card card-1"}>
                                        <div className="new-arr-img-container">
                                            <img src={prod1_home} className="new-arr-img"/>
                                        </div>
                                        <h2 className="new-arr-name">Mouth-blown Vase</h2>
                                        <p className="new-arr-code">G271</p>
                                    </div>
                                    {/*<div className="button-new-arr button-hide" ><FaChevronLeft size={40} color="#d4d4dc" onClick={this.state.handleClickLeft}/></div>*/}
                                    <div id={2} className="new-arr-card card-2">
                                        <div className="new-arr-img-container">
                                            <img src={prod2_home} className="new-arr-img"/>
                                        </div>
                                        <h2 className="new-arr-name">Mouth-blown Vase</h2>
                                        <p className="new-arr-code">G365</p>
                                    </div>
                                    {/*<div className="button-new-arr button-hide"><FaChevronRight size={40} color="#d4d4dc"/></div>*/}
                                    <div id={3} className="new-arr-card card-3">
                                        <div className="new-arr-img-container">
                                            <img src={prod3_home} className="new-arr-img"/>
                                        </div>
                                        <h2 className="new-arr-name">Mouth-blown Vase</h2>
                                        <p className="new-arr-code">G398</p>
                                    </div>
                                </div>

                            </section>
                        )
                    }
                </Media>
            </div>


        );
    }
}

export default NewArrivalsHome;