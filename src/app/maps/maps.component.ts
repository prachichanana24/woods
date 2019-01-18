import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import * as firebase from 'firebase';
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
    typeRef = firebase.database().ref('orders');
    orders = [];
  constructor(private r: Router) {  }
  ngOnInit() {
   this.typeRef.on('value', x => {
    console.log(x.val());
    this.orders = snapshotToArray(x);
    console.log(this.orders);
    });
  }
  
      showNotification(from, align){
      const type = ['','info','success','warning','danger'];

      const color = Math.floor((Math.random() * 4) + 1);

      
      }
 Details(){
 this.r.navigate(['showdetail']);
 }
 }

function snapshotToArray(snapshot) {
    var returnArr = [];

    snapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;

        returnArr.push(item);
    });

    return returnArr;
};


 
