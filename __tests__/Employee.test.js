const Employee = require('../lib/Employee.js');

test("creates a new employee object", () => {
    const data = {
        name: 'Dave',
        email: 'dave@testcompany.com',
        id: '12345'
    }
    
    const employee = new Employee(data);

    expect(employee).toEqual(expect.any(Object));
});

test("tests privacy of employee object attributes", () => {
    const data = {
        name: 'Dave',
        email: 'dave@testcompany.com',
        id: '12345'
    }
    
    const employee = new Employee(data);

    expect(employee.name).toBe(undefined);
   
    expect(employee.email).toBe(undefined);
   
    expect(employee.id).toBe(undefined);
});

test("tests public data methods of employee objects", () => {
    const data = {
        name: 'Dave',
        email: 'dave@testcompany.com',
        id: '12345'
    }
    
    const employee = new Employee(data);

    expect(employee.getName()).toEqual('Dave');
   
    expect(employee.getEmail()).toEqual('dave@testcompany.com');
   
    expect(employee.getId()).toEqual('12345');
   
    expect(employee.getRole()).toBe('Employee');
});