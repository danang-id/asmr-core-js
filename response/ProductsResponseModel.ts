import ResponseModelBase from "../common/ResponseModelBase";
import Product from "../entities/Product";

type ProductsResponseModel = ResponseModelBase<Product[]>;

export default ProductsResponseModel;
