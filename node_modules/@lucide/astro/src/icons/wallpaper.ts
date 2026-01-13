
import createLucideIcon from '../createLucideIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name Wallpaper
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgMTd2NCIgLz4KICA8cGF0aCBkPSJNOCAyMWg4IiAvPgogIDxwYXRoIGQ9Im05IDE3IDYuMS02LjFhMiAyIDAgMCAxIDIuODEuMDFMMjIgMTUiIC8+CiAgPGNpcmNsZSBjeD0iOCIgY3k9IjkiIHI9IjIiIC8+CiAgPHJlY3QgeD0iMiIgeT0iMyIgd2lkdGg9IjIwIiBoZWlnaHQ9IjE0IiByeD0iMiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/wallpaper
 * @see https://lucide.dev/guide/packages/lucide-astro - Documentation
 *
 * @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * 
 */
const Wallpaper = createLucideIcon('wallpaper', [["path",{"d":"M12 17v4"}],["path",{"d":"M8 21h8"}],["path",{"d":"m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15"}],["circle",{"cx":"8","cy":"9","r":"2"}],["rect",{"x":"2","y":"3","width":"20","height":"14","rx":"2"}]]) as AstroComponent;

export default Wallpaper;
