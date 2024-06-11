# Layout

## Import bundle

Import the `@eox/layout` bundle into [main.js](./main.js):

```js
import "https://unpkg.com/@eox/layout";
```

## Add HTML

Use the `eox-layout` container element to hold the individual items:

```html
<eox-layout></eox-layout>
```

Add individual `eox-layout-item` elements with `x`, `y`, `w` and `h` attributes inside the `eox-layout` slot:

```html
<eox-layout-item x="0" y="0" w="1" h="1">One</eox-layout-item>
```

## Styling

Make the layout fill the entire page height:

```css
eox-layout {
  height: 100%;
}
```

Give the layout items some basic styling:

```css
eox-layout-item {
  border: 1px solid darkgrey;
  border-radius: 4px;
}
```