import EntityBase from "../common/EntityBase";
import Product from "../entities/Product";

interface PackagingResult extends EntityBase {
	product: Product;
	quantity: number;
}

export default PackagingResult;
