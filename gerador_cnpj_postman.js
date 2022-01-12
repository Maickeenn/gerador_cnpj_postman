// Função que gera números de CNPJ válidos
function cnpj() {

    const rnd = (n) => Math.round(Math.random() * n);
    const mod = (base, div) => Math.round(base - Math.floor(base / div) * div);

    const weight = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5, 6];
    const numbers = Array(8).fill('').map(() => rnd(9)) // Gera array com 8 números aleatórios
        .concat([0, 0, 0, 1]); // Concatena 0001 ao array

    let dac1 = 11 - (mod(numbers.reduce((total, number, index) => (total + (number * (weight[weight.length - index - 2]))), 0), 11));
    numbers.push(dac1 >= 10 ? 0 : dac1);

    let dac2 = 11 - mod(numbers.reduce((total, number, index) => (total + (number * (weight[weight.length - index - 1]))), 0), 11)
    numbers.push(dac2 >= 10 ? 0 : dac2);

    return `${numbers.join('')}`;
}

// opicional para postman
pm.environment.set('CNPJ', cnpj());
