
import createLucideIcon from '../createLucideIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name FileCog
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTMuODUgMjJIMThhMiAyIDAgMCAwIDItMlY4YTIgMiAwIDAgMC0uNTg2LTEuNDE0bC00LTRBMiAyIDAgMCAwIDE0IDJINmEyIDIgMCAwIDAtMiAydjYuNiIgLz4KICA8cGF0aCBkPSJNMTQgMnY1YTEgMSAwIDAgMCAxIDFoNSIgLz4KICA8cGF0aCBkPSJtMy4zMDUgMTkuNTMuOTIzLS4zODIiIC8+CiAgPHBhdGggZD0ibTQuMjI4IDE2Ljg1Mi0uOTI0LS4zODMiIC8+CiAgPHBhdGggZD0ibTUuODUyIDE1LjIyOC0uMzgzLS45MjMiIC8+CiAgPHBhdGggZD0ibTUuODUyIDIwLjc3Mi0uMzgzLjkyNCIgLz4KICA8cGF0aCBkPSJtOC4xNDggMTUuMjI4LjM4My0uOTIzIiAvPgogIDxwYXRoIGQ9Im04LjUzIDIxLjY5Ni0uMzgyLS45MjQiIC8+CiAgPHBhdGggZD0ibTkuNzczIDE2Ljg1Mi45MjItLjM4MyIgLz4KICA8cGF0aCBkPSJtOS43NzMgMTkuMTQ4LjkyMi4zODMiIC8+CiAgPGNpcmNsZSBjeD0iNyIgY3k9IjE4IiByPSIzIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/file-cog
 * @see https://lucide.dev/guide/packages/lucide-astro - Documentation
 *
 * @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * 
 */
const FileCog = createLucideIcon('file-cog', [["path",{"d":"M13.85 22H18a2 2 0 0 0 2-2V8a2 2 0 0 0-.586-1.414l-4-4A2 2 0 0 0 14 2H6a2 2 0 0 0-2 2v6.6"}],["path",{"d":"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{"d":"m3.305 19.53.923-.382"}],["path",{"d":"m4.228 16.852-.924-.383"}],["path",{"d":"m5.852 15.228-.383-.923"}],["path",{"d":"m5.852 20.772-.383.924"}],["path",{"d":"m8.148 15.228.383-.923"}],["path",{"d":"m8.53 21.696-.382-.924"}],["path",{"d":"m9.773 16.852.922-.383"}],["path",{"d":"m9.773 19.148.922.383"}],["circle",{"cx":"7","cy":"18","r":"3"}]]) as AstroComponent;

export default FileCog;
