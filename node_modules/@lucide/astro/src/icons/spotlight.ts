
import createLucideIcon from '../createLucideIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name Spotlight
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTUuMjk1IDE5LjU2MiAxNiAyMiIgLz4KICA8cGF0aCBkPSJtMTcgMTYgMy43NTggMi4wOTgiIC8+CiAgPHBhdGggZD0ibTE5IDEyLjUgMy4wMjYtLjU5OCIgLz4KICA8cGF0aCBkPSJNNy42MSA2LjNhMyAzIDAgMCAwLTMuOTIgMS4zbC0xLjM4IDIuNzlhMyAzIDAgMCAwIDEuMyAzLjkxbDYuODkgMy41OTdhMSAxIDAgMCAwIDEuMzQyLS40NDdsMy4xMDYtNi4yMTFhMSAxIDAgMCAwLS40NDctMS4zNDF6IiAvPgogIDxwYXRoIGQ9Ik04IDlWMiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/spotlight
 * @see https://lucide.dev/guide/packages/lucide-astro - Documentation
 *
 * @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * 
 */
const Spotlight = createLucideIcon('spotlight', [["path",{"d":"M15.295 19.562 16 22"}],["path",{"d":"m17 16 3.758 2.098"}],["path",{"d":"m19 12.5 3.026-.598"}],["path",{"d":"M7.61 6.3a3 3 0 0 0-3.92 1.3l-1.38 2.79a3 3 0 0 0 1.3 3.91l6.89 3.597a1 1 0 0 0 1.342-.447l3.106-6.211a1 1 0 0 0-.447-1.341z"}],["path",{"d":"M8 9V2"}]]) as AstroComponent;

export default Spotlight;
