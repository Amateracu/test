let a = 'dasdasda12d31sada3123r443dff1';

const b = a.split('').filter(e => Number.isInteger(+e))
    
console.log(b.length);
