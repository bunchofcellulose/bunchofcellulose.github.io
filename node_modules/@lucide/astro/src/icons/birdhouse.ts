
import createLucideIcon from '../createLucideIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name Birdhouse
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgMTh2NCIgLz4KICA8cGF0aCBkPSJtMTcgMTggMS45NTYtMTEuNDY4IiAvPgogIDxwYXRoIGQ9Im0zIDggNy44Mi01LjYxNWEyIDIgMCAwIDEgMi4zNiAwTDIxIDgiIC8+CiAgPHBhdGggZD0iTTQgMThoMTYiIC8+CiAgPHBhdGggZD0iTTcgMTggNS4wNDQgNi41MzIiIC8+CiAgPGNpcmNsZSBjeD0iMTIiIGN5PSIxMCIgcj0iMiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/birdhouse
 * @see https://lucide.dev/guide/packages/lucide-astro - Documentation
 *
 * @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * 
 */
const Birdhouse = createLucideIcon('birdhouse', [["path",{"d":"M12 18v4"}],["path",{"d":"m17 18 1.956-11.468"}],["path",{"d":"m3 8 7.82-5.615a2 2 0 0 1 2.36 0L21 8"}],["path",{"d":"M4 18h16"}],["path",{"d":"M7 18 5.044 6.532"}],["circle",{"cx":"12","cy":"10","r":"2"}]]) as AstroComponent;

export default Birdhouse;
