import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  configUrl = 'http://127.0.0.1:5000/predictions/' ;
  fetchedRecipe: any[];

  // myObserver = {
  //   next: (response : any[])=> console.log("Your response ",response),
  //   error: (error)=>console.log(error),
  //   complete: () => console.log('Observer got a complete notification', this.fetchedRecipe),
  // };

  constructor( private http:HttpClient ) { }

  ngOnInit(): void {
    // this.getRecommendations();
  }

  getRecommendations(uid){
    // console.log(this.configUrl+uid);
    this.http.get(this.configUrl + uid).subscribe(
      (response)=> console.log(this.configUrl+uid,response),
      (error)=> console.log(error)
    );
      
      
  }
}
