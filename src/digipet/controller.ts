import {
  Digipet,
  getDigipet,
  INITIAL_DIGIPET,
  setDigipet,
  updateDigipetBounded,
} from "./model";

/**
 * The actions that your Digipet game supports.
 *
 * These update the underlying digipet by using the functions defined in model.ts
 */



export function hatchDigipet(): Digipet {
  if (getDigipet()) {
    throw new Error("Can't hatch a digipet when you already have one!");
  } else {
    // spread to avoid accidental mutation
    const newDigipet = { ...INITIAL_DIGIPET };
    setDigipet(newDigipet);
    return newDigipet;
  }
}

export function trainDigipet(): void { }

export function walkDigipet(): void {
  updateDigipetBounded("happiness", 10);
  updateDigipetBounded("nutrition", -5);
}

export function ignoreDigipet(): void {
  updateDigipetBounded("happiness", -10);
  updateDigipetBounded("nutrition", -10);
  updateDigipetBounded("discipline", -10);
}

export function feedDigipet(): void {
  updateDigipetBounded("nutrition", 10);
}

export function rehomeDigipet(): undefined {
  if (getDigipet()) {
    //Now we want digipet to be deleted
    const newDigipet = undefined
    setDigipet(newDigipet);
    return newDigipet;
  } else {
    //Message saying we dont have a digipet to rehome?
    throw new Error("Can't rehome a digipet when you don't have one!");
  }
}