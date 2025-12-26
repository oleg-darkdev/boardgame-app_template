import type { BaseTranslation } from '../i18n-types';
import {} from '../../lib/shared/data/uni-i18';
import {} from '../../lib/shared/data/app-i18';
import {
	navigationPl,
	footerPl,
	ctaPl,
	heroPl,
	faqPl,
	headerPl
} from '../../lib/shared/data/landing-i18';

const pl = {
	navigation: navigationPl,
	footer: footerPl,
	hero: heroPl,
	cta: ctaPl,
	faq: faqPl,
	header: headerPl,
	app: {}
} satisfies BaseTranslation;

export default pl;
