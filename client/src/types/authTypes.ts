export interface IAuth {
	token: string;
	user: IUser;
}

export interface IUser {
	id: number;
	name: string | null;
	username: string | null;
	role: string | null;
}

export interface IUserDetails {
	name: string;
	username: string;
	role: string;
	password: string;
	confirmPassword: string;
}
