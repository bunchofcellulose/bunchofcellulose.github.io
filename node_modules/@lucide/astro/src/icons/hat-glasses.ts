
import createLucideIcon from '../createLucideIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name HatGlasses
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTQgMThhMiAyIDAgMCAwLTQgMCIgLz4KICA8cGF0aCBkPSJtMTkgMTEtMi4xMS02LjY1N2EyIDIgMCAwIDAtMi43NTItMS4xNDhsLTEuMjc2LjYxQTIgMiAwIDAgMSAxMiA0SDguNWEyIDIgMCAwIDAtMS45MjUgMS40NTZMNSAxMSIgLz4KICA8cGF0aCBkPSJNMiAxMWgyMCIgLz4KICA8Y2lyY2xlIGN4PSIxNyIgY3k9IjE4IiByPSIzIiAvPgogIDxjaXJjbGUgY3g9IjciIGN5PSIxOCIgcj0iMyIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/hat-glasses
 * @see https://lucide.dev/guide/packages/lucide-astro - Documentation
 *
 * @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * 
 */
const HatGlasses = createLucideIcon('hat-glasses', [["path",{"d":"M14 18a2 2 0 0 0-4 0"}],["path",{"d":"m19 11-2.11-6.657a2 2 0 0 0-2.752-1.148l-1.276.61A2 2 0 0 1 12 4H8.5a2 2 0 0 0-1.925 1.456L5 11"}],["path",{"d":"M2 11h20"}],["circle",{"cx":"17","cy":"18","r":"3"}],["circle",{"cx":"7","cy":"18","r":"3"}]]) as AstroComponent;

export default HatGlasses;
