const frisby = require('frisby');

it('run a test to check todolist', function(){
  return frisby.get('http://localhost:3000/list')
  .expect('status',200);
});
