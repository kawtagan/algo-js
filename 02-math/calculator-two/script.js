

// 02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)

(() => {
    document.getElementById("op-one").value;
    document.getElementById("op-two").value;


    const performOperation = operation => {
        switch (performOperation) {
            case 1 : 
                console.log( op-one + op-two);
            case 1 : 
                console.log( op-one - op-two);
            case 1 : 
                console.log( op-one / op-two);
            case 1 : 
                console.log( op-one * op-two);
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();