import { LightningElement,track} from 'lwc';
export default class Greeting extends LightningElement {
    
   @track todoItems = [
        { taskId: 1, taskDetails: 'Write Story' },
        { taskId: 2, taskDetails: 'Build Framework' }
    ];
    id= 2;
    addToList() {
        var item = this.template.querySelector('input').value;
        this.id= this.id+1;     
        this.todoItems.push({taskId : this.id, taskDetails : item});
        this.template.querySelector('input').value = ''
    }
}
