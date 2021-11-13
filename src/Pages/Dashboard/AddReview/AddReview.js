import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import "./AddReview.css";
const AddReview = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  // add new review to home
  const onSubmit = (data) => {
    fetch(`https://limitless-gorge-71694.herokuapp.com/addreview`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          Swal.fire("Good job!", "Your Review has been added!");
        } else {
          alert("Try again");
        }
      });

    reset();
  };

  return (
    <div className="review-container ">
      <div className=" row my-3">
        <div className="col-12 col-md-8 col-lg-5 ms-lg-5 ps-lg-5">
          <div className="review-box  pb-4 d-flex justify-content-center align-items-center">
            <div className="booking-form ">
              <p className="fs-5 mt-4 ps-md-5 ps-lg-5 pe-lg-4 fw-bold text-black">
                Add Review
              </p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  className="p-2  text-white my-2"
                  value={user.displayName}
                  {...register("userName", { required: true })}
                />
                <br />
                <input
                  type="email"
                  className="p-2 text-white my-2"
                  value={user.email}
                  {...register("userEmail", { required: true })}
                />
                <br />
                <input
                  type="text"
                  className="p-2  text-white my-2"
                  placeholder="Name"
                  {...register("name", { required: true })}
                />
                <br />

                <input
                  type="text"
                  className="p-2 my-2 text-secondary"
                  placeholder="Add Your Image"
                  {...register("img", { required: true })}
                />
                <br />

                <input
                  className="p-2 my-2 text-secondary"
                  maxLength="5"
                  minLength="1"
                  type="number"
                  placeholder="Rating"
                  {...register("rating", { required: true })}
                />
                <br />
                <textarea
                  className="p-2 my-2 rounded-3 bg-black w-100 text-secondary"
                  placeholder="Description"
                  {...register("des", { required: true })}
                />
                <br />
                <input
                  className="p-2 my-2 text-secondary"
                  placeholder="Profession "
                  {...register("profession", { required: true })}
                />
                <br />

                {errors.exampleRequired && <span>This field is required</span>}

                <input
                  className=" px-3 mt-3 submit-btn bg-black  fs-6   btn "
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

export default AddReview;
