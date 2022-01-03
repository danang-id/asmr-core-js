import GenericReleaseInformation from "./GenericReleaseInformation";
import StoreReleaseInformation from "./StoreReleaseInformation";

interface WebReleaseInformation extends GenericReleaseInformation {
	Status: StoreReleaseInformation;
}

export default WebReleaseInformation;
