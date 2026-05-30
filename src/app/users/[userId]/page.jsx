import { getUserById } from '@/app/lib/data';
import React from 'react';

const userDetailPage= async({params}) => {
    const {userId}= await params;
    const user = await getUserById(userId);
    console.log(user)
    return (
        <div>
            <h2>User Details</h2>
        </div>
    );
};

export default userDetailPage;