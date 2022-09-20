// INPUT: the array of brands from data.js
// OUTPUT: an array of all the sneakers brands
// REQS: use .reduce

export const getSneaks = (brands) => {
  const shoeNames = brands.reduce((previousValue, currentValue) => [...previousValue, ...currentValue.shoes], []);
  return shoeNames;
};

// INPUT: the array of dogs from data.js
// OUTPUT: the average age of the dogs
// REQS: use .reduce
export const getAverageAge = (dogs) => {
  const dogAge = dogs.map((dog) => dog.age);
  const avgAge = dogAge.reduce((a, b) => a + b, 0) / dogs.length;
  return avgAge;
};
