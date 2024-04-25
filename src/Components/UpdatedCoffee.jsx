import { FaArrowLeft } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const UpdatedCoffee = () => {

    const coffee = useLoaderData();
    const {
        _id,
        name,
        chef,
        supplier,
        taste,
        category,
        details,
        photoUrl
    } = coffee;

    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photoUrl = form.photoUrl.value;
        const updateCoffee = { name, chef, supplier, taste, category, details, photoUrl };
        console.log(updateCoffee)



        // New Coffee Add in Server
        fetch(`https://coffe-store-server-lilac.vercel.app/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success !',
                        text: 'Coffee Updated Successfully !!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })

    }
    return (
        <>
            <Link to="/home">
                <div className="flex gap-3 items-center mt-16 lg:ml-[19rem]">
                    <FaArrowLeft />
                    <h1 className="text-lg font-rancho">Back to Home</h1>
                </div>
            </Link>
            <div className="w-3/5 mx-auto p-10 bg-[#f4f3f0] mt-10">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-rancho font-medium">Update Coffee</h1>
                    <p className="text-lg font-raleway">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>
                <div className="mt-10">
                    <form onSubmit={handleUpdate}>
                        <div className="grid grid-cols-2 gap-5">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-semibold">Coffee Name</span>
                                </label>
                                <input type="text" name="name" defaultValue={name} placeholder="Coffee Name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-semibold">Chef</span>
                                </label>
                                <input type="text" name="chef" defaultValue={chef} placeholder="Enter coffee chef" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-semibold">Supplier</span>
                                </label>
                                <input type="text" name="supplier" defaultValue={supplier} placeholder="Enter coffee Supplier" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-semibold">Taste</span>
                                </label>
                                <input type="text" name="taste" defaultValue={taste} placeholder="Enter coffee taste" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-semibold">Category</span>
                                </label>
                                <input type="text" name="category" defaultValue={category} placeholder="Enter coffee category" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-semibold">Details</span>
                                </label>
                                <input type="text" name="details" defaultValue={details} placeholder="Enter coffee details" className="input input-bordered" required />
                            </div>
                        </div>

                        <div className="form-control mt-2">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Photo Url</span>
                            </label>
                            <input type="text" name="photoUrl" defaultValue={photoUrl} placeholder="Enter coffee photo url" className="input input-bordered" required />
                        </div>
                        <br />
                        <div className="form-control mt-6">
                            <button className="btn bg-[#d2b48c] text-xl font-rancho font-medium text-black">Update Coffee</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default UpdatedCoffee;