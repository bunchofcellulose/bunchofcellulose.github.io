
import createLucideIcon from '../createLucideIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name BookCopy
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNSA3YTIgMiAwIDAgMC0yIDJ2MTEiIC8+CiAgPHBhdGggZD0iTTUuODAzIDE4SDVhMiAyIDAgMCAwIDAgNGg5LjVhLjUuNSAwIDAgMCAuNS0uNVYyMSIgLz4KICA8cGF0aCBkPSJNOSAxNVY0YTIgMiAwIDAgMSAyLTJoOS41YS41LjUgMCAwIDEgLjUuNXYxNGEuNS41IDAgMCAxLS41LjVIMTFhMiAyIDAgMCAxIDAtNGgxMCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/book-copy
 * @see https://lucide.dev/guide/packages/lucide-astro - Documentation
 *
 * @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * 
 */
const BookCopy = createLucideIcon('book-copy', [["path",{"d":"M5 7a2 2 0 0 0-2 2v11"}],["path",{"d":"M5.803 18H5a2 2 0 0 0 0 4h9.5a.5.5 0 0 0 .5-.5V21"}],["path",{"d":"M9 15V4a2 2 0 0 1 2-2h9.5a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.5.5H11a2 2 0 0 1 0-4h10"}]]) as AstroComponent;

export default BookCopy;
