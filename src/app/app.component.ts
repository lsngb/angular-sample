import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'angular-todolist';
  name:string = 'Messy';

  constructor(){
  	console.log(this.name);

  }
  changeName(name:string):void{
  	this.name = name;
  }
}

