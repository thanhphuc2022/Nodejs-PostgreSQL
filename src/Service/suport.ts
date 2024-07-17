import * as transliteration from 'transliteration';

export function convertToSlug(title: string): string {
    const titleNoDiacritics = transliteration.slugify(title, { lowercase: true });
    const encodedStr = titleNoDiacritics
        .replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
    return encodedStr;
}