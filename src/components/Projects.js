import React, { Component } from 'react';
import Button from '@material-ui/core/Button';


import '../App.css';
import shadows from '@material-ui/core/styles/shadows';



class Projects extends Component {
    render(){
        return(
  <div>
            
    <section className="portfolio" id="portfolio">
      <div className="container">
        <h2 className="text-center text-uppercase text-secondary mb-0">Why Functional Fitness?</h2>
        <hr className="star-dark mb-5" />
        <div className="row" style={{justifyContent:'center'}}>

        <h5>
        8000 Older people being hospitalized, each day, in our country is a national epidemic.  2000 treated for life-threatening concussions and/or broken bones.
        <br/><br/>
        </h5>
        
       
        <h3 style={{textAlign:'center', textShadow:'1px 1px 8px gray'}}>
        Every 19 minutes a person dies from a preventable fall. Consider...
        <br/><br/>
        </h3>

        <h5>
        Mary, who exercised most of her life had never had a fall before, was rushing to meet a friend for dinner, when she tripped on a cable in the parking lot. She got up, checked herself to make sure she was okay, and went to dinner. Two days later she fell again and this time broke her wrist and her hip. Once a picture of health, now she sits all day long housebound requiring a caregiver 24/7.                                        
        </h5>
        <br/>

        <h5>
        Harry, a fiercely independent man who lived alone, fell and broke his wrist.  That one fall changed his entire life.   Embarrassed and incapacitated by fear, he became a recluse and denied all help.   Not knowing how to cope, he deprived himself of food, water and socialization.  This caused the onset of severe dementia.   One night while trying to get up from his bed, Harry had his last fall that broke his hip and took his life.
        </h5>
        <br/>
        
        
        <h5>
        Fred had what appeared to be a non-life-threatening fall. He was unloading his car and accidentally fell backward banging his head against the wall.  He had some bruises and a minor cut on his arm that required a few stitches. Fred was mobile and active taking care of his sickly wife and their home. Two days after the fall, Fred was found lying on the floor dead due to what appeared to be a minor fall.

        </h5>
        <br/>
        <br/>

        <h3 style={{textAlign:'center', textShadow:'1px 1px 8px gray'}}>
        These three people represent the 3 million victims and families affected by falls each year.
        In the time it will take for us to do this webinar, 300 people will go to the hospital; 80 will be treated for a serious injury and 3 will die.
        <br/><br/>
        </h3>

        <h5>
        Unless we do something, this threat will continue to devastate our communities and claim more and more lives.   
        </h5>
        <br/>

        <h5>
        Think of the woman that fell in her home and laid on the floor helpless for 3 days before anyone found her just barely clinging to life. These tragedies will continue to happen over and over again until compassionate people like you and I decide to use our time and talent to teach people how to avoid falling. If we do nothing, more and more people will become disabled or die.
        </h5>
        <br/>

        <h5>
        My friends, it is extremely important that we rally together to help save lives. Since 2005, the government has been tracking this crisis and has done their best to introduce programs that are designed to reduce the number of falls. While we applause their efforts, it has not been enough to make any difference. In fact, the number of falls each year continues to rise. 
        </h5>
        <br/>

        <h5>
        Our organization has over 20 years experience teaching people with high fall risk potential.   We have developed highly successful methods and we know that we can do better than what is currently being done. 
        </h5>
        <br/>

        <h3 style={{textAlign:'center', textShadow:'1px 1px 8px gray'}}>
        We urge you to join our webinar to find out how you can help. We are seeking  fitness instructors, healthcare professionals, caretakers/caregivers, and all people who are committed to making a difference in their community.
       
        </h3>


        <h5>
        <br/>
        We work day in and day out teaching classes throughout Santa Clara County and are constantly seeking to train more and more people to go out into the community and help save lives.  
        Despite our best efforts and determination, we can only do so much.  We cannot do this alone.  We need your help.  Come join us and let’s do something worthwhile that will benefit the entire human race. 
        <br/>
        </h5>
        
     

        
        <h3 style={{textAlign:'center', textShadow:'1px 1px 8px gray'}}>
        <br/><br/>
        Please join this webinar to learn how you can help people avoid falling and save lives.
        <br/><br/>
        </h3>
        
        <div style={{justifyContent:'center'}}>
        <div style={{textAlign:'center', border:'2px', borderColor:'black', borderStyle:'solid', padding:20}}>
        
        <h5 style={{color:'blue', fontWeight:'bold'}}>
        Live Presentation and Q&A
        </h5>
        <br/>
        <h5 style={{fontWeight:'bold'}}>
        Thursday, July 26
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