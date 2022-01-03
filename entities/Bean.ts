import EntityBase from "../common/EntityBase";
import BeanInventory from "../entities/BeanInventory";

interface Bean extends EntityBase {
	name: string;
	description: string;
	image: string;
	inventory: BeanInventory;
}

export default Bean;
