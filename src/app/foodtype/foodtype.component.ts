import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-foodtype',
  templateUrl: './foodtype.component.html',
  styleUrls: ['./foodtype.component.scss']
})
export class FoodtypeComponent implements OnInit {

typeRef = firebase.database().ref("foodtypes");
headers = ["Id","Name","Edit","Delete"];
types = [];
  constructor(private r: Router) { 
   
  }

  ngOnInit() {
   this.typeRef.on('value', x => {
    console.log(x.val());
    this.types = snapshotToArray(x);
    console.log(this.types);
    });
  }
  
  deleteType(t)
  {
    console.log(t.key);
    this.typeRef.child(t.key).remove();
  }
  
  editType(t)
  {
    var obj: any = {};
    obj.queryParams = t;
    console.log(obj);
    this.r.navigate(['addtype'], obj);
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
