describe('my own map-like methods', function() {
 describe("map returns an array with all values made negative", function() {
   it("transforms correctly", function(){
      expect(map([1, 2, 3, -9], function(a){ return -1 * a } )).to.eql([-1, -2, -3, 9])
   })

  describe("map returns an array with the original values", function() {
    it("transforms correctly", function(){
      dune = ["paul", "gurney", "vladimir", "jessica", "chani"]
      expect(map(dune, function(a){ return a})).to.eql(dune)
    })
  })

  describe("map returns an array with the original values multiplied by 2", function() {
    it("transforms correctly", function(){
      expect(map([1, 2, 3, -9], function(a){ return 2 * a })).to.eql([2, 4, 6, -18])
    })
  })

  describe("map returns an array with the original values squared", function() {
    it("transforms correctly", function(){
      expect(map([1, 2, 3, -9], function(a){return a * a})).to.eql([1, 4, 9, 81])
    })
  })
 })
})

