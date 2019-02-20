import * as React from 'react';
import { PropertyControls, ControlType } from 'framer';

type Props = {
  blur: number;
  brightness: number;
  contrast: number;
  grayscale: number;
  hueRotate: number;
  invert: number;
  opacity: number;
  sepia: number;
  saturate: number;
  borderRadius: number;
  borderRadiusPerSide: boolean;
  borderTopLeftRadius: number;
  borderTopRightRadius: number;
  borderBottomRightRadius: number;
  borderBottomLeftRadius: number;
  backgroundColor: string;
};

export class BackdropFilter extends React.Component<Props> {
  style: React.CSSProperties = {
    height: '100%',
    width: '100%',
    position: 'absolute',
  };

  render() {
    const {
      blur,
      brightness,
      contrast,
      grayscale,
      hueRotate,
      invert,
      opacity,
      sepia,
      saturate,
      borderRadius,
      borderRadiusPerSide,
      borderTopLeftRadius,
      borderTopRightRadius,
      borderBottomRightRadius,
      borderBottomLeftRadius,
      backgroundColor,
    } = this.props;
    const backdropFilters = {
      WebkitBackdropFilter: `
        blur(${blur}px)
        brightness(${brightness}%)
        contrast(${contrast}%)
        grayscale(${grayscale}%)
        hue-rotate(${hueRotate}deg)
        invert(${invert}%)
        opacity(${opacity}%)
        sepia(${sepia}%)
        saturate(${saturate}%)`,
      backdropFilter: `
        blur(${blur}px)
        brightness(${brightness}%)
        contrast(${contrast}%)
        grayscale(${grayscale}%)
        hue-rotate(${hueRotate}deg)
        invert(${invert}%)
        opacity(${opacity}%)
        sepia(${sepia}%)
        saturate(${saturate}%)`,
      borderRadius:
        (!borderRadiusPerSide && `${borderRadius}px`) ||
        `${borderTopLeftRadius}px ${borderTopRightRadius}px ${borderBottomRightRadius}px ${borderBottomLeftRadius}px`,
      backgroundColor,
    };

    return <div style={{ ...this.style, ...backdropFilters }} />;
  }

  static defaultProps: Props = {
    blur: 0,
    brightness: 100,
    contrast: 100,
    grayscale: 0,
    hueRotate: 0,
    invert: 0,
    opacity: 100,
    sepia: 0,
    saturate: 100,
    borderRadius: 0,
    borderRadiusPerSide: false,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    backgroundColor: 'transparent',
  };

  static propertyControls: PropertyControls<Props> = {
    blur: { type: ControlType.Number, title: 'Blur' },
    brightness: { type: ControlType.Number, title: 'Brightness', min: 0, max: 200 },
    contrast: { type: ControlType.Number, title: 'Contrast', min: 0, max: 200 },
    grayscale: { type: ControlType.Number, title: 'Grayscale' },
    hueRotate: { type: ControlType.Number, title: 'Hue Rotate', min: 0, max: 360 },
    invert: { type: ControlType.Number, title: 'Invert' },
    opacity: { type: ControlType.Number, title: 'Opacity' },
    sepia: { type: ControlType.Number, title: 'Sepia' },
    saturate: { type: ControlType.Number, title: 'Saturate', min: 0, max: 200 },
    borderRadius: {
      type: ControlType.FusedNumber,
      toggleKey: 'borderRadiusPerSide',
      toggleTitles: ['Uniform', 'Per side'],
      valueKeys: [
        'borderTopLeftRadius',
        'borderTopRightRadius',
        'borderBottomRightRadius',
        'borderBottomLeftRadius',
      ],
      valueLabels: ['↑', '→', '↓', '←'],
      min: 0,
      title: 'Radius',
    },
    backgroundColor: { type: ControlType.Color, title: 'Background' },
  };
}
