import * as d3 from 'd3-selection';

// Module augmentation to allow the 'patternify' prototype method
// past the typescript compiler
declare module 'd3-selection' {
  export interface Selection<
    GElement extends d3.BaseType,
    Datum,
    PElement extends d3.BaseType,
    PDatum
  > {
    patternify(params: any): any;
  }
}

export * from './treeview-chart';
