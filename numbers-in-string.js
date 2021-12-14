function num (str) {
    return str.split('').filter(x => isNaN(x)).join('');
 }
 console.log(num('fsdgh43bsdf5'));
