import type { BaseTranslation } from '../i18n-types';
import {} from '../../lib/shared/data/uni-i18';
import {} from '../../lib/shared/data/app-i18';
import {
	navigationRu,
	footerRu,
	ctaRu,
	heroRu,
	faqRu,
	headerRu
} from '../../lib/shared/data/landing-i18';

const ru = {
	navigation: navigationRu,
	footer: footerRu,
	hero: heroRu,
	cta: ctaRu,
	faq: faqRu,
	header: headerRu,
	app: {}
} satisfies BaseTranslation;

export default ru;
