# Tiny FontAwesome Icon Component for React

Because `@fortawesome/react-fontawesome` bloats my final bundle by 80KB, to render <1KB of SVG tags.

This package has fewer features (no animation, no invert-opacity mode, etc). But if all you want is to render an icon, it does that. It uses the same icon data from `@fortawesome/free-solid-svg-icons`, so it should be a drop-in replacement for basic use cases.

Example usage:

```tsx
import { FAIcon } from '@shish2k/react-faicon';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

export function App() {
  return <FAIcon icon={faPlay} />;
}
```

## Dev Setup

```bash
npm install
npm run build
```

Build the library in watch mode:

```bash
npm run dev
```
