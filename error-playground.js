const sum = (a , b) => {
    if(a & b ) {

        return a + b;

    }
    throw new Error('invalid arguments')
}
try {
    console.log(sum(1));
} catch(error) {
    console.log('error occurred');
    // console.log(error)
}
console.log('this works')