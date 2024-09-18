function yardGreeningPrice(input) {
    let squaremeters = Number(input[0]);
    let yardGreeningPrice = squaremeters * 7.61;
    let discount = yardGreeningPrice * 0.18;
    let priceWithDiscount = yardGreeningPrice - discount;

    console.log(`The final price is: ${priceWithDiscount} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

yardGreeningPrice(["550"]);