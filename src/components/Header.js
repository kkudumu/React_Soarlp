import React, { Component } from 'react';
import Button from '@material-ui/core/Button';


class Header extends Component {
    render(){
        return(
            <div>
                <header className="masthead bg-primary text-white text-center">
                    <div className="container">
                        <img className="img-fluid mb-5 d-block mx-auto" src="https://image.ibb.co/fsCruo/image1.jpg" alt="" />
                        <h1 className="text-uppercase mb-0">How I earned $100k last year teaching fall prevention</h1>
                        <hr className="star-light"/>
                        <h2 className="font-weight-light mb-0"><b>Presented by Mwezo Kudumu</b>,<hr/> Master Trainer
                                                                Certified/Licensed Fall Prevention Specialist
                        </h2>
                        <Button href="https://demio.com/" rel="noopener noreferrer" target="_blank" variant="contained" color="primary" style={{marginLeft:150, marginRight:150, marginTop: 50, width:300, height:50}}>
        
        Click Here To Register
        
        </Button>
                    </div>
                </header>
                <div className="scroll-to-top d-lg-none position-fixed ">
      <a className="js-scroll-trigger d-block text-center text-white rounded" href="#page-top">
        <i className="fa fa-chevron-up"></i>
      </a>
    </div>
            </div>
        );
    }
}

export default Header;

