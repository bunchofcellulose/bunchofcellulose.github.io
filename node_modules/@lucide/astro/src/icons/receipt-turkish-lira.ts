
import createLucideIcon from '../createLucideIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name ReceiptTurkishLira
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTAgNi41djExYTUuNSA1LjUgMCAwIDAgNS41LTUuNSIgLz4KICA8cGF0aCBkPSJtMTQgOC02IDMiIC8+CiAgPHBhdGggZD0iTTQgMnYyMGwyLTEgMiAxIDItMSAyIDEgMi0xIDIgMSAyLTEgMiAxVjJsLTIgMS0yLTEtMiAxLTItMS0yIDEtMi0xLTIgMXoiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/receipt-turkish-lira
 * @see https://lucide.dev/guide/packages/lucide-astro - Documentation
 *
 * @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * 
 */
const ReceiptTurkishLira = createLucideIcon('receipt-turkish-lira', [["path",{"d":"M10 6.5v11a5.5 5.5 0 0 0 5.5-5.5"}],["path",{"d":"m14 8-6 3"}],["path",{"d":"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1z"}]]) as AstroComponent;

export default ReceiptTurkishLira;
