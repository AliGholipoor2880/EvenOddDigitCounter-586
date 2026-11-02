const allNumber = [];
let zogNUm = [];
let fardNum = [];
let allzog = [];
let allfard = [];

let num = document.getElementById('internumber');
let result = document.getElementById("mineNumberResult");

let zogresult = document.getElementById("numberzog");
let fardresult = document.getElementById("numberfard");
let resultAllZog = document.getElementById("numberallzoj");
let resultAllfard = document.getElementById("numberallfard");

function interanumber(){
    zogNUm.splice(0,zogNUm.length);
    fardNum.splice(0,fardNum.length);
    let number = num.value; 

    if(number === ""){
        alert("یک عدد وارد کنید");
        return;
    }
    if (!/^\d+$/.test(number)) {
        alert("لطفا یک عدد معتبر وارد کنید");
        return;
    }

    zogOrFard(number);
    allNumber.push(number);
    nama(number);
    all();

    num.value = "";
}

function zogOrFard(number){
    for(let i of number){
        let digit = Number(i);

        if(digit % 2 === 0){
            zogNUm.push(digit);
        }
        else{
            fardNum.push(digit);
        }
    }
}

function nama(na){
    result.innerHTML = na;
    zogresult.innerHTML = zogNUm;
    fardresult.innerHTML = fardNum;
}

function all(){

    allzog.splice(0, allzog.length);
    allfard.splice(0, allfard.length);

    for(let i = 0; i < allNumber.length; i++){

        for(let nam of allNumber[i]){

            let digit2 = Number(nam);

            if(digit2 % 2 === 0){
                allzog.push(digit2);
            }
            else{
                allfard.push(digit2);
            }
        }
    }

    resultAllZog.innerHTML = allzog.length;
    resultAllfard.innerHTML = allfard.length;
}