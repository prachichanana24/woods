import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';

import * as firebase from 'firebase';
@Component({
  selector: 'app-addfoodtype',
  templateUrl: './addfoodtype.component.html',
  styleUrls: ['./addfoodtype.component.scss']
})
export class AddfoodtypeComponent implements OnInit {

  action: string = "Add";
currentKey: string = "";
    foodTypeForm = new FormGroup({
    name: new FormControl('')
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
        this.foodTypeForm.patchValue(p);
        console.log(this.foodTypeForm.value);
    });
    
  }

    addType()
    {
        
        console.log(this.foodTypeForm.value);
        var x = this.foodTypeForm.value;
        var typeRef = firebase.database().ref("foodtypes");
        if(this.currentKey == "")
            typeRef.push(x);
        else
            typeRef.child(this.currentKey).set(x);
        this.r.navigate(['foodtypes']);
    }
}

                        