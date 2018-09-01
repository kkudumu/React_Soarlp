import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import MediaQuery from 'react-responsive';



class Header extends Component {
    render(){
        return(
            
            <div>
                <header className="masthead bg-primary text-white text-center">
                    <div className="container">
                        {/* <img className="img-fluid mb-5 d-block mx-auto" src="https://image.ibb.co/fsCruo/image1.jpg" alt="" /> */}
                        {/* <img className="img-fluid mb-5 d-block mx-auto" src="https://preview.ibb.co/ikJAhJ/Enlarged_Fall_Pic_for_landing_page.jpg" alt="" /> */}
                        <div>
        <style dangerouslySetInnerHTML={{__html: ".embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }" }} /><div className="embed-container"><iframe src="https://www.youtube.com/embed/dBqZ8GGscL8" frameBorder={0} allowFullScreen /></div>
      </div>

      <MediaQuery minDeviceWidth={480} style={{maxWidth:'100%', alignItems:'center'}}>
                        <h1 className="text-uppercase mb-0" style={{lineHeight:1, alignItems:'center'}}>Teaching Functional Fitness Saves Lives!</h1>
                        <hr className="star-light"/>
                        <h2 className="font-weight-light mb-0"><b>Presented by Mwezo Kudumu</b>, Master Trainer <hr/>
                                                                Certified/Licensed Fall Prevention Specialist
                        </h2>
        </MediaQuery>

            <MediaQuery  minDeviceWidth={480}>
            <Button href="https://my.demio.com/ref/yMKbkBpDzMba8vCi" rel="noopener noreferrer" target="_blank" variant="contained" color="primary" style={{alignItems:'center', marginTop: 50, width:300, height:50}}>
                Click Here To Register
            </Button>
            </MediaQuery>
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


