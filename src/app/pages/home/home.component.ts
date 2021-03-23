import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute,Params} from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';
import { GLOBAL } from 'src/app/services/global';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _router : Router
  ) { }

  ngOnInit(): void {
  }

}
