//  'https://jsonplaceholder.typicode.com/users'

class User{
    async getUser()  {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const responseData = await response.json()
        return responseData
    }
}
