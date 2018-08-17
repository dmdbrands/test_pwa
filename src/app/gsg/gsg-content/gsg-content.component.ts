import {
	Component,
	ElementRef,
	OnInit,
	QueryList,
	ViewChild,
	ViewChildren
} from '@angular/core';
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

	@ViewChildren('arrow') arrows: QueryList<ElementRef>;
	@ViewChildren('content') gsgContentSections: QueryList<ElementRef>;
	@ViewChildren('menuArrow') menuArrows: QueryList<ElementRef>;
	@ViewChild('registerPopup') registerPopup: ElementRef;

	constructor(private sanitizer: DomSanitizer) { }

	ngOnInit() {
	}

	sanitizeUrl(url: string): SafeResourceUrl {
		return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${url}`);
	}

	toggleShow(selectedContent: string) {
		// sets which arrow and content section to animate
		const menuSelection = this.gsgContentSections.find(
			(menuItem) => menuItem.nativeElement.id === selectedContent
		);
		const menuArrow = this.menuArrows.find((arrow) => arrow.nativeElement.id === selectedContent);

		// height changes based on display content which is dynamic.
		const height = menuSelection.nativeElement.scrollHeight;

		// only toggles class to selected element
		if (menuArrow) {
			menuArrow.nativeElement.classList.toggle('menu-arrow-down');
		}

		// set height of element before hide class is toggled
		menuSelection.nativeElement.style.height = `${height}px`;
		// setTimeout is needed for css transitions to be properly triggered
		setTimeout(() => {
			menuSelection.nativeElement.classList.toggle('hide');
		}, 1);
		setTimeout(() => {
			// this is needed so the the container and show/shrink if a nested element is expanded
			menuSelection.nativeElement.style.height = 'auto';
		}, 410);
	}
}
