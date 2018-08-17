import { Component, OnInit } from '@angular/core';

import { GSG } from '../interfaces/gsg';
import { sampleGSG } from '../sample-gsg';

@Component({
	selector: 'gsg-content',
	templateUrl: './gsg-content.component.html',
	styleUrls: ['./gsg-content.component.scss']
})
export class GsgContentComponent implements OnInit {
	gsg: GSG = sampleGSG;

	constructor() { }

	ngOnInit() {
	}

}
