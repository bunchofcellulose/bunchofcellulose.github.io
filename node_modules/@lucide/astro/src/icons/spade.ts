
import createLucideIcon from '../createLucideIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name Spade
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgMTh2NCIgLz4KICA8cGF0aCBkPSJNMiAxNC40OTlhNS41IDUuNSAwIDAgMCA5LjU5MSAzLjY3NS42LjYgMCAwIDEgLjgxOC4wMDFBNS41IDUuNSAwIDAgMCAyMiAxNC41YzAtMi4yOS0xLjUtNC0zLTUuNWwtNS40OTItNS4zMTJhMiAyIDAgMCAwLTMtLjAyTDUgOC45OTljLTEuNSAxLjUtMyAzLjItMyA1LjUiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/spade
 * @see https://lucide.dev/guide/packages/lucide-astro - Documentation
 *
 * @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * 
 */
const Spade = createLucideIcon('spade', [["path",{"d":"M12 18v4"}],["path",{"d":"M2 14.499a5.5 5.5 0 0 0 9.591 3.675.6.6 0 0 1 .818.001A5.5 5.5 0 0 0 22 14.5c0-2.29-1.5-4-3-5.5l-5.492-5.312a2 2 0 0 0-3-.02L5 8.999c-1.5 1.5-3 3.2-3 5.5"}]]) as AstroComponent;

export default Spade;
