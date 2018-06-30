
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';


class Contact extends Component {
    render(){
        return(
            <div>
<section id="contact">
      <div className="container">
        <h2 className="text-center text-uppercase text-secondary mb-0">Contact Us</h2>
        <hr className="star-dark mb-5"/>
        <div className="row">
          <div className="col-lg-8 mx-auto text-center" >
          <Grid container spacing={24} style={{fontSize: '30px', fontFamily: 'Anton', display:'inline-block', width:'280px', justifyContent:'center', textAlign:'center'}}>
                            <Grid item xs={12} style={{fontSize: '30px', fontFamily: 'Anton', width:'500px'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>
                                    &nbsp;  Phone: <br/>(408) 315-1179
                                
                            </Grid>

                            
                                <Grid item xs={12} style={{ fontSize: '30px', fontFamily: 'Anton', display:'inline-block', width:'500px'}}>
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                               &nbsp; Email: 
                               
                              
                            
                                </Grid>

                        </Grid>  
                        <div style={{ fontSize: '30px', fontFamily: 'Anton', display:'inline-block', width:'500px', paddingLeft:25}}>
                        <a href="mailto:info@soarfallprevention.com?Subject=Requesting Information" target="_top">info@soarfallprevention.com</a> 
                                </div>
                                             
            
          </div>
        </div>
      </div>
    </section>
            </div>
        );
    }
}

export default Contact;
