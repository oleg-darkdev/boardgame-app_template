import type { BaseTranslation } from '../i18n-types';
import {} from '../../lib/shared/data/uni-i18';
import {} from '../../lib/shared/data/app-i18';
import {
	navigationEn,
	footerEn,
	ctaEn,
	heroEn,
	faqEn,
	headerEn
} from '../../lib/shared/data/landing-i18';

const en = {
	navigation: navigationEn,
	footer: footerEn,
	hero: heroEn,
	cta: ctaEn,
	faq: faqEn,
	header: headerEn,
	app: {}
} satisfies BaseTranslation;

export default en;
