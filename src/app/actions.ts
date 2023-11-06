'use server'

import { z } from "zod";



const schema = z.object({
  name: z.string().min(3).max(50),
  email: z.string().email(),
  password: z.string().min(8).max(100),
  confirmPassword: z.string().min(8).max(100),
});

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