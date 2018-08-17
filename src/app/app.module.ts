import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GsgContentComponent } from './gsg/gsg-content/gsg-content.component';

@NgModule({
	declarations: [
		AppComponent,
		GsgContentComponent
	],
	imports: [
		BrowserModule,
		FlexLayoutModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
