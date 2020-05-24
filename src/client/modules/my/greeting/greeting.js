import {LightningElement, track} from 'lwc';
import LightningElementSLDS from '../Util/SLDSElement';

export default class App extends LightningElementSLDS {
    easyTimer;  
    @track teamName; 
    @track teamScores =[];
    @track teams = []; 
    closeToast()
    {
        this.showMainDiv = false;
    }

    // eslint-disable-next-line no-useless-constructor
    constructor()
    {
        super();
        this.easyTimer = require('easytimer.js').Timer;
        this.timer = new this.easyTimer();       
        this.features = [];
            
        let item = {
            Id: 1,
            URL: 'https://image.scoopwhoop.com/w694/s4.scoopwhoop.com/anj/emojis/68e1172a-5cb2-442c-bf7a-461273e74bd9.jpg',
            Title: 'Tip Tip Barsa Pani',
            Category: 'Song',
            Zone: 'Bollywood',
            Hint:'Guess the Bollywood Song',
            IsVisible : false
          }; 
          let item1 = {
            Id : 2,
            URL: 'https://image.scoopwhoop.com/w694/s3.scoopwhoop.com/anj/ks/f4ce99c0-8321-4db9-b1c0-34eb3e5f0f14.jpg',
            Title: 'Tip Tip Barsa Pani',
            Category: 'Movie',
            Zone: 'Bollywood',
            Hint:'Guess the Bollywood Song',
            IsVisible : false
          }; 
          let item2 = {
            Id : 3,
            URL: 'https://image.scoopwhoop.com/w694/s3.scoopwhoop.com/anj/emojis/e0151de7-b90c-4fe9-b8c0-d97993fe9958.jpg',
            Title: 'Tu Cheez h badi h mast mast',
            Category: 'Song',
            Zone: 'Bollywood',
            Hint:'Guess the Bollywood Song',
            IsVisible : false
          }; 
          let item3 = {
            Id : 4,
            URL: 'https://image.scoopwhoop.com/w694/s4.scoopwhoop.com/anj/emojis/ebb6a936-cb41-4f44-9e29-d28009bfcd6f.jpg',
            Title: 'Tan Tana Tan Tan Taara',
            Category: 'Song',
            Zone: 'Bollywood',
            Hint:'Guess the Bollywood Song',
            IsVisible : false
          }; 
          
        this.features.push(item);
        this.features.push(item1);
        this.features.push(item2);
        this.features.push(item3); 

     

        this.timer.addEventListener('secondsUpdated', function () {
            this.countdown = this.timer.getTimeValues().toString();
            this.template.querySelector('.ado').play();
        }.bind(this));

        this.timer.addEventListener('targetAchieved', function () {
            this.countdown = 'TIME OUT!!';
            this.template.querySelector('.ado').pause();
            this.template.querySelector('.timeOut').play();
            setTimeout(function(){ 
                this.template.querySelector('.timeOut').pause(); 
                //alert('Your Time is out');                     
                }.bind(this), 1400);  
        }.bind(this));        
    }     
    @track countdown;
    @track showMainDiv = false;
    @track features;
    @track feature = {};
    currentScore;
    @track hintTaken = false;
    handleResult(event)
    {
        if(event.target.value ==='Correct')
        {            
         this.currentScore =  this.hintTaken ? 3 : 5; 
        }
        else{
            this.currentScore =  this.hintTaken ? -2 : 0; 
        }
        
    }    
    revealAnswer()
    {
         this.template.querySelector('.card').classList.toggle('flipped');
         return true;
    }
    handlerzonechange(event){
     this.zoneSelected = event.target.value;        
    }

    handlercategorychange(event){
        this.categorySelected = event.target.value;          
    }
    revealHint()
    {
        this.hintTaken = true;
    }
    handleTeamChange(event)
    {       
        this.teamName = event.target.value;     
    }
    start(){     
        this.sequence = 1;                       
        this.next();     
        let team = {teamName :this.teamName,points :[]}   
        this.teamScores.push(team); 
    }      

    next(){    
        this.hintTaken = false;    
        if(this.sequence > 1)        
        {        
           this.revealAnswer();                  
           this.teamScores.filter(function(item){return item.teamName === this.teamName}.bind(this))[0].points.push(this.currentScore);       
        }
        this.sequence++;
        this.feature = this.features.find(function(feature){                 
            return (feature.Zone === this.zoneSelected && feature.Category === this.categorySelected);
       }.bind(this)); 
       if(this.feature)
       {
         this.features.splice(this.features.findIndex(v=>v.Id === this.feature.Id), 1);
         this.startWatch(); 
         this.showMainDiv = true;  
       }
       else 
        this.showMainDiv = false;  

    }     

    startWatch() {          
        this.timer.start({countdown: true, startValues: {seconds: 10}}); 
        this.countdown = this.timer.getTimeValues().toString()                                                                                                                    
    }                               
}
