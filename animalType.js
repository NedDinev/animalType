function animalType(animal) {
  animal = animal.toLowerCase();
  switch (animal) {
    case "dog":
      console.log("mammal");
      break;
    case ("crocodile", "tortoise", "snake"):
      console.log("reptile");
      break;
    default:
      console.log("unknown");
      break;
  }
}

animalType("dog");
animalType("snake");
animalType("cat");
