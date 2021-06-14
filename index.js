const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
// const sinon = require( 'sinon' )

// describe('reducer', function() {
//   describe('batteries', function() {
//     it('should have a `totalBatteries` variable', function() {
//       expect(totalBatteries).to.exist;
//     });

//     it('should have a number as a result', function() {
//       expect(totalBatteries).to.be.a('number');
//     });

//     it('should have made the sum of all the assembled batteries', function() {
//       expect(totalBatteries).to.eql(31);
//     });
//   });
// });
// const reducer= (batteryBatches.reduce((accumulator, number)=>{number + accumulator})
// )
// console.log(reducer)


// const numbers=[4, 5, 6]

    const totalBatteries= batteryBatches.reduce(function (accumulator, number){return number + accumulator},0)
    console.log(totalBatteries)

//console.log(reducer())
// const doubledAndSummed = [1, 2, 3].reduce(function(accumulator, element){ return element * 2 + accumulator})
// // => 11 
// console.log(doubledAndSummed)
