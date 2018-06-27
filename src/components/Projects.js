import React, { Component, Text } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import '../App.css';



class Projects extends Component {
    render(){
        return(
  <div>
            
    <section className="portfolio" id="portfolio">
      <div className="container">
        <h2 className="text-center text-uppercase text-secondary mb-0">Why Fall Prevention?</h2>
        <hr className="star-dark mb-5" />
        <div className="row" style={{justifyContent:'center'}}>

         <h5>
This is a call to caregivers, personal trainers, and exercise instructors who want to make an even bigger difference. We are looking for people who feel the pull to contribute to their community by doing something truly impactful.  Most likely you have already felt that desire to help, which has lead you to this position for this opportunity. We want to help you grow your career and offer you tools and knowledge for a successful future. 
        </h5>

        <h2>
Stop and consider this…
        </h2>
        <br/><br/><br/><br/>
        <h5>
People falling in our country is a national epidemic.
8,000 mothers, fathers, sisters and brothers end up in the hospital every day simply because they had a fall. 2,000 of those who end up in hospitals are treated for concussions and fractures that will cause them to completely lose their quality of life and too many end up in rehab centers lonely and scared just waiting to die. We are alarmed by mass shootings and natural disasters broadcast by the media each day, but they fail to report anything about the tsunami of 3 million “preventable falls” that claim over 27,000 lives each year.  That’s 575 people that die unnecessarily each week. Please do not turn your back on these good people that need your help. 
</h5>
<br/><br/>
        <h5 style={{textAlign:'center'}}>
The authorities have been attempting to address this problem since 2005 based on research and the teaching of hundreds of classes across the country each day, but the number of people falling continues to rise.
        </h5>
        <br/><br/>
        <h2 style={{textAlign:'center'}}>
There are better and more efficient and effective ways to help people avoid falling…and I want to share them with you. 
        </h2>
        <br/><br/>
        <h5>
For over 20 years, I have been working directly with hundreds of people with high risks of falling.  The techniques I want to share with you have been developed while working directly with individuals that have a myriad of fall risk challenges, so I know what really works. 
        </h5>
        <br/>

        <h5>
In this webinar you will learn how to help people determine their overall fall risk potential by understanding when, where, why and how they fall. We will explore the value of determining each person’s functional fall risk and why intervention is necessary.  You will learn the importance of an accurate Fall Risk Assessment Tool, Functional Mobility Skills Test and our Mobility and Balance Skills Assessment Tool.  We will evaluate the difference in functional fitness training versus athletic fitness training... there is a real difference! 
        </h5>
        <br/>
        <h5>
 I believe that fall risk can only be reduced by properly trained caregivers, exercise instructors, and personal trainers working directly with people that have a risk of falling and they need you to act now.  Every minute you delay, 6 more people that you could have helped will fall.  Every 19 minutes someone dies from a “preventable fall”. 
        </h5>
        <br/><br/>
        <h2 style={{textAlign:'center'}}>
In this webinar, you will learn proven methods to build a connective, meaningful, and profitable career that will impact the lives of those in need, and the lives of the people that love them. 
        </h2>
        <br/><br/>
        <h5 style={{textAlign:'center'}}>
Sign-up now, so you do not miss this great opportunity to learn how to help save lives and/or how to earn a part-time income or build a career helping people fall proof their lives.
<br/><br/><br/><br/>
        </h5>
        
        <div style={{justifyContent:'center'}}>
        <div style={{textAlign:'center', border:'2px', borderColor:'black', borderStyle:'solid', padding:20}}>
        
        <h5 style={{color:'blue', fontWeight:'bold'}}>
        Live Presentation and Q&A
        </h5>
        <br/>
        <h5 style={{fontWeight:'bold'}}>
        Tuesday, July 24
        </h5>
        <br/>
        <h5 style={{fontWeight:'bold'}}>
        6 pm PST / Running Time approx. 1 hr
        </h5>
        </div>
        
        <Button href="https://demio.com/" rel="noopener noreferrer" target="_blank" variant="contained" color="primary" style={{marginLeft:150, marginRight:150, marginTop: 50, width:300, height:50}}>
        
        Register Here!
        
        </Button>
        </div>

      </div>
      </div>
    </section> 
    </div>
        );
    }
}

export default Projects;