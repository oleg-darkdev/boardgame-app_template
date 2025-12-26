import type { BaseTranslation } from '../i18n-types';
import {} from '../../lib/shared/data/uni-i18';
import {} from '../../lib/shared/data/app-i18';
import {
	navigationRU,
	footerRU,
	ctaRU,
	heroRU,
	faqRU,
	headerRU
} from '../../lib/shared/data/landing-i18';

const RU = {
	navigation: navigationRU,
	footer: footerRU,
	hero: heroRU,
	cta: ctaRU,
	faq: faqRU,
	header: headerRU,
	app: {}
} satisfies BaseTranslation;

export default RU;
