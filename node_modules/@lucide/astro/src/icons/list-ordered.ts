
import createLucideIcon from '../createLucideIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name ListOrdered
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTEgNWgxMCIgLz4KICA8cGF0aCBkPSJNMTEgMTJoMTAiIC8+CiAgPHBhdGggZD0iTTExIDE5aDEwIiAvPgogIDxwYXRoIGQ9Ik00IDRoMXY1IiAvPgogIDxwYXRoIGQ9Ik00IDloMiIgLz4KICA8cGF0aCBkPSJNNi41IDIwSDMuNGMwLTEgMi42LTEuOTI1IDIuNi0zLjVhMS41IDEuNSAwIDAgMC0yLjYtMS4wMiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/list-ordered
 * @see https://lucide.dev/guide/packages/lucide-astro - Documentation
 *
 * @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * 
 */
const ListOrdered = createLucideIcon('list-ordered', [["path",{"d":"M11 5h10"}],["path",{"d":"M11 12h10"}],["path",{"d":"M11 19h10"}],["path",{"d":"M4 4h1v5"}],["path",{"d":"M4 9h2"}],["path",{"d":"M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02"}]]) as AstroComponent;

export default ListOrdered;
