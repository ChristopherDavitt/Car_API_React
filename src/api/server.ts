import { stringify } from "querystring";

let token = 'bfaaa2dabe54628af62a488e8c68cf82c2beaf998f012651'

export const serverCalls = {
    get: async() => {
        const response = await fetch(`https://drone-inventory-81.herokuapp.com/api/drones`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },
    create: async( data: any = {} ) => {
        const response = await fetch(`https://drone-inventory-81.herokuapp.com/api/drones`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },
    update: async( id:string, data:any = {} ) => {
        const response = await fetch(`https://drone-inventory-81.herokuapp.com/api/drones/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        
    },
    delete: async(id:string) => {
        const response = await fetch(`https://drone-inventory-81.herokuapp.com/api/drones/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },
}