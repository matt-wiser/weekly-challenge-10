const Employee = require('../lib/Employee.js');

test("creates a new employee object", () => {
    const data = {
        name: 'Dave',
        email: 'dave@testcompany.com',
        id: '12345'
    }
    
    const employee = new Employee(data);
    
    expect(employee.name).toBe(undefined);
    expect(employee.getName()).toEqual('Dave');
   
    expect(employee.email).toBe(undefined);
    expect(employee.getEmail()).toEqual('dave@testcompany.com');
   
    expect(employee.id).toBe(undefined);
    expect(employee.getId()).toEqual('12345');
   
    expect(employee.role).toBe(undefined);
    expect(employee.getRole()).toBe('Employee');
});