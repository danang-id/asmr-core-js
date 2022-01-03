import EntityBase from "../common/EntityBase";

interface BeanInventory extends EntityBase {
	currentGreenBeanWeight: number;
	currentRoastedBeanWeight: number;
}

export default BeanInventory;
