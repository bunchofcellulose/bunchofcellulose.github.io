
import createLucideIcon from '../createLucideIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name PanelLeftRightDashed
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTUgMTBWOSIgLz4KICA8cGF0aCBkPSJNMTUgMTV2LTEiIC8+CiAgPHBhdGggZD0iTTE1IDIxdi0yIiAvPgogIDxwYXRoIGQ9Ik0xNSA1VjMiIC8+CiAgPHBhdGggZD0iTTkgMTBWOSIgLz4KICA8cGF0aCBkPSJNOSAxNXYtMSIgLz4KICA8cGF0aCBkPSJNOSAyMXYtMiIgLz4KICA8cGF0aCBkPSJNOSA1VjMiIC8+CiAgPHJlY3QgeD0iMyIgeT0iMyIgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiByeD0iMiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/panel-left-right-dashed
 * @see https://lucide.dev/guide/packages/lucide-astro - Documentation
 *
 * @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * 
 */
const PanelLeftRightDashed = createLucideIcon('panel-left-right-dashed', [["path",{"d":"M15 10V9"}],["path",{"d":"M15 15v-1"}],["path",{"d":"M15 21v-2"}],["path",{"d":"M15 5V3"}],["path",{"d":"M9 10V9"}],["path",{"d":"M9 15v-1"}],["path",{"d":"M9 21v-2"}],["path",{"d":"M9 5V3"}],["rect",{"x":"3","y":"3","width":"18","height":"18","rx":"2"}]]) as AstroComponent;

export default PanelLeftRightDashed;
