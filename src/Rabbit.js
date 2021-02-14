import { Animal } from "./Animal";
import { RABBIT } from "./Constant";

export class Rabbit extends Animal {
  constructor() {
    super(RABBIT, 100);
  }
}
