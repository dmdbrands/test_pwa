export interface GSG {
	name: string;
	sku: string;
	description: string;
	videoUrl: string;
	faq: Faq[];
	imageUrls: string[];
	thumbnailUrl: string;
}

export interface Faq {
	question: string;
	answer: string;
}
