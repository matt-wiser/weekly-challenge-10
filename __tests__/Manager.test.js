const Manager = require('../lib/Manager.js');

test("creates a new engineer object", () => {
    const data = {
        name: 'Dave',
        email: 'dave@testcompany.com',
        id: '12345',
        officeNumber: '12345'
    }
    
    const manager = new Manager(data);

    expect(manager).toEqual(expect.any(Object));
});

test("tests privacy of manager object attributes", () => {
    const data = {
        name: 'Dave',
        email: 'dave@testcompany.com',
        id: '12345',
        officeNumber: '12345'
    }
    
    const manager = new Manager(data);

    expect(manager.name).toBe(undefined);
   
    expect(manager.email).toBe(undefined);
   
    expect(manager.id).toBe(undefined);

    expect(manager.officeNumber).toBe(undefined);
});

test("tests public data methods of engineer objects", () => {
    const data = {
        name: 'Dave',
        email: 'dave@testcompany.com',
        id: '12345',
        officeNumber: '12345'
    }
    
    const manager  = new Manager(data);

    expect(manager.getName()).toEqual('Dave');
   
    expect(manager.getEmail()).toEqual('dave@testcompany.com');
   
    expect(manager.getId()).toEqual('12345');
   
    expect(manager.getOfficeNumber()).toBe('12345');

    expect(manager.getRole()).toBe('Manager');
});