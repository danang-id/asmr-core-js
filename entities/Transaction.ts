import EntityBase from "../common/EntityBase";
import TransactionItem from "../entities/TransactionItem";
import TransactionStatus from "../enums/TransactionStatus";
import Payment from "../entities/Payment";

interface Transaction extends EntityBase {
	items: TransactionItem[];
	payment: Payment;
	status: TransactionStatus;
	userId: string;
}

export default Transaction;
