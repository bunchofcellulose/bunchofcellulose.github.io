
import createLucideIcon from '../createLucideIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name Logs
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMyA1aDEiIC8+CiAgPHBhdGggZD0iTTMgMTJoMSIgLz4KICA8cGF0aCBkPSJNMyAxOWgxIiAvPgogIDxwYXRoIGQ9Ik04IDVoMSIgLz4KICA8cGF0aCBkPSJNOCAxMmgxIiAvPgogIDxwYXRoIGQ9Ik04IDE5aDEiIC8+CiAgPHBhdGggZD0iTTEzIDVoOCIgLz4KICA8cGF0aCBkPSJNMTMgMTJoOCIgLz4KICA8cGF0aCBkPSJNMTMgMTloOCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/logs
 * @see https://lucide.dev/guide/packages/lucide-astro - Documentation
 *
 * @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * 
 */
const Logs = createLucideIcon('logs', [["path",{"d":"M3 5h1"}],["path",{"d":"M3 12h1"}],["path",{"d":"M3 19h1"}],["path",{"d":"M8 5h1"}],["path",{"d":"M8 12h1"}],["path",{"d":"M8 19h1"}],["path",{"d":"M13 5h8"}],["path",{"d":"M13 12h8"}],["path",{"d":"M13 19h8"}]]) as AstroComponent;

export default Logs;
