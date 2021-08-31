/*

User story:
As a user, I want to be able to view my own profile data because I want to customize my online account for interactions with other users.

What CRUD do we need here? - Direct work with the database
Read for viewing data
Update for customizing data

Authorization - act as users to edit the database
User can edit only their own data
User can not edit other user's data
Admin can edit any user's data


Seed file needs to make:
- At least 2 users (one to act in the test, one to be edited upon)
- At least 1 admin
- A bunch of valid profile data for any update tests
- A bunch of invalid profile data for any update tests

*/


describe('User table functionality as the app', () => {
    test('User can view their own data ', () => {
        
    })

    test('User can sign up a new account ', () => {
        
    })

    // Golden path || happy path
    test('User data can be edited with valid data', () => {
        
    })
    
    // Dark path || unhappy path
    test('User data can not be edited with invalid data ', () => {
        
    })
    
    
    
})

describe('User CRUD functionaly as users', () => {
    test('User can edit their own data ', () => {
        
    })

    test('User can not edit other users data', () => {
        
    })
    
    test('Admin can edit any users data', () => {
        
    })
    

    
})

