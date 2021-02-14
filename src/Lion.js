import { Animal } from "./Animal";
import { LION } from "./Constant";

export class Lion extends Animal {
  constructor() {
    super(LION, 1000);
  }
}
