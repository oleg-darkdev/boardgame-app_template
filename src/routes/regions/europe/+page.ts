import type { PageLoad } from './$types';
import { groupsListEurope } from '$sharedData';

export const load: PageLoad = () => {
	return {
		groupsListEurope
	};
};
