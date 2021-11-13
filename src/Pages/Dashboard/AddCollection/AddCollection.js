import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddCollection = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  // adding new collection
  const onSubmit = (data) => {
    console.log(data);
    fetch(`https://limitless-gorge-71694.herokuapp.com/addCollection`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          Swal.fire("Congrats!", "Collection has been added!");
        } else {
          alert("Try again");
        }
      });

    reset();
  };

  return (
    <div className="review-container ">
      <div className=" row mb-5">
        <div className="col-12 col-md-8 col-lg-5 ms-lg-5 ps-lg-5">
          <div className="review-box  pb-3 d-flex justify-content-center align-items-center">
            <div className="booking-form ">
              <p className="fs-5 mt-4 ps-md-5 ps-lg-5 pe-lg-4 fw-bold text-black">
                Add Collection
              </p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  className="p-2  text-white my-2"
                  placeholder="Collection Name"
                  {...register("name", { required: true })}
                />
                <br />
                <input
                  type="text"
                  className="p-2 text-white my-2"
                  placeholder="Price"
                  {...register("price", { required: true })}
                />
                <br />

                <input
                  type="text"
                  className="p-2 my-2 text-secondary"
                  placeholder="Add Collection Image"
                  {...register("img", { required: true })}
                />
                <br />

                <textarea
                  className="p-2 my-2 rounded-3 bg-black w-100 text-secondary"
                  placeholder="Description"
                  {...register("des", { required: true })}
                />
                <br />
                <input
                  className="p-2 my-2 text-secondary"type="number" maxLength="5" minLength="1"
                  placeholder="Rating"
                  {...register("rating", { required: true })}
                />
                <br />
                <input
                  type="text"
                  className="p-2  text-white my-2"
                  placeholder="Transmission"
                  {...register("transmission", { required: true })}
                />
                <br />

                <input
                  className="p-2 my-2 text-secondary"
                  placeholder="passenger"
                  {...register("passenger", { required: true })}
                />
                <br />
                <input
                  className="p-2 my-2 text-secondary"
                  placeholder="Top Speed"
                  {...register("topSpeed", { required: true })}
                />
                <br />
                <input
                  className="p-2 my-2 text-secondary"
                  placeholder="hp"
                  {...register("hp", { required: true })}
                />
                <br />
                <input
                  className="p-2 my-2 text-secondary"
                  placeholder="Km/Hour"
                  {...register("kmHour", { required: true })}
                />
                <br />

                {errors.exampleRequired && <span>This field is required</span>}

                <input
                  className="  px-3 mt-3 submit-btn bg-black  fs-6   btn "
                  type="submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCollection;
