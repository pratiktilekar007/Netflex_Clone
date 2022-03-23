import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Netflix';
  data=[]

  constructor(http:HttpClient)
  {
    http.get('https://api.jikan.moe/v4/anime').subscribe((response:any)=> {
      console.log(response)
      this.data=response.data;
    })
  }
}
