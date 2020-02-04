export enum CornerShape {
  ORIGINAL = 'ORIGINAL',
  CIRCLE = 'CIRCLE',
  ROUNDED = 'ROUNDED'
}

export interface NodeImage {
  url: string;
  width: number;
  height: number;
  centerTopDistance: number;
  centerLeftDistance: number;
  cornerShape: CornerShape;
  shadow: boolean;
  borderWidth: number;
  borderColor: NodeColor;
}

export interface NodeColor {
  red: number;
  green: number;
  blue: number;
  alpha: number;
}

export interface Node {
  nodeId: string;
  parentNodeId: string;
  width: number;
  height: number;
  borderWidth: number;
  borderRadius: number;
  borderColor: NodeColor;
  backgroundColor: NodeColor;
  nodeImage: NodeImage;
  template: string;
  connectorLineColor: NodeColor;
  connectorLineWidth: number;
  dashArray: string;
  expanded: boolean;
  directSubordinates: number;
  totalSubordinates: number;
}
