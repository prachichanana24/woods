import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

import {RestService} from '../rest.service';

@Component({
  selector: 'app-showdetail',
  templateUrl: './showdetail.component.html',
  styleUrls: ['./showdetail.component.scss']
})
export class ShowdetailComponent implements OnInit {
data: any;
total: any;
 constructor(private r:Router, private route: ActivatedRoute,private rest:RestService ) { }

  ngOnInit() {
      this.data = this.rest.getData();
      console.log(this.data);
      this.total = this.rest.getCost();
      console.log(this.total);
  }

}
