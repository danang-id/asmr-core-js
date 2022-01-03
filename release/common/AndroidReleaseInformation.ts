import AppReleaseInformation from "./AppReleaseInformation";
import StoreReleaseInformation from "./StoreReleaseInformation";

interface AndroidReleaseInformation extends AppReleaseInformation {
	PlayStore: StoreReleaseInformation;
}

export default AndroidReleaseInformation;
