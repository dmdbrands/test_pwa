export interface GSG {
	name: string;
	sku: string;
	desciption: string;
	videoUrl: string;
	faq: Faq[];
	imageUrls: string[];
	thumbnailUrl: string;
}

export interface Faq {
	question: string;
	answer: string;
}
