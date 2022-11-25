function level1(lista){

let lista = [];
        
        for (let i = 0; i < 10; i++) {
            let random = Math.random();
            random = random * 10 + 1;
            random = Math.trunc(random);
            lista[i] = random;
        }
        console.log(lista);
    }