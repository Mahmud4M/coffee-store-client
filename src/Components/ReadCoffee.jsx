import { FaEye } from "react-icons/fa6";
import { MdDelete, MdOutlineEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const ReadCoffee = ({ coffee, coffees, setCoffees }) => {
    const {
        _id,
        name,
        chef,
        taste,
        photoUrl
    } = coffee;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://coffe-store-server-lilac.vercel.app/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });
                            const remainning = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remainning);
                        }
                    })
            }
        });
    }

    return (
        <>
            <div>
                <div className="card card-side bg-[#f5f4f1] rounded-none flex gap-3 items-center">
                    <div>
                        <figure><img src={photoUrl} alt="Movie" /></figure>
                    </div>
                    <div>
                        <h1 className="font-raleway"><span className="text-lg font-medium">Name:</span> {name}</h1>
                        <h1 className="font-raleway"><span className="text-lg font-medium">Quantity:</span> {chef}</h1>
                        <h1 className="font-raleway"><span className="text-lg font-medium">Taste:</span> {taste}</h1>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                        <Link>
                            <button className="btn bg-[#d2b48c] text-white"><FaEye /></button>
                        </Link>
                        <Link to={`/updateCoffee/${_id}`}>
                            <button className="btn bg-[#3c393b] text-white"><MdOutlineEdit /></button>
                        </Link>
                        <Link>
                            <button onClick={() => handleDelete(_id)} className="btn bg-[#ea4744] text-white">
                                <MdDelete />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ReadCoffee;