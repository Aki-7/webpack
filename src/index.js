import { Lion } from "./Lion";
import { Rabbit } from "./Rabbit";

const lion = new Lion();
const rabbit1 = new Rabbit();
const rabbit2 = new Rabbit();
const test = () => {
	if (lion.strength > rabbit1.strength) {
		return "Lion is stronger than rabbit";
	} else {
		return "Rabbit is stronger than lion";
	}
};

export default test;
