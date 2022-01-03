import Role from "../enums/Role";

interface CreateUserRequestModel {
	firstName: string;
	lastName: string;
	emailAddress: string;
	username: string;
	password: string;
	passwordConfirmation: string;
	roles: Role[];
}

export default CreateUserRequestModel;
