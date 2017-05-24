import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {ListService} from './list.service';

@Component({
  selector: 'my-list',
  template: `<h1>list</h1>
  				<ul>
  					<li *ngFor="let item of list">
  						<p *ngFor="let kid of item">{{kid.name}}</p>
  					</li>
  				</ul>
  				`
})
export class ListComponent implements OnInit{ 

    public list=[];

    constructor(private listService: ListService){}
    
    loadlist(){
        this.listService.getList().subscribe((list) => {
	        var darr = list.holidays;
			for(var i in darr){
				this.list.push(darr[i]);
		    }
        });
    }

	ngOnInit(){
		this.loadlist();
	}
}