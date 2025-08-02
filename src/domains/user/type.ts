import type { Profile } from "../profile/type";

export type User = {
	id: string;
	email: string;
	password: string;
	profile: Profile;
};
