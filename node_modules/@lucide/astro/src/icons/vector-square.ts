
import createLucideIcon from '../createLucideIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name VectorSquare
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTkuNSA3YTI0IDI0IDAgMCAxIDAgMTAiIC8+CiAgPHBhdGggZD0iTTQuNSA3YTI0IDI0IDAgMCAwIDAgMTAiIC8+CiAgPHBhdGggZD0iTTcgMTkuNWEyNCAyNCAwIDAgMCAxMCAwIiAvPgogIDxwYXRoIGQ9Ik03IDQuNWEyNCAyNCAwIDAgMSAxMCAwIiAvPgogIDxyZWN0IHg9IjE3IiB5PSIxNyIgd2lkdGg9IjUiIGhlaWdodD0iNSIgcng9IjEiIC8+CiAgPHJlY3QgeD0iMTciIHk9IjIiIHdpZHRoPSI1IiBoZWlnaHQ9IjUiIHJ4PSIxIiAvPgogIDxyZWN0IHg9IjIiIHk9IjE3IiB3aWR0aD0iNSIgaGVpZ2h0PSI1IiByeD0iMSIgLz4KICA8cmVjdCB4PSIyIiB5PSIyIiB3aWR0aD0iNSIgaGVpZ2h0PSI1IiByeD0iMSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/vector-square
 * @see https://lucide.dev/guide/packages/lucide-astro - Documentation
 *
 * @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * 
 */
const VectorSquare = createLucideIcon('vector-square', [["path",{"d":"M19.5 7a24 24 0 0 1 0 10"}],["path",{"d":"M4.5 7a24 24 0 0 0 0 10"}],["path",{"d":"M7 19.5a24 24 0 0 0 10 0"}],["path",{"d":"M7 4.5a24 24 0 0 1 10 0"}],["rect",{"x":"17","y":"17","width":"5","height":"5","rx":"1"}],["rect",{"x":"17","y":"2","width":"5","height":"5","rx":"1"}],["rect",{"x":"2","y":"17","width":"5","height":"5","rx":"1"}],["rect",{"x":"2","y":"2","width":"5","height":"5","rx":"1"}]]) as AstroComponent;

export default VectorSquare;
