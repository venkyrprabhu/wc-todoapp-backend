const frisby = require('frisby');

it('run a test to check todolist', () => {
  return frisby.get('http://localhost:3000/list')
  .expect('status',200);
});

it('check posting an item returns 201 status', () =>{
  return frisby.post('http://localhost:3000/list',{
    "name":"testentry",
    "description":"This is test entry from frisby test suite"
  }).expect('status',201);

});
