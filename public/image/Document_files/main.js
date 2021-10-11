const arry = [1, 2, 3, 4, 5];

arry.reduce((accu = 1, cyrr) => {
  console.log(accu, cyrr);
  return accu + cyrr;
});
