import User from "../entities/User";

interface UserWithToken extends User {
	token?: string;
}

export default UserWithToken;
