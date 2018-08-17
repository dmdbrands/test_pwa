import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GsgContentComponent } from './gsg/gsg-content/gsg-content.component';

@NgModule({
	declarations: [
		AppComponent,
		GsgContentComponent
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
