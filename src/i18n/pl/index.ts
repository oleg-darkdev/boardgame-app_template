import type { BaseTranslation } from '../i18n-types';
import {} from '../../lib/shared/data/uni-i18';
import {} from '../../lib/shared/data/app-i18';
import {
	navigationPL,
	footerPL,
	ctaPL,
	heroPL,
	faqPL,
	headerPL
} from '../../lib/shared/data/landing-i18';

const PL = {
	navigation: navigationPL,
	footer: footerPL,
	hero: heroPL,
	cta: ctaPL,
	faq: faqPL,
	header: headerPL,
	app: {}
} satisfies BaseTranslation;

export default PL;
