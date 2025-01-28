import type { IUser } from '@/types/authTypes';
import type { IFence, IDetectedLicensePlate } from '@/types/appTypes';

export interface IPaginationInfo {
	total_rows: number | null;
	total_pages: number | null;
	current_page: number | null;
	prev_page: number | null;
	next_page: number | null;
	start_row: number | null;
	end_row: number | null;
}
