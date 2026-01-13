
import createLucideIcon from '../createLucideIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name ClockArrowDown
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgNnY2bDIgMSIgLz4KICA8cGF0aCBkPSJNMTIuMzM3IDIxLjk5NGExMCAxMCAwIDEgMSA5LjU4OC04Ljc2NyIgLz4KICA8cGF0aCBkPSJtMTQgMTggNCA0IDQtNCIgLz4KICA8cGF0aCBkPSJNMTggMTR2OCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/clock-arrow-down
 * @see https://lucide.dev/guide/packages/lucide-astro - Documentation
 *
 * @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * 
 */
const ClockArrowDown = createLucideIcon('clock-arrow-down', [["path",{"d":"M12 6v6l2 1"}],["path",{"d":"M12.337 21.994a10 10 0 1 1 9.588-8.767"}],["path",{"d":"m14 18 4 4 4-4"}],["path",{"d":"M18 14v8"}]]) as AstroComponent;

export default ClockArrowDown;
