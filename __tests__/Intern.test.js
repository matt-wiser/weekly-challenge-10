const Intern = require('../lib/Intern.js');

test("creates a new Intern object", () => {
    const data = {
        name: 'Dave',
        email: 'dave@testcompany.com',
        id: '12345',
        school: 'Github University'
    }
    
    const intern = new Intern(data);

    expect(intern).toEqual(expect.any(Object));
});

test("tests privacy of manager object attributes", () => {
    const data = {
        name: 'Dave',
        email: 'dave@testcompany.com',
        id: '12345',
        school: 'Github University'
    }
    
    const intern = new Intern(data);

    expect(intern.name).toBe(undefined);
   
    expect(intern.email).toBe(undefined);
   
    expect(intern.id).toBe(undefined);

    expect(intern.school).toBe(undefined);
});

test("tests public data methods of engineer objects", () => {
    const data = {
        name: 'Dave',
        email: 'dave@testcompany.com',
        id: '12345',
        school: 'Github University'
    }
    
    const intern  = new Intern(data);

    expect(intern.getName()).toEqual('Dave');
   
    expect(intern.getEmail()).toEqual('dave@testcompany.com');
   
    expect(intern.getId()).toEqual('12345');
   
    expect(intern.getSchool()).toBe('Github University');

    expect(intern.getRole()).toBe('Intern');
});