# Description

React component that generates a `div` element with controls for almost all `backdrop-filter` effects available as per specification (check [MDN definition](https://developer.mozilla.org/es/docs/Web/CSS/backdrop-filter)).

You can easily apply filters to the backdrop (everything behind an element, including the background) like those you can find on iOS or Windows: blur, saturation, opacity, contrast, etc.

Check table below for all properties manageable via this component.

Tested externally on Safari, Edge and Chrome (instructions below). Check the [CanIUse support table](https://caniuse.com/#search=backdrop-filter) for more specific compatibility information.

# Properties

|        Property         |  Control   |  Type   |    Default    |
| :---------------------: | :--------: | :-----: | :-----------: |
|          blur           |    Blur    | number  |       0       |
|       brightness        | Brightness | number  |      100      |
|        contrast         |  Contrast  | number  |      100      |
|        grayscale        | Grayscale  | number  |       0       |
|        hueRotate        | Hue Rotate | number  |       0       |
|         invert          |   Invert   | number  |       0       |
|         opacity         |  Opacity   | number  |      100      |
|          sepia          |   Sepia    | number  |       0       |
|        saturate         |  Saturate  | number  |      100      |
|      borderRadius       |   Radius   | number  |       0       |
|   borderRadiusPerSide   |     -      | boolean |     false     |
|   borderTopLeftRadius   |     -      | number  |       0       |
|  borderTopRightRadius   |     -      | number  |       0       |
| borderBottomRightRadius |     -      | number  |       0       |
| borderBottomLeftRadius  |     -      | number  |       0       |
|     backgroundColor     | Background | string  | 'transparent' |

You can find [the source code of this component on GitHub](https://github.com/aptrov/framerx-backdrop-filter).

# Viewing on Google Chrome

Chrome doesn't support `backdrop-filter` CSS property out-of-the-box yet, but can be enabled via a flag.

- In Chrome, go to `chrome://flags/#enable-experimental-web-platform-features`
- Select the "Enable" option from the dropdown at the right hand side