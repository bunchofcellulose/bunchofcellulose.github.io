
import createLucideIcon from '../createLucideIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name CaseLower
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTAgOXY3IiAvPgogIDxwYXRoIGQ9Ik0xNCA2djEwIiAvPgogIDxjaXJjbGUgY3g9IjE3LjUiIGN5PSIxMi41IiByPSIzLjUiIC8+CiAgPGNpcmNsZSBjeD0iNi41IiBjeT0iMTIuNSIgcj0iMy41IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/case-lower
 * @see https://lucide.dev/guide/packages/lucide-astro - Documentation
 *
 * @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * 
 */
const CaseLower = createLucideIcon('case-lower', [["path",{"d":"M10 9v7"}],["path",{"d":"M14 6v10"}],["circle",{"cx":"17.5","cy":"12.5","r":"3.5"}],["circle",{"cx":"6.5","cy":"12.5","r":"3.5"}]]) as AstroComponent;

export default CaseLower;
