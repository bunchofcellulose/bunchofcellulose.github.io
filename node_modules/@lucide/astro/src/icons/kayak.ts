
import createLucideIcon from '../createLucideIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name Kayak
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTggMTdhMSAxIDAgMCAwLTEgMXYxYTIgMiAwIDEgMCAyLTJ6IiAvPgogIDxwYXRoIGQ9Ik0yMC45NyAzLjYxYS40NS40NSAwIDAgMC0uNTgtLjU4QzEwLjIgNi42IDYuNiAxMC4yIDMuMDMgMjAuMzlhLjQ1LjQ1IDAgMCAwIC41OC41OEMxMy44IDE3LjQgMTcuNCAxMy44IDIwLjk3IDMuNjEiIC8+CiAgPHBhdGggZD0ibTYuNzA3IDYuNzA3IDEwLjU4NiAxMC41ODYiIC8+CiAgPHBhdGggZD0iTTcgNWEyIDIgMCAxIDAtMiAyaDFhMSAxIDAgMCAwIDEtMXoiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/kayak
 * @see https://lucide.dev/guide/packages/lucide-astro - Documentation
 *
 * @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * 
 */
const Kayak = createLucideIcon('kayak', [["path",{"d":"M18 17a1 1 0 0 0-1 1v1a2 2 0 1 0 2-2z"}],["path",{"d":"M20.97 3.61a.45.45 0 0 0-.58-.58C10.2 6.6 6.6 10.2 3.03 20.39a.45.45 0 0 0 .58.58C13.8 17.4 17.4 13.8 20.97 3.61"}],["path",{"d":"m6.707 6.707 10.586 10.586"}],["path",{"d":"M7 5a2 2 0 1 0-2 2h1a1 1 0 0 0 1-1z"}]]) as AstroComponent;

export default Kayak;
