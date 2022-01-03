export interface PackagingResultRequestModel {
	productId: string;
	quantity: number;
}

interface CreatePackagingRequestModel {
	beanId: string;
	results: PackagingResultRequestModel[];
}

export default CreatePackagingRequestModel;
