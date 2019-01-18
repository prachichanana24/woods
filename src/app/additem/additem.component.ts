import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';

import * as firebase from 'firebase';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.scss']
})
export class AdditemComponent implements OnInit {

action: string = "Add";
types = [];
currentKey: string = "";
    foodItemsForm = new FormGroup({
    name: new FormControl(''),
    type: new FormControl(''),
    cost: new FormControl(0)
    });
  constructor(private r:Router, private route: ActivatedRoute) { }

  ngOnInit() {
  this.currentKey = "";
    this.route.queryParams.subscribe(p => {
        console.log(p);
        if(p.name == null)
            console.log("I am null");
        else
            this.currentKey = p.key;
        if(this.currentKey == "")
            this.action = "Add";
        else
            this.action = "Edit";
        //this.foodItemsForm.controls.name.setValue(p.name);
        this.foodItemsForm.patchValue(p);
        console.log(this.foodItemsForm.value);
    });
    
    firebase.database().ref("foodtypes").on('value', resp => {
        this.types = snapshotToArray(resp);
        console.log(this.types);
    });
    
  }

    addItem()
    {
        
        console.log(this.foodItemsForm.value);
        var x = this.foodItemsForm.value;
        var typeRef = firebase.database().ref("fooditems");
        if(this.currentKey == "")
            typeRef.push(x);
        else
            typeRef.child(this.currentKey).set(x);
        this.r.navigate(['fooditems']);
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
