
import createLucideIcon from '../createLucideIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name Stamp
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTQgMTNWOC41QzE0IDcgMTUgNyAxNSA1YTMgMyAwIDAgMC02IDBjMCAyIDEgMiAxIDMuNVYxMyIgLz4KICA8cGF0aCBkPSJNMjAgMTUuNWEyLjUgMi41IDAgMCAwLTIuNS0yLjVoLTExQTIuNSAyLjUgMCAwIDAgNCAxNS41VjE3YTEgMSAwIDAgMCAxIDFoMTRhMSAxIDAgMCAwIDEtMXoiIC8+CiAgPHBhdGggZD0iTTUgMjJoMTQiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/stamp
 * @see https://lucide.dev/guide/packages/lucide-astro - Documentation
 *
 * @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * 
 */
const Stamp = createLucideIcon('stamp', [["path",{"d":"M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-6 0c0 2 1 2 1 3.5V13"}],["path",{"d":"M20 15.5a2.5 2.5 0 0 0-2.5-2.5h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1z"}],["path",{"d":"M5 22h14"}]]) as AstroComponent;

export default Stamp;
