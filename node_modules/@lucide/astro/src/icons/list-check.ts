
import createLucideIcon from '../createLucideIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name ListCheck
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTYgNUgzIiAvPgogIDxwYXRoIGQ9Ik0xNiAxMkgzIiAvPgogIDxwYXRoIGQ9Ik0xMSAxOUgzIiAvPgogIDxwYXRoIGQ9Im0xNSAxOCAyIDIgNC00IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/list-check
 * @see https://lucide.dev/guide/packages/lucide-astro - Documentation
 *
 * @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * 
 */
const ListCheck = createLucideIcon('list-check', [["path",{"d":"M16 5H3"}],["path",{"d":"M16 12H3"}],["path",{"d":"M11 19H3"}],["path",{"d":"m15 18 2 2 4-4"}]]) as AstroComponent;

export default ListCheck;
