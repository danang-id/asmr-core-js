import GenericReleaseInformation from "./GenericReleaseInformation";
import StoreReleaseInformation from "./StoreReleaseInformation";

interface AppReleaseInformation extends GenericReleaseInformation {
	DirectDownload: StoreReleaseInformation;
}

export default AppReleaseInformation;
