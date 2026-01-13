
import createLucideIcon from '../createLucideIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name CaseUpper
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTUgMTFoNC41YTEgMSAwIDAgMSAwIDVoLTRhLjUuNSAwIDAgMS0uNS0uNXYtOWEuNS41IDAgMCAxIC41LS41aDNhMSAxIDAgMCAxIDAgNSIgLz4KICA8cGF0aCBkPSJtMiAxNiA0LjAzOS05LjY5YS41LjUgMCAwIDEgLjkyMyAwTDExIDE2IiAvPgogIDxwYXRoIGQ9Ik0zLjMwNCAxM2g2LjM5MiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/case-upper
 * @see https://lucide.dev/guide/packages/lucide-astro - Documentation
 *
 * @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * 
 */
const CaseUpper = createLucideIcon('case-upper', [["path",{"d":"M15 11h4.5a1 1 0 0 1 0 5h-4a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h3a1 1 0 0 1 0 5"}],["path",{"d":"m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16"}],["path",{"d":"M3.304 13h6.392"}]]) as AstroComponent;

export default CaseUpper;
