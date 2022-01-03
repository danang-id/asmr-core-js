import EntityBase from "../common/EntityBase";
import BusinessAnalyticKey from "../enums/BusinessAnalyticKey";
import BusinessAnalyticReference from "../enums/BusinessAnalyticReference";

interface BusinessAnalytic extends EntityBase {
	key: BusinessAnalyticKey;
	reference: BusinessAnalyticReference;
	referenceValue: string;
	alternateReference: BusinessAnalyticReference;
	alternateReferenceValue: string;
	decimalValue: number;
	intValue: number;
	stringValue: string;
	dateTimeValue?: Date;
}

export default BusinessAnalytic;
