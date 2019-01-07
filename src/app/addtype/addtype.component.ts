import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-addtype',
  templateUrl: './addtype.component.html',
  styleUrls: ['./addtype.component.scss']
})
export class AddtypeComponent implements OnInit {

    foodTypeForm = new FormGroup({
    name: new FormControl('')
    });
  constructor() { }

  ngOnInit() {
  }

    addType()
    {
        console.log(this.foodTypeForm.value);
    }
}
