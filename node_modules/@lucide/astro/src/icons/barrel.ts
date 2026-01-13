
import createLucideIcon from '../createLucideIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name Barrel
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTAgM2E0MSA0MSAwIDAgMCAwIDE4IiAvPgogIDxwYXRoIGQ9Ik0xNCAzYTQxIDQxIDAgMCAxIDAgMTgiIC8+CiAgPHBhdGggZD0iTTE3IDNhMiAyIDAgMCAxIDEuNjguOTIgMTUuMjUgMTUuMjUgMCAwIDEgMCAxNi4xNkEyIDIgMCAwIDEgMTcgMjFIN2EyIDIgMCAwIDEtMS42OC0uOTIgMTUuMjUgMTUuMjUgMCAwIDEgMC0xNi4xNkEyIDIgMCAwIDEgNyAzeiIgLz4KICA8cGF0aCBkPSJNMy44NCAxN2gxNi4zMiIgLz4KICA8cGF0aCBkPSJNMy44NCA3aDE2LjMyIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/barrel
 * @see https://lucide.dev/guide/packages/lucide-astro - Documentation
 *
 * @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * 
 */
const Barrel = createLucideIcon('barrel', [["path",{"d":"M10 3a41 41 0 0 0 0 18"}],["path",{"d":"M14 3a41 41 0 0 1 0 18"}],["path",{"d":"M17 3a2 2 0 0 1 1.68.92 15.25 15.25 0 0 1 0 16.16A2 2 0 0 1 17 21H7a2 2 0 0 1-1.68-.92 15.25 15.25 0 0 1 0-16.16A2 2 0 0 1 7 3z"}],["path",{"d":"M3.84 17h16.32"}],["path",{"d":"M3.84 7h16.32"}]]) as AstroComponent;

export default Barrel;
