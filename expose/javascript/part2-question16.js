let statistics = {
    redCars: 21,
    blueCars: 45, 
    greenCars: 12, 
    rareCars: 5, 
    blackCars: 40, 
    rareCars: 2
}

for (let val in statistics){
    if (statistics[val]%2 === 1 || val.startsWith('r') ){
        console.log(statistics[val]);
    }
}