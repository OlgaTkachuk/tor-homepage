import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class DesignBlock extends Component {
    render() {
        return (
            <>
                <section className="design-wrapper">
                    <div className="design-text">
                        <p> Our range of technological possibilities enable the individual production according to the
                            client's requirements and orders. We are always ready to incarnate all your ideas in glass!
                            Why not turn your fantasy into reality?
                        </p>
                        {/*<Link to="/custom" className="button-dark design-button">Explore</Link>*/}
                    </div>
                    <div className="design-title">
                        <h1>Design your item</h1>
                        <hr className="hr-same design-hr"/>
                        <h3>D</h3>
                    </div>
                </section>
                <div className="design-mobile-wrapper">
                    <div className="design-text-mobile">
                        <p> Our range of technological possibilities enable the individual production according to the
                            client's requirements and orders. We are always ready to incarnate all your ideas in glass!
                            Why not turn your fantasy into reality?
                        </p>
                    </div>
                </div>
            </>
        );
    }
}

export default DesignBlock;