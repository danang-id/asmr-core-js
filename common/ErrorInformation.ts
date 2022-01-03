import ErrorCode from "../enums/ErrorCode";

interface ErrorInformation {
	code: ErrorCode;
	reason: string;
	supportId?: string;
}

export default ErrorInformation;
