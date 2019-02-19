React component that generates a `div` element with controls for almost all `backdrop-filter` effects available as per specifications (check [MDN definition](https://developer.mozilla.org/es/docs/Web/CSS/backdrop-filter)).

This effect is useful to emulate iOS and Windows effects in your design prototypes (i.e. apply blur effect to everything in the background of a certain element).

Check table below for all properties manageable via this component.

Works also in Safari, Edge and Chrome (might require additional flags). Check [compatibility table](https://caniuse.com/#search=backdrop-filter) in CanIUse.

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