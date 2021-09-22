

// 02-maths/03-even-square/script.js - 2.3: squares and pairs


(() => {

    document.getElementById("run").addEventListener("click", () => {

        let i = Math.pow(1, 2);

        while (i < 21) {
            console.log(i);
            i += 1;
        }
        document.querySelector(i).innerHTML;
    });

})();