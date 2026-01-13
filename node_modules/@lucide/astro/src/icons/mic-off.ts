
import createLucideIcon from '../createLucideIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name MicOff
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgMTl2MyIgLz4KICA8cGF0aCBkPSJNMTUgOS4zNFY1YTMgMyAwIDAgMC01LjY4LTEuMzMiIC8+CiAgPHBhdGggZD0iTTE2Ljk1IDE2Ljk1QTcgNyAwIDAgMSA1IDEydi0yIiAvPgogIDxwYXRoIGQ9Ik0xOC44OSAxMy4yM0E3IDcgMCAwIDAgMTkgMTJ2LTIiIC8+CiAgPHBhdGggZD0ibTIgMiAyMCAyMCIgLz4KICA8cGF0aCBkPSJNOSA5djNhMyAzIDAgMCAwIDUuMTIgMi4xMiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/mic-off
 * @see https://lucide.dev/guide/packages/lucide-astro - Documentation
 *
 * @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * 
 */
const MicOff = createLucideIcon('mic-off', [["path",{"d":"M12 19v3"}],["path",{"d":"M15 9.34V5a3 3 0 0 0-5.68-1.33"}],["path",{"d":"M16.95 16.95A7 7 0 0 1 5 12v-2"}],["path",{"d":"M18.89 13.23A7 7 0 0 0 19 12v-2"}],["path",{"d":"m2 2 20 20"}],["path",{"d":"M9 9v3a3 3 0 0 0 5.12 2.12"}]]) as AstroComponent;

export default MicOff;
