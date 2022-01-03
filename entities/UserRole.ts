import Role from "../enums/Role";
import EntityBase from "../common/EntityBase";

interface UserRole extends EntityBase {
	role: Role;
}

export default UserRole;
