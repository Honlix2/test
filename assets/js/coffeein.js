/*MODAL SCRIPT */

/*cart modal */
const closeCart = document.querySelector('.close-cart');
closeCart.addEventListener('click', toggleModalCart);

const buttonCart = document.querySelector('#button-cart');
const cartModal = document.querySelector('#cart-modal');

buttonCart.addEventListener('click', toggleModalCart);

function toggleModalCart() {
    cartModal.classList.toggle("is-open");
}


/*auth modal */
const closeAuth = document.querySelector('.close-auth');
closeAuth.addEventListener('click', toggleModalAuth);

const buttonAuth = document.querySelector('#button-auth');
const authModal = document.querySelector('#auth-modal');

buttonAuth.addEventListener('click', toggleModalAuth);

function toggleModalAuth() {
    authModal.classList.toggle("is-open");
}

/*Restourants MODALS */




/* MODAL for FOOD */

/*foodPizzaSemeinaya modal */
const closeFoodPizzaSemeinaya = document.querySelector('.close-food-pizza-semeinaya');
closeFoodPizzaSemeinaya.addEventListener('click', toggleModalFoodPizzaSemeinaya);

const buttonFoodPizzaSemeinaya = document.querySelector('#food-pizza-semeinaya');
const FoodPizzaSemeinayaModal = document.querySelector('#semeinaya-pizza-food-modal');

buttonFoodPizzaSemeinaya.addEventListener('click', toggleModalFoodPizzaSemeinaya);

function toggleModalFoodPizzaSemeinaya() {
    FoodPizzaSemeinayaModal.classList.toggle("is-open");
}

/*foodRollStandart modal */
const closeFoodRollStandart = document.querySelector('.close-food-roll-standart');
closeFoodRollStandart.addEventListener('click', toggleModalFoodRollStandart);

const buttonFoodRollStandart = document.querySelector('#food-roll-standart');
const FoodRollStandartModal = document.querySelector('#standart-roll-food-modal');

buttonFoodRollStandart.addEventListener('click', toggleModalFoodRollStandart);

function toggleModalFoodRollStandart() {
    FoodRollStandartModal.classList.toggle("is-open");
}

/*foodPizzaFourSezona modal */
const closeFoodPizzaFoursezon = document.querySelector('.close-food-pizza-foursezon');
closeFoodPizzaFoursezon.addEventListener('click', toggleModalFoodPizzaFoursezon);

const buttonFoodPizzaFoursezon = document.querySelector('#food-pizza-foursezon');
const FoodPizzaFoursezonModal = document.querySelector('#foursezon-pizza-food-modal');

buttonFoodPizzaFoursezon.addEventListener('click', toggleModalFoodPizzaFoursezon);

function toggleModalFoodPizzaFoursezon() {
    FoodPizzaFoursezonModal.classList.toggle("is-open");
}


/*foodRollKaliforniya modal */
const closeFoodRollKaliforniya = document.querySelector('.close-food-roll-kaliforniya');
closeFoodRollKaliforniya.addEventListener('click', toggleModalFoodRollKaliforniya);

const buttonFoodRollKaliforniya = document.querySelector('#food-roll-kaliforniya');
const FoodRollKaliforniyaModal = document.querySelector('#kaliforniya-roll-food-modal');

buttonFoodRollKaliforniya.addEventListener('click', toggleModalFoodRollKaliforniya);

function toggleModalFoodRollKaliforniya() {
    FoodRollKaliforniyaModal.classList.toggle("is-open");
}

/*foodRollSirius modal */
const closeFoodRollSirius = document.querySelector('.close-food-roll-sirius');
closeFoodRollSirius.addEventListener('click', toggleModalFoodRollSirius);

const buttonFoodRollSirius = document.querySelector('#food-roll-sirius');
const FoodRollSiriusModal = document.querySelector('#sirius-roll-food-modal');

buttonFoodRollSirius.addEventListener('click', toggleModalFoodRollSirius);

function toggleModalFoodRollSirius() {
    FoodRollSiriusModal.classList.toggle("is-open");
}

/*foodPizzaRimskaya modal */
const closeFoodPizzaRimskaya = document.querySelector('.close-food-pizza-rimskaya');
closeFoodPizzaRimskaya.addEventListener('click', toggleModalFoodPizzaRimskaya);

const buttonFoodPizzaRimskaya = document.querySelector('#food-pizza-rimskaya');
const FoodPizzaRimskayaModal = document.querySelector('#rimskaya-pizza-food-modal');

buttonFoodPizzaRimskaya.addEventListener('click', toggleModalFoodPizzaRimskaya);

function toggleModalFoodPizzaRimskaya() {
    FoodPizzaRimskayaModal.classList.toggle("is-open");
}



/* DRINKS */

/*drinksChupaChups modal */
const closeDrinksChupaChups = document.querySelector('.close-drinks-chupachups');
closeDrinksChupaChups.addEventListener('click', toggleModalDrinksChupaChups);

const buttonDrinksChupaChups = document.querySelector('#drinks-chupachups');
const DrinksChupaChupsModal = document.querySelector('#chupachups-drinks-modal');

buttonDrinksChupaChups.addEventListener('click', toggleModalDrinksChupaChups);

function toggleModalDrinksChupaChups() {
    DrinksChupaChupsModal.classList.toggle("is-open");
}

/*drinksCola modal */
const closeDrinksCola = document.querySelector('.close-drinks-cola');
closeDrinksCola.addEventListener('click', toggleModalDrinksCola);

const buttonDrinksCola = document.querySelector('#drinks-cola');
const DrinksColaModal = document.querySelector('#cola-drinks-modal');

buttonDrinksCola.addEventListener('click', toggleModalDrinksCola);

function toggleModalDrinksCola() {
    DrinksColaModal.classList.toggle("is-open");
}


/*drinksCoffeelatte modal */
const closeDrinksCoffeelatte = document.querySelector('.close-drinks-coffeelatte');
closeDrinksCoffeelatte.addEventListener('click', toggleModalDrinksCoffeelatte);

const buttonDrinksCoffeelatte = document.querySelector('#drinks-coffeelatte');
const DrinksCoffeelatteModal = document.querySelector('#coffeelatte-drinks-modal');

buttonDrinksCoffeelatte.addEventListener('click', toggleModalDrinksCoffeelatte);

function toggleModalDrinksCoffeelatte() {
    DrinksCoffeelatteModal.classList.toggle("is-open");
}



/*drinksFantalemon modal */
const closeDrinksFantalemon = document.querySelector('.close-drinks-fantalemon');
closeDrinksFantalemon.addEventListener('click', toggleModalDrinksFantalemon);

const buttonDrinksFantalemon = document.querySelector('#drinks-fantalemon');
const DrinksFantalemonModal = document.querySelector('#fantalemon-drinks-modal');

buttonDrinksFantalemon.addEventListener('click', toggleModalDrinksFantalemon);

function toggleModalDrinksFantalemon() {
    DrinksFantalemonModal.classList.toggle("is-open");
}

/*drinksRedBull modal */
const closeDrinksRedBull = document.querySelector('.close-drinks-redbull');
closeDrinksRedBull.addEventListener('click', toggleModalDrinksRedBull);

const buttonDrinksRedBull = document.querySelector('#drinks-redbull');
const DrinksRedBullModal = document.querySelector('#redbull-drinks-modal');

buttonDrinksRedBull.addEventListener('click', toggleModalDrinksRedBull);

function toggleModalDrinksRedBull() {
    DrinksRedBullModal.classList.toggle("is-open");
}

/*drinksSmuzi modal */
const closeDrinksSmuzi = document.querySelector('.close-drinks-smuzi');
closeDrinksSmuzi.addEventListener('click', toggleModalDrinksSmuzi);

const buttonDrinksSmuzi = document.querySelector('#drinks-smuzi');
const DrinksSmuziModal = document.querySelector('#smuzi-drinks-modal');

buttonDrinksSmuzi.addEventListener('click', toggleModalDrinksSmuzi);

function toggleModalDrinksSmuzi() {
    DrinksSmuziModal.classList.toggle("is-open");
}