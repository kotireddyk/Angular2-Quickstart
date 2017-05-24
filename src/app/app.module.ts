import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import {AppComponent} from './app.component';
import {ListComponent} from './list.component';
import {ListService} from './list.service';



@NgModule({
	imports:[BrowserModule,HttpModule,JsonpModule],
	declarations:[AppComponent,ListComponent],
	providers: [ListService],
	bootstrap:[AppComponent]
})

export class AppModule{
	
}