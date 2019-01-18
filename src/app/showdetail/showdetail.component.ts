import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-showdetail',
  templateUrl: './showdetail.component.html',
  styleUrls: ['./showdetail.component.scss']
})
export class ShowdetailComponent implements OnInit {

 constructor(private r:Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
