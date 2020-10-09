const pets = [
    {
        name: 'rex',
        type: 'dog',
        age: 10,
        weight: 0.01
    },
    {
        name: 'miau',
        type: 'gato',
        age: 2,
        weight: 0.02
    },
    {
        name: 'gulp',
        type: 'fish',
        age: 1,
        weight: 0.41
    },
    {
        name: 'belinha',
        type: 'dog',
        age: 10,
        weight: 25
    },
    {
        name: 'kate',
        type: 'gato',
        age: 2,
        weight: 0.06
    },
    {
        name: 'rufus',
        type: 'dog',
        age: 6,
        weight: 0.20
    },
    {
        name: 'bola',
        type: 'dog',
        age: 4,
        weight: 4.21
    }
]

//Retornando apenas o cálculo de um resultado
const totalWight = pets.reduce((total, pet) => {
    return total + pet.weight
}, 0 )

console.log(totalWight);

//Retornando mais de um cálculo

const totals = pets.reduce((total, pet) => {
    return {
        totalAge: total.totalAge + pet.age,
        totalWeight: total.totalWeight + pet.weight
    }
}, { totalAge:0, totalWeight: 0 });

console.log(totals);