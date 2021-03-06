/**
 * Extending nearley types that are missing in their typings file.
 */
import nearley from 'nearley';

export as namespace nearley;

export class Parser extends nearley.Parser {
  table?: Array<Column>;
}

export class State {
  data: Array<string> | string;
  dot: number;
  isComplete: boolean;
  left?: State;
  reference: number;
  right?: State;
  rule: nearley.Rule;
  wantedBy: Array<State>;
}

export class Column {
  completed: {};
  grammar: nearley.Grammar;
  index: number;
  scannable: Array<State>;
  states: Array<State>;
  wants: Record<string, State>;
}
