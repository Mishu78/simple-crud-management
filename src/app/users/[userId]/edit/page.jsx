import { updateUser } from '@/app/lib/actions';
import { getUserById } from '@/app/lib/data';
import { Modal } from '@gravity-ui/uikit';
import { Button, Input, Label, TextField } from '@heroui/react';
import React from 'react';

const UserEditPage =async ({params}) => {
    const {userId}=await params;
    const user = await getUserById(userId);

    const updateUserWrapper = async (formData)=>{
        'use server';
        return updateUser(userId,formData);
    }
    return (
        <div>
            <h2>User editing</h2>
            <div>
                 <form action={updateUserWrapper} className="flex flex-col gap-4">
                                  <TextField className="w-full" name="name" defaultValue={user?.name} type="text" variant="secondary">
                                    <Label>Name</Label>
                                    <Input placeholder="Enter your name" />
                                  </TextField>
                                  <TextField className="w-full" name="email" defaultValue={user?.email} type="email" variant="secondary">
                                    <Label>Email</Label>
                                    <Input placeholder="Enter your email" />
                                  </TextField>
                                  <TextField className="w-full" name="role" defaultValue={user?.role}  type="tel" variant="secondary">
                                    <Label>Role</Label>
                                    <Input placeholder="Enter user role" />
                                  </TextField>
                                
                               <div className='flex'>
                                 <Button slot="close" variant="secondary">
                                Cancel
                              </Button>
                              <Button type='submit' slot="close">Update user</Button>
                            
                               </div>
                             
                                </form>
            </div>
        </div>
    );
};

export default UserEditPage;