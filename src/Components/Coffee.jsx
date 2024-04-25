import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const Coffee = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photoUrl = form.photoUrl.value;
        const newCoffee = { name, chef, supplier, taste, category, details, photoUrl };
        console.log(newCoffee)

        // New Coffee Add in Server
        fetch('https://coffe-store-server-lilac.vercel.app/coffee', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId > 0) {
                    Swal.fire({
                        title: 'Success !',
                        text: 'New Coffee Added Successfully !!',
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
                    <h1 className="text-4xl font-rancho font-medium">Add New Coffee</h1>
                    <p className="text-lg font-raleway">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>
                <div className="mt-10">
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-5">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-semibold">Coffee Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-semibold">Chef</span>
                                </label>
                                <input type="text" name="chef" placeholder="Enter coffee chef" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-semibold">Supplier</span>
                                </label>
                                <input type="text" name="supplier" placeholder="Enter coffee Supplier" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-semibold">Taste</span>
                                </label>
                                <input type="text" name="taste" placeholder="Enter coffee taste" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-semibold">Category</span>
                                </label>
                                <input type="text" name="category" placeholder="Enter coffee category" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-semibold">Details</span>
                                </label>
                                <input type="text" name="details" placeholder="Enter coffee details" className="input input-bordered" required />
                            </div>
                        </div>

                        <div className="form-control mt-2">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Photo Url</span>
                            </label>
                            <input type="text" name="photoUrl" placeholder="Enter coffee photo url" className="input input-bordered" required />
                        </div>
                        <br />
                        <div className="form-control mt-6">
                            <button className="btn bg-[#d2b48c] text-xl font-rancho font-medium text-black">Add Coffee</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Coffee;



// Image New Coffee 1 : https://i.postimg.cc/4yBqMDXK/1.png
// Image New Coffee 2 : https://i.postimg.cc/qRb0ZZwb/2.png
// Image New Coffee 3 : https://i.postimg.cc/VNFb5msJ/3.png
// Image New Coffee 4 : https://i.postimg.cc/8kLsCTyN/4.png
// Image New Coffee 5 : https://i.postimg.cc/zXKJjpmN/5.png
// Image New Coffee 6 : https://i.postimg.cc/N05G1tBJ/6.png
