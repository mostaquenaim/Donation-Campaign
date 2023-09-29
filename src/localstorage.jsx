const getStoredItems = () =>{
 const storedItems = localStorage.getItem('donated-items')
 if(storedItems){
    return JSON.parse(storedItems)
 }
 return []
}

const storeDonatedItems = (card) =>{
    const storedItems = getStoredItems()
    console.log("storedItems",storedItems , "card", card)
    const ifExist = storedItems.find(item => item.id === card.id)
    if(!ifExist){
        storedItems.push(card)
        localStorage.setItem('donated-items', JSON.stringify(storedItems))
        return true
    }
    return false
}

export {getStoredItems as getStoredItems, storeDonatedItems}