import {LightningElement, track} from 'lwc';
import LightningElementSLDS from '../Util/SLDSElement';
import {listItems , timeLimit} from '../dataContent'

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
        //alert(timeLimit); 
        this.easyTimer = require('easytimer.js').Timer;         
        this.timer = new this.easyTimer();       
        this.features = listItems;           
        
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
         this.template.querySelector('.card').classList.toggle('flipped');
    }   
   startTimer(){
        this.startWatch(); 
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
           //this.revealAnswer();                  
           this.teamScores.filter(function(item){return item.teamName === this.teamName}.bind(this))[0].points.push(this.currentScore);       
        }
        this.sequence++;
        this.feature = this.features.find(function(feature){                 
            return (feature.Zone === this.zoneSelected && feature.Category === this.categorySelected);
       }.bind(this)); 
       if(this.feature)
       {
         this.features.splice(this.features.findIndex(v=>v.Id === this.feature.Id), 1);
        // this.startWatch(); 
         this.showMainDiv = true;  
       }
       else 
        this.showMainDiv = false;  

    }     

    startWatch() {          
        this.timer.start({countdown: true, startValues: {seconds: timeLimit}}); 
        this.countdown = this.timer.getTimeValues().toString()                                                                                                                    
    }                               
}
