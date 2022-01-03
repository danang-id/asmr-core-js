import EntityBase from "../common/EntityBase";
import RoastingCancellationReason from "../enums/RoastingCancellationReason";

interface RoastingSession extends EntityBase {
	beanId: string;
	userId: string;
	greenBeanWeight: number;
	roastedBeanWeight: number;
	cancelledAt?: Date;
	cancellationReason: RoastingCancellationReason;
	finishedAt?: Date;
}

export default RoastingSession;
