var discount = 0;
var cartItem;
var totalPrice = 0;
var cart = [];

var itemsForSale = {
    "phone": 300,
    "smart TV": 220,
    "gaming console": 150
}

function showItemsForSale() {
    console.log("List of items for sale: ");
    for (let item in itemsForSale) {
        console.log(item + ": $" + itemsForSale[item]);
    }
}


function addItem(){
    let i;

    i = prompt("How many items do you want to  purchase?");
    while(i>0){
    cartItem = prompt("Enter the name of item: ");
    if(cartItem in itemsForSale == false){
        alert("We don't sell that item!");
    }
    else{
        cart.push(cartItem);
        i -= 1;
    }
    }

}

function calculateTotalPrice() {

    for (let i = 0; i < cart.length; i++) {
        let item = cart[i];
        if (itemsForSale.hasOwnProperty(item)) {
            totalPrice += itemsForSale[item];
        }
    }

    console.log("Total price:", totalPrice);
}


function calculateDiscount(totalPrice){
    if(totalPrice > 400){
        totalPrice -= (10/100 * totalPrice);
        console.log("Discounted price: = " + totalPrice);
    }
    else{
        console.log("No discount applied for goods less than 400 USD");
    }
}

function pay(){
    amount = prompt("Enter amount to pay: ");
    if(amount < totalPrice){
        alert("You do not have enough money to make the purchase!");
    }
    else if(amount > totalPrice){
        alert("Thank you for the purchase!");
        let change = amount - totalPrice;
        alert("Here is your change: " + change);
    }
    else{
        alert("Thank you for the Purchase!")
    }
}
// showItemsForSale()
// addItem()
// calculateTotalPrice()
// calculateDiscount(totalPrice)
// pay()