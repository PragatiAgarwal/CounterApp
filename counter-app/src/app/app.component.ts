import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Counter!!';

  count: number = 0;
  onClickIncrease(){
    if(this.count < 10){
      this.count = this.count + 1;
    }
  }

  onClickDecrease(){
    if(this.count >= 1){
      this.count = this.count -1;
    }
    
  }

  onClickReset(){
    this.count = 0;
  }

}
