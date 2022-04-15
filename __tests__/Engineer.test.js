const Engineer = require('../lib/Engineer.js')

test("creates a new engineer object", () => {
    const data = {
        name: 'Dave',
        email: 'dave@testcompany.com',
        id: '12345',
        github: 'dave-github'
    }
    
    const engineer = new Engineer(data);

    expect(engineer).toEqual(expect.any(Object));
});

test("tests privacy of engineer object attributes", () => {
    const data = {
        name: 'Dave',
        email: 'dave@testcompany.com',
        id: '12345',
        github: 'dave-github'
    }
    
    const engineer = new Engineer(data);

    expect(engineer.name).toBe(undefined);
   
    expect(engineer.email).toBe(undefined);
   
    expect(engineer.id).toBe(undefined);

    expect(engineer.github).toBe(undefined);
});

test("tests public data methods of engineer objects", () => {
    const data = {
        name: 'Dave',
        email: 'dave@testcompany.com',
        id: '12345',
        github: 'dave-github'
    }
    
    const engineer  = new Engineer(data);

    expect(engineer.getName()).toEqual('Dave');
   
    expect(engineer.getEmail()).toEqual('dave@testcompany.com');
   
    expect(engineer.getId()).toEqual('12345');
   
    expect(engineer.getGithub()).toBe('dave-github');

    expect(engineer.getRole()).toBe('Engineer');
});