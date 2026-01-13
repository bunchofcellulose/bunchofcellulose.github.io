
import createLucideIcon from '../createLucideIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name ClockCheck
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgNnY2bDQgMiIgLz4KICA8cGF0aCBkPSJNMjIgMTJhMTAgMTAgMCAxIDAtMTEgOS45NSIgLz4KICA8cGF0aCBkPSJtMjIgMTYtNS41IDUuNUwxNCAxOSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/clock-check
 * @see https://lucide.dev/guide/packages/lucide-astro - Documentation
 *
 * @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * 
 */
const ClockCheck = createLucideIcon('clock-check', [["path",{"d":"M12 6v6l4 2"}],["path",{"d":"M22 12a10 10 0 1 0-11 9.95"}],["path",{"d":"m22 16-5.5 5.5L14 19"}]]) as AstroComponent;

export default ClockCheck;
