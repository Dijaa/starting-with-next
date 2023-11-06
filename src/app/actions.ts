'use server'

export interface dataForm {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

 export async function create(data: dataForm) {
   /* formData
    { name: 'name', value: '222' },
    { name: 'email', value: '222@aas.ccd' },
    { name: 'password', value: '333' },
    { name: 'confirm-password', value: '444' }
*/
    console.log(data);
    
 }