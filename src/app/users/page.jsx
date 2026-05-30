import AddUserModal from "../components/AddUserModal";
import UsersTable from "../components/UsersTable";
import { createUser, deleteUser } from "../lib/actions";
import { getUsers } from "../lib/data";

const UsersPage  =async() => {
    const users=await getUsers();
    return (
        <div>
            <div className='flex justify-between'>
            <h2>Users Management:{users.length}</h2>
            <AddUserModal createUserAction={createUser}></AddUserModal>
            </div>
            <UsersTable users={users} deleteUserAction= {deleteUser}></UsersTable> 
        </div>
    );
};

export default UsersPage;