
import createLucideIcon from '../createLucideIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name Sailboat
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTAgMnYxNSIgLz4KICA8cGF0aCBkPSJNNyAyMmE0IDQgMCAwIDEtNC00IDEgMSAwIDAgMSAxLTFoMTZhMSAxIDAgMCAxIDEgMSA0IDQgMCAwIDEtNCA0eiIgLz4KICA8cGF0aCBkPSJNOS4xNTkgMi40NmExIDEgMCAwIDEgMS41MjEtLjE5M2w5Ljk3NyA4Ljk4QTEgMSAwIDAgMSAyMCAxM0g0YTEgMSAwIDAgMS0uODI0LTEuNTY3eiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/sailboat
 * @see https://lucide.dev/guide/packages/lucide-astro - Documentation
 *
 * @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * 
 */
const Sailboat = createLucideIcon('sailboat', [["path",{"d":"M10 2v15"}],["path",{"d":"M7 22a4 4 0 0 1-4-4 1 1 0 0 1 1-1h16a1 1 0 0 1 1 1 4 4 0 0 1-4 4z"}],["path",{"d":"M9.159 2.46a1 1 0 0 1 1.521-.193l9.977 8.98A1 1 0 0 1 20 13H4a1 1 0 0 1-.824-1.567z"}]]) as AstroComponent;

export default Sailboat;
