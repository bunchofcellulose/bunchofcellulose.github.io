
import createLucideIcon from '../createLucideIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name ArrowBigDownDash
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTUgMTFhMSAxIDAgMCAwIDEgMWgyLjkzOWExIDEgMCAwIDEgLjc1IDEuODExbC02LjgzNSA2LjgzNmExLjIwNyAxLjIwNyAwIDAgMS0xLjcwNyAwTDQuMzEgMTMuODFhMSAxIDAgMCAxIC43NS0xLjgxMUg4YTEgMSAwIDAgMCAxLTFWOWExIDEgMCAwIDEgMS0xaDRhMSAxIDAgMCAxIDEgMXoiIC8+CiAgPHBhdGggZD0iTTkgNGg2IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/arrow-big-down-dash
 * @see https://lucide.dev/guide/packages/lucide-astro - Documentation
 *
 * @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * 
 */
const ArrowBigDownDash = createLucideIcon('arrow-big-down-dash', [["path",{"d":"M15 11a1 1 0 0 0 1 1h2.939a1 1 0 0 1 .75 1.811l-6.835 6.836a1.207 1.207 0 0 1-1.707 0L4.31 13.81a1 1 0 0 1 .75-1.811H8a1 1 0 0 0 1-1V9a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1z"}],["path",{"d":"M9 4h6"}]]) as AstroComponent;

export default ArrowBigDownDash;
