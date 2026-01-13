
import createLucideIcon from '../createLucideIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name TextInitial
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTUgNWg2IiAvPgogIDxwYXRoIGQ9Ik0xNSAxMmg2IiAvPgogIDxwYXRoIGQ9Ik0zIDE5aDE4IiAvPgogIDxwYXRoIGQ9Im0zIDEyIDMuNTUzLTcuNzI0YS41LjUgMCAwIDEgLjg5NCAwTDExIDEyIiAvPgogIDxwYXRoIGQ9Ik0zLjkyIDEwaDYuMTYiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/text-initial
 * @see https://lucide.dev/guide/packages/lucide-astro - Documentation
 *
 * @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * 
 */
const TextInitial = createLucideIcon('text-initial', [["path",{"d":"M15 5h6"}],["path",{"d":"M15 12h6"}],["path",{"d":"M3 19h18"}],["path",{"d":"m3 12 3.553-7.724a.5.5 0 0 1 .894 0L11 12"}],["path",{"d":"M3.92 10h6.16"}]]) as AstroComponent;

export default TextInitial;
