let harga = [10000,14000,20000,9000]
let jumlah = [5,5,2,10]
let total = 0

for (let index = 0 ; index < harga.length; index++) {
    total += harga[index]*jumlah[index]        
    
}
console.log("Jumlah Harga = "+total)
