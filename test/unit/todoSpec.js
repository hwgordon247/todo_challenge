describe("todoController", function(){
  var ctrl;

  beforeEach(function(){
    module("todoApp");
    inject(function($controller){
      ctrl = $controller("todoController");
    });
  });

  it("Pulls user info from the github api", function(){
    expect(ctrl.count).toEqual(0);
  });



});
