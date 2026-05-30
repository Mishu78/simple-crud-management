import UsersTable from "../components/UsersTable";
import { deleteUser } from "../lib/actions";
import { getUsers } from "../lib/data";

const UsersPage  =async() => {
    const users=await getUsers();
    return (
        <div>
            <h2>Users Management:{users.length}</h2>
            <UsersTable users={users} deleteUserAction= {deleteUser}></UsersTable> 
        </div>
    );
};

export default UsersPage;