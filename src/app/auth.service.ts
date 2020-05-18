import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AngularFireAuth } from '@angular/fire/auth'; 
import * as firebase from 'firebase/app';
import {Observable, from} from 'rxjs'
import { DashboardComponent } from './dashboard/dashboard.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user : Observable<firebase.User>;
  configUrl = 'http://localhost:5000/createUser/';
  configGetUrl= 'http://localhost:5000/getUser/';
  fetchedUser: any[];

  constructor(private firebaseAuth:AngularFireAuth , private http: HttpClient , private Dashboard:DashboardComponent) {
      this.user = this.firebaseAuth.authState;
      
   }

   signup(email :string ,password: string){
     this.firebaseAuth.createUserWithEmailAndPassword(email,password).then(value =>{
       console.log("Successfully Registered :",value);
       this.createInternalUser(value.user.uid); 
     }).catch(err=>{
       console.log("Something went wrong", err.message);
     });
   }
  createInternalUser(uid: string) {
    this.http.get(this.configUrl + uid).subscribe(
      (response :any[])=>console.log(response),
      (error)=> console.log(error)
    );
  }

   login(email: string, password: string){
     this.firebaseAuth.signInWithEmailAndPassword(email,password).then(value=>{
       console.log("Logged in successfully",value);
       console.log("Getting users");
       this.getUser(value.user.uid);
       console.log("Fetching user",this.fetchedUser);
     }).catch(err=>{
       console.log("Error occured while logging",err.message);
     });
   }

   logout(){
     this.firebaseAuth.signOut();
   }

   getUser(uid: string){
     this.http.get(this.configGetUrl + '\'' +  uid + '\'').subscribe(
       (response:any[])=>this.Dashboard.getRecommendations(response[0]),
       (error)=>console.log("Error occured while fetching")
     );
   }
}
