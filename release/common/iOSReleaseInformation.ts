import AppReleaseInformation from "./AppReleaseInformation";
import StoreReleaseInformation from "./StoreReleaseInformation";

interface iOSReleaseInformation extends AppReleaseInformation {
	AppStore: StoreReleaseInformation;
}

export default iOSReleaseInformation;
