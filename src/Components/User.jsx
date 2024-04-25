import { useLoaderData } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import Swal from "sweetalert2";


const User = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers)

    const handleDelete = id => {
        console.log('deleted', id)
        fetch(`https://coffe-store-server-lilac.vercel.app/user/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    console.log('Deleted')
                    // Show sweet alert if deleted
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your Coffee has been deleted.",
                        icon: "success"
                    });
                    // Remove From User
                    const remanning = users.filter(user => user._id !== id);
                    setUsers(remanning)
                }
            })
    }
    return (
        <div>
            <div className="px-24 py-10">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Created Time</th>
                                <th>Last SignIn</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                users.map(user => <tr key={user._id} className="bg-base-200">
                                    <th>1</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.createdAt}</td>
                                    <td>{user.lastLoggedAt}</td>
                                    <td
                                        onClick={() => handleDelete(user._id)}
                                    ><MdDelete /></td>
                                </tr>)
                            }
                            {/* row 2 */}
                            {/* <tr>
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>Purple</td>
                            </tr> */}
                            {/* row 3 */}
                            {/* <tr>
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>Tax Accountant</td>
                                <td>Red</td>
                            </tr> */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default User;