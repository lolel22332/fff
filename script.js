document.getElementById("loginButton").addEventListener("click", function() {
    alert("Функція входу ще в розробці!");
});

document.getElementById("registerButton").addEventListener("click", function() {
    alert("Функція реєстрації ще в розробці!");
});

document.getElementById("contactButton").addEventListener("click", function() {
    alert("Зв'яжіться з нами через email: support@eratrade.com");
});

// Функціонал для тарифних планів
document.getElementById("standardPlan").addEventListener("click", function() {
    alert("Вибачте, функція ще не додана!");
});

document.getElementById("premiumPlan").addEventListener("click", function() {
    alert("Вибачте, функція ще не додана!");
});

document.getElementById("platinumPlan").addEventListener("click", function() {
    alert("Вибачте, функція ще не додана!");
});
document.querySelector(".sss").addEventListener("click",function () {
    if(isBlue) {
        document.querySelector("body").style.backgroundColor="#000000"
        document.querySelector("body").style.color="#ffffff"
        isBlue=false
    }else{
        document.querySelector("body").style.color="#000000"
        document.querySelector("body").style.backgroundColor="#ffffff"
        isBlue=true
    }
    
})
let isBlue=false
