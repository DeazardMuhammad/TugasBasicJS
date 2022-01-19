let tb = 1.7
let bb = 90
let bmi = bb / (tb*tb)

let kuranggizi= 0
let normal= 0
let beratlebih= 0
let obesitas = 0

if (bmi<18.5) {
    kuranggizi = kuranggizi+1
    }
    if (bmi>=18.5 && bmi<=24.9) {
    normal = normal+1
        
    }
    if (bmi>25 && bmi<=29.9) {
        beratlebih = beratlebih+1        
    }
    if (bmi>30) {
        obesitas = obesitas+1        
    }

console.log("bmi = "+bmi)
console.log("kurang gizi = "+kuranggizi)
console.log("beratlebih = "+beratlebih)
console.log("normal = "+normal)
console.log("obesitas = "+obesitas)



