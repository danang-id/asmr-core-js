import EntityBase from "../common/EntityBase";

interface TransactionItem extends EntityBase {
	transactionId: string;
	productId: string;
	quantity: number;
	price: number;
}

export default TransactionItem;
