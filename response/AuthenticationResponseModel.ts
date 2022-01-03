import ResponseModelBase from "../common/ResponseModelBase";
import UserWithToken from "../entities/UserWithToken";

type AuthenticationResponseModel = ResponseModelBase<UserWithToken>;

export default AuthenticationResponseModel;
