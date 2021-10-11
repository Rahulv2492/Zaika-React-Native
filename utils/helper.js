var faker = require("faker");

export const generateFoodData = (limit) => {
  const foodData = [];
  for (let index = 0; index < limit; index++) {
    foodData.push({
      id: faker.datatype.uuid(),
      title: faker.commerce.productName(),
      price: parseFloat(faker.commerce.price()),
      rating: faker.datatype.number({ min: 1, max: 5 }),
      votes: faker.datatype.number({ min: 1, max: 100 }),
      randumNumber: faker.datatype.number({ min: 1, max: 20 }),
    });
  }
  return foodData;
};

export const calculateSubtotalAndCount = (cartItems) => {
  let subTotal = 0,
    itemsCount = 0;

  cartItems.forEach((item) => {
    itemsCount = itemsCount + item.itemCount;
    let itemTotal = (item.price - item.randumNumber) * item.itemCount;
    subTotal = subTotal + itemTotal;
  });

  return { subTotal, itemsCount };
};
