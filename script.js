document.querySelectorAll('.elementletter').forEach(function (elements) {
    const CheckElement = elements.querySelector(".check");
    const PlusElement = elements.querySelector(".plus");
    const MinusElement = elements.querySelector(".minus");
    const ParaElement = elements.querySelector(".paragraph");

    CheckElement.addEventListener("click", function (){
        if (PlusElement.style.display === "block") {
            PlusElement.style.display = 'none';
            MinusElement.style.display = "block";
            ParaElement.style.display = "block";
        } else if (MinusElement.style.display === "block") {
            MinusElement.style.display = "none";
            ParaElement.style.display = "none";
            PlusElement.style.display = "block";
       }
   })

})
