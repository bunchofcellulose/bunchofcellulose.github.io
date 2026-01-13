
import createLucideIcon from '../createLucideIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name ArrowBigLeftDash
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTMgOWExIDEgMCAwIDEtMS0xVjUuMDYxYTEgMSAwIDAgMC0xLjgxMS0uNzVsLTYuODM1IDYuODM2YTEuMjA3IDEuMjA3IDAgMCAwIDAgMS43MDdsNi44MzUgNi44MzVhMSAxIDAgMCAwIDEuODExLS43NVYxNmExIDEgMCAwIDEgMS0xaDJhMSAxIDAgMCAwIDEtMXYtNGExIDEgMCAwIDAtMS0xeiIgLz4KICA8cGF0aCBkPSJNMjAgOXY2IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/arrow-big-left-dash
 * @see https://lucide.dev/guide/packages/lucide-astro - Documentation
 *
 * @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * 
 */
const ArrowBigLeftDash = createLucideIcon('arrow-big-left-dash', [["path",{"d":"M13 9a1 1 0 0 1-1-1V5.061a1 1 0 0 0-1.811-.75l-6.835 6.836a1.207 1.207 0 0 0 0 1.707l6.835 6.835a1 1 0 0 0 1.811-.75V16a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z"}],["path",{"d":"M20 9v6"}]]) as AstroComponent;

export default ArrowBigLeftDash;
