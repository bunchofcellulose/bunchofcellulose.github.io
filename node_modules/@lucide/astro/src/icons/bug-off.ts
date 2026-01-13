
import createLucideIcon from '../createLucideIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name BugOff
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgMjB2LTgiIC8+CiAgPHBhdGggZD0iTTE0LjEyIDMuODggMTYgMiIgLz4KICA8cGF0aCBkPSJNMTUgNy4xM1Y2YTMgMyAwIDAgMC01LjE0LTIuMUw4IDIiIC8+CiAgPHBhdGggZD0iTTE4IDEyLjM0VjExYTQgNCAwIDAgMC00LTRoLTEuMyIgLz4KICA8cGF0aCBkPSJtMiAyIDIwIDIwIiAvPgogIDxwYXRoIGQ9Ik0yMSA1YTQgNCAwIDAgMS0zLjU1IDMuOTciIC8+CiAgPHBhdGggZD0iTTIyIDEzaC0zLjM0IiAvPgogIDxwYXRoIGQ9Ik0zIDIxYTQgNCAwIDAgMSAzLjgxLTQiIC8+CiAgPHBhdGggZD0iTTYgMTNIMiIgLz4KICA8cGF0aCBkPSJNNy43IDcuN0E0IDQgMCAwIDAgNiAxMXYzYTYgNiAwIDAgMCAxMS4xMyAzLjEzIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/bug-off
 * @see https://lucide.dev/guide/packages/lucide-astro - Documentation
 *
 * @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * 
 */
const BugOff = createLucideIcon('bug-off', [["path",{"d":"M12 20v-8"}],["path",{"d":"M14.12 3.88 16 2"}],["path",{"d":"M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2"}],["path",{"d":"M18 12.34V11a4 4 0 0 0-4-4h-1.3"}],["path",{"d":"m2 2 20 20"}],["path",{"d":"M21 5a4 4 0 0 1-3.55 3.97"}],["path",{"d":"M22 13h-3.34"}],["path",{"d":"M3 21a4 4 0 0 1 3.81-4"}],["path",{"d":"M6 13H2"}],["path",{"d":"M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13"}]]) as AstroComponent;

export default BugOff;
