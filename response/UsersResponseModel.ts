import ResponseModelBase from "../common/ResponseModelBase";
import User from "../entities/User";

type UsersResponseModel = ResponseModelBase<User[]>;

export default UsersResponseModel;
