import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { GSG } from '../interfaces/gsg';
import { sampleGSG } from '../sample-gsg';

@Component({
	selector: 'gsg-content',
	templateUrl: './gsg-content.component.html',
	styleUrls: ['./gsg-content.component.scss']
})
export class GsgContentComponent implements OnInit {
	gsg: GSG = sampleGSG;

	constructor(private sanitizer: DomSanitizer) { }

	ngOnInit() {
	}

	sanitizeUrl(url: string): SafeResourceUrl {
		return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${url}`);
	}
}
