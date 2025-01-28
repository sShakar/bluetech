export interface IDetectedLicensePlate {
	id: number;
	lp_number: string;
	lp_type: number;
	city: number;
	color: number;
	color_conf: number;
	body_type: number;
	body_type_conf: number;
	vehicle_position: string;
	folder: string;
	img_path: string;
	lp_position: string;
	lat: number;
	lng: number;
	fence_id: number;
	camera_id: number;
	camera_name: string;
	detection_conf: number;
	recog_conf: number;
	lp_classification_conf: number;
	detected_time: string;
	created_at: string;
	agent_id: string;
	agent_url: string;
	blacklist_num_id: number;
	whitelist_num_id: number;
}

export interface ICamera {
	id: number;
	name: string | null;
	agent_id: string | null;
	agent_cam_id: string | null;
	agent_url: string | null;
	lat: number | null;
	lng: number | null;
	rtsp_url: string | null;
	Fences: null;
}

export interface IFence {
	ID: number;
	name: string;
	count: number;
	duration: number;
	note: string;
	created_at: string;
	updated_at: string;
	deleted_at: string;
	created_by: number;
	updated_by: number;
	deleted_by: number;
	Cameras: ICamera[];
}

export interface IVehicleRoute {
	detected_license_plates: IDetectedLicensePlate[];
	path: Array<Array<Array<number>>>;
	path_errors: string[] | null;
}
