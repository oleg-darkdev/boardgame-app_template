import type { BaseTranslation } from '../i18n-types';
import {} from '../../lib/shared/data/uni-i18';
import {} from '../../lib/shared/data/app-i18';
import {
	navigationEN,
	footerEN,
	ctaEN,
	heroEN,
	faqEN,
	headerEN
} from '../../lib/shared/data/landing-i18';

const EN = {
	navigation: navigationEN,
	footer: footerEN,
	hero: heroEN,
	cta: ctaEN,
	faq: faqEN,
	header: headerEN,
	app: {}
} satisfies BaseTranslation;

export default EN;
