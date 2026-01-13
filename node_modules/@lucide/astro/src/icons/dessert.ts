
import createLucideIcon from '../createLucideIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name Dessert
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTAuMTYyIDMuMTY3QTEwIDEwIDAgMCAwIDIgMTNhMiAyIDAgMCAwIDQgMHYtMWEyIDIgMCAwIDEgNCAwdjRhMiAyIDAgMCAwIDQgMHYtNGEyIDIgMCAwIDEgNCAwdjFhMiAyIDAgMCAwIDQtLjAwNiAxMCAxMCAwIDAgMC04LjE2MS05LjgyNiIgLz4KICA8cGF0aCBkPSJNMjAuODA0IDE0Ljg2OWE5IDkgMCAwIDEtMTcuNjA4IDAiIC8+CiAgPGNpcmNsZSBjeD0iMTIiIGN5PSI0IiByPSIyIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/dessert
 * @see https://lucide.dev/guide/packages/lucide-astro - Documentation
 *
 * @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * 
 */
const Dessert = createLucideIcon('dessert', [["path",{"d":"M10.162 3.167A10 10 0 0 0 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4-.006 10 10 0 0 0-8.161-9.826"}],["path",{"d":"M20.804 14.869a9 9 0 0 1-17.608 0"}],["circle",{"cx":"12","cy":"4","r":"2"}]]) as AstroComponent;

export default Dessert;
