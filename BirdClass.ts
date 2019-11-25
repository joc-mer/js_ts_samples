//Animals.ts
class BirdClass {
    name = 'default';
};

export const Animals = {
    Cat: 'default',
    Dog: 'default'
};

export let Bird = new BirdClass();

//Function.ts
import {Animals, Bird} from '.Animals';

export function setupAnimals() {
    Animals.Cat = 'Cat';
    Animals.Dog = 'Dog';
    Bird.name = 'Bird';
}

// main.ts
import {setupAnimals} from './Functions';
import {Animals, Bird} from './Animals';

setupAnimals();
console.log(Animals.Cat)
console.log(Animals.Dog)
console.log(Bird.name)
