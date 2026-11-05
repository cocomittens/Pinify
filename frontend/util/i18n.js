import en from '../locales/en.json';

// Look up a dotted key (e.g. "home.emptyTitle") in the English strings.
// Falls back to the key itself if no string is found.
export const t = key => {
	const value = key.split('.').reduce((obj, part) => (obj ? obj[part] : undefined), en);
	return typeof value === 'string' ? value : key;
};
