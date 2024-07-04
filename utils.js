// debounce function for implementing any function with some delay
// it calls -- carrying function

const debounce = (func, delay=1000) => {
    let timeoutId;
    return (...args)=>{
        // args -bu func-yn argumentleri

    if (timeoutId){
        clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(()=>{

        func.apply(null, args);
        
    },
    delay)
}
}