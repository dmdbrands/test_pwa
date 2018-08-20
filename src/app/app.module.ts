import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { GsgContentComponent } from './gsg/gsg-content/gsg-content.component';

@NgModule({
	declarations: [
		AppComponent,
		GsgContentComponent
	],
	imports: [
		BrowserModule,
		FlexLayoutModule,
		ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
