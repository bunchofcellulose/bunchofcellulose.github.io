
import createLucideIcon from '../createLucideIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name Lasso
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMy43MDQgMTQuNDY3QTEwIDggMCAwIDEgMiAxMGExMCA4IDAgMCAxIDIwIDAgMTAgOCAwIDAgMS0xMCA4IDEwIDggMCAwIDEtNS4xODEtMS4xNTgiIC8+CiAgPHBhdGggZD0iTTcgMjJhNSA1IDAgMCAxLTItMy45OTQiIC8+CiAgPGNpcmNsZSBjeD0iNSIgY3k9IjE2IiByPSIyIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/lasso
 * @see https://lucide.dev/guide/packages/lucide-astro - Documentation
 *
 * @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * 
 */
const Lasso = createLucideIcon('lasso', [["path",{"d":"M3.704 14.467A10 8 0 0 1 2 10a10 8 0 0 1 20 0 10 8 0 0 1-10 8 10 8 0 0 1-5.181-1.158"}],["path",{"d":"M7 22a5 5 0 0 1-2-3.994"}],["circle",{"cx":"5","cy":"16","r":"2"}]]) as AstroComponent;

export default Lasso;
