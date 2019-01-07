import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-foodtype',
  templateUrl: './foodtype.component.html',
  styleUrls: ['./foodtype.component.scss']
})
export class FoodtypeComponent implements OnInit {

typeRef = firebase.database().ref("foodtypes");
headers = ["Id","Name","Edit","Delete"];
types = [{"id":"1", "name":"Snacks"},
         {"id":"2", "name":"Chinese"}];
  constructor() { 
    this.typeRef.on('value', x => {
    console.log(x.val());
    this.types = x.val();
    console.log(this.types);
    });
  }

  ngOnInit() {
  }

}
