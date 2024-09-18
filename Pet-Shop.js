function FoodCostTotal(input) {
    let DogFood = input[0];
    let CatFood = input[1];
    let FoodCostTotal = DogFood * 2.50 + CatFood * 4;

    console.log(`${FoodCostTotal} lv.`);
}

FoodCostTotal([7,15]);