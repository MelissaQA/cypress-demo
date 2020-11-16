describe('Asertions', () =>{
    //Mocha test structure with describe() and it()
    let a = 1+1;
    let b=2;

    it('Sums two numbers correctly', function(){
        expect(a==b).to.equal(true); //Chai Assertions
    });

    it('Substracts two numbers correctly', () =>{
        expect(a-b).to.equal(0);
    });
})