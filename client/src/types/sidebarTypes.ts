export interface ISidebar {
	id: number | string;
	title: string;
	to?: string;
	permission: string[];
	icon?: string;
	activeIcon?: string;
	child?: Array<ISidebar>;
	caption?: string;
}
