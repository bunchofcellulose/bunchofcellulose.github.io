
import createLucideIcon from '../createLucideIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name ListEnd
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTYgNUgzIiAvPgogIDxwYXRoIGQ9Ik0xNiAxMkgzIiAvPgogIDxwYXRoIGQ9Ik05IDE5SDMiIC8+CiAgPHBhdGggZD0ibTE2IDE2LTMgMyAzIDMiIC8+CiAgPHBhdGggZD0iTTIxIDV2MTJhMiAyIDAgMCAxLTIgMmgtNiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/list-end
 * @see https://lucide.dev/guide/packages/lucide-astro - Documentation
 *
 * @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * 
 */
const ListEnd = createLucideIcon('list-end', [["path",{"d":"M16 5H3"}],["path",{"d":"M16 12H3"}],["path",{"d":"M9 19H3"}],["path",{"d":"m16 16-3 3 3 3"}],["path",{"d":"M21 5v12a2 2 0 0 1-2 2h-6"}]]) as AstroComponent;

export default ListEnd;
