import EntityBase from "../common/EntityBase";
import PaymentMethod from "../enums/PaymentMethod";
import PaymentStatus from "../enums/PaymentStatus";

interface Payment extends EntityBase {
	method: PaymentMethod;
	status: PaymentStatus;
	amount: number;
}

export default Payment;
