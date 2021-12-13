function num (str) {
    let arr = str.split('');
    return arr.filter(x => isNaN(x)).join('');
 }
 console.log(num('fsdgh43bsdf5'));