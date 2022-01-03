import EntityBase from "../common/EntityBase";
import PackagingResult from "../entities/PackagingResult";

interface Packaging extends EntityBase {
	beanId: string;
	userId: string;
	results: PackagingResult[];
}

export default Packaging;
