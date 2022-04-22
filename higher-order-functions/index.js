function topla(a, b) {
  return a + b;
}

const arrowTopla = (a, b) => a + b;

topla(3, 5);
arrowTopla(3, 5);

function topla2(a,{open}) {
    const theme = {}
      
  return function (b, theme,open) {
    return a + b;
  };
}

topla2(3)(4);

const besIleTopla = topla2(5);

// console.log(topla2(3)(4));
console.log(besIleTopla(6));
