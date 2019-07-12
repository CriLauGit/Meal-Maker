const menu = {
  _courses : {
    appetizers : [],
    mains : [],
    desserts : [],
  },
  get appetizers() {
   return this._courses.appetizers;
  },
  set appetizers (appetizerIn) {
    this._courses.appetizers.push(appetizerIn);
  },
  get mains() {
    return this._courses.mains;
  },
  set mains (mainIn) {
    this._courses.mains.push(mainIn);
  },
  get desserts() {
    return this._courses.desserts;
  },
  set desserts (dessertIn) {
    this._courses.desserts.push(dessertIn); 
  },
  get courses () {
    return {
      appetisers: this.appetisers,
      mains: this.mains,
      desserts: this.dessterts
    }
  },
  addDishToCourse(courseName, dishName, dishPrice) { 
    const dish = {
      name : dishName,
      price : dishPrice
    };
    return this._courses[courseName].push(dish);    },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const random = Math.floor(Math.random() * dishes.length);
    return dishes[random];
  },
  generateRandomMeal() {
    let appetizer = this.getRandomDishFromCourse('appetizers');
    let main = this.getRandomDishFromCourse('mains');
    let dessert = this.getRandomDishFromCourse('desserts');
    let totalPrice = appetizer.price + main.price + dessert.price; 
    console.log(`The proposed random menu is: ${appetizer.name} as appetizer, ${main.name} for the main course, and ${dessert.name} for dessert, at a total price of: ${totalPrice}`) 
  }
  }
menu.addDishToCourse('appetizers', 'Veg Sandwich', 30);
menu.addDishToCourse('appetizers', 'Chilly Cheese Toast', 40);
menu.addDishToCourse('appetizers', 'Bread Butter Toast', 30);
menu.addDishToCourse('appetizers', 'Jam Bread', 25);
menu.addDishToCourse('mains', 'Roasted King Salmon', 39);
menu.addDishToCourse('mains', 'Cornfed Chicken Breast', 35);
menu.addDishToCourse('mains', 'Suckling Pork Belly', 40);
menu.addDishToCourse('mains', 'Classic Cheeseburger', 20);
menu.addDishToCourse('desserts', 'Caramel Brownie', 7);
menu.addDishToCourse('desserts', 'Icecream', 9);
menu.addDishToCourse('desserts', 'Lava cake', 7);
menu.addDishToCourse('desserts', 'Cheesecake', 9);
console.log(menu._courses); 
menu.generateRandomMeal();
