import EntityBase from "../common/EntityBase";

interface IncomingGreenBean extends EntityBase {
	beanId: string;
	userId: string;
	weightAdded: number;
}

export default IncomingGreenBean;
