import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  id1: string | null | undefined;
  img1: string | null | undefined;

  id2: string | null | undefined;
  img2: string | null | undefined;

  id3: string | null | undefined;
  img3: string | null | undefined;

  id4: string | null | undefined;
  img4: string | null | undefined;

  id5: string | null | undefined;
  img5: string | null | undefined;

 


  
  constructor(private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void { 
    this.id1=this._Activatedroute.snapshot.paramMap.get("id");
    this.img1=this._Activatedroute.snapshot.paramMap.get("img");

    this.id2=this._Activatedroute.snapshot.paramMap.get("id");
    this.img2=this._Activatedroute.snapshot.paramMap.get("img");

    this.id3=this._Activatedroute.snapshot.paramMap.get("id");
    this.img3=this._Activatedroute.snapshot.paramMap.get("img");

    this.id4=this._Activatedroute.snapshot.paramMap.get("id");
    this.img4=this._Activatedroute.snapshot.paramMap.get("img");

    this.id5=this._Activatedroute.snapshot.paramMap.get("id");
    this.img5=this._Activatedroute.snapshot.paramMap.get("img");
    
       

  }

}
