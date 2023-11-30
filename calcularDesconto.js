const costomerChosenClient = [["camiseta", 300], ["bermuda", 80], ["bone", 95], ["celular", 900]]

const calculateCostomePurchases = (items) => {
    let totalValue = 0
    
    for(let i = 0; i < items.length; i++) {
        totalValue += items[i][1]
        console.log(`item ${items[i][0]} valor ${items[i][1]}`)
    }
    
    if(totalValue >= 1000) {
        const discount = 0.1 * totalValue
        const priceFinale = totalValue - discount
        console.log(`Valor total das compras ${totalValue}`)
        console.log(`desconto de 10% aplicado`)
        console.log(`valor final: ${priceFinale}`)
    }
}

calculateCostomePurchases(costomerChosenClient)
