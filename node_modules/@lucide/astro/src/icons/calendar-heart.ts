
import createLucideIcon from '../createLucideIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name CalendarHeart
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIuMTI3IDIySDVhMiAyIDAgMCAxLTItMlY2YTIgMiAwIDAgMSAyLTJoMTRhMiAyIDAgMCAxIDIgMnY1LjEyNSIgLz4KICA8cGF0aCBkPSJNMTQuNjIgMTguOEEyLjI1IDIuMjUgMCAxIDEgMTggMTUuODM2YTIuMjUgMi4yNSAwIDEgMSAzLjM4IDIuOTY2bC0yLjYyNiAyLjg1NmEuOTk4Ljk5OCAwIDAgMS0xLjUwNyAweiIgLz4KICA8cGF0aCBkPSJNMTYgMnY0IiAvPgogIDxwYXRoIGQ9Ik0zIDEwaDE4IiAvPgogIDxwYXRoIGQ9Ik04IDJ2NCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/calendar-heart
 * @see https://lucide.dev/guide/packages/lucide-astro - Documentation
 *
 * @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * 
 */
const CalendarHeart = createLucideIcon('calendar-heart', [["path",{"d":"M12.127 22H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.125"}],["path",{"d":"M14.62 18.8A2.25 2.25 0 1 1 18 15.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z"}],["path",{"d":"M16 2v4"}],["path",{"d":"M3 10h18"}],["path",{"d":"M8 2v4"}]]) as AstroComponent;

export default CalendarHeart;
