export interface IPosition {
  x: number;
  y: number;
  z: number;
}

export type AxeTypes = "x" | "y" | "z";

export enum Actions {
  MoveTo = "moveTo",
  SetTemperatureBed = "setTemperatureBed",
}

export interface IActionDefinition {
  target: ObjectTypes;
  action: Actions;
  axe?: AxeTypes;
  valueToReach: number;
}

export enum ObjectTypes {
  Bed = "bed",
  Nozzle = "nozzle",
}
