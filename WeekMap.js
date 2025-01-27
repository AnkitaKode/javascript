function ankita() {
    let looseMap = new WeakMap();
    let Ram = {name};
    let Raj = {name};
    let Rahul = {name};
    looseMap.set(Ram, "Ram");
    looseMap.set(Raj, "Raj");
    looseMap.set(Rahul, "Rahul");
    console.log(looseMap);
    console.log(looseMap.has(Ram))
}

ankita();
