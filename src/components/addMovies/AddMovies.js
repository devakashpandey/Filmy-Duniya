import React, { useState } from "react";
import { Oval } from "react-loader-spinner";
import { addDoc } from "firebase/firestore";
import { moviesCollRef } from "../../firebase";
import swal from "sweetalert";

const AddMovies = () => {
  const [form, setForm] = useState({
    name: "",
    year: "",
    image: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);

  const adddMovie = async () => {
    setLoading(true);
    await addDoc(moviesCollRef, form);
    swal({
      title: "Movie Added!",
      icon: "success",
      buttons: false,
      timer: 3000,
    });
    setLoading(false);
  };

  return (
    <>
      <section class="text-gray-400 body-font relative">
        <div class="container px-5 py-16 mx-auto">
          <div class="flex flex-col text-center w-full mb-10">
            <h1 class="sm:text-4xl text-2xl font-semibold mb-2 text-white">
              Add <span className="text-[#E94560]">Movie</span>
            </h1>
          </div>
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-gray-200">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    class="w-full bg-gray-100 bg-opacity-80 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="email" class="leading-7 text-sm text-gray-200">
                    Year
                  </label>
                  <input
                    type="number"
                    id="number"
                    name="year"
                    value={form.year}
                    onChange={(e) => setForm({ ...form, year: e.target.value })}
                    class="w-full bg-gray-100 bg-opacity-80 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              <div class="p-2 w-full">
                <div class="relative">
                  <label for="image" class="leading-7 text-sm text-gray-200">
                    Image URL
                  </label>
                  <input
                    id="image"
                    name="image"
                    value={form.image}
                    onChange={(e) =>
                      setForm({ ...form, image: e.target.value })
                    }
                    class="w-full bg-gray-100 bg-opacity-80 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  ></input>
                </div>
              </div>

              <div class="p-2 w-full">
                <div class="relative">
                  <label for="message" class="leading-7 text-sm text-gray-200">
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={form.description}
                    onChange={(e) =>
                      setForm({ ...form, description: e.target.value })
                    }
                    class="w-full bg-gray-100 bg-opacity-80 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div class="p-2 w-full">
                <button
                  onClick={adddMovie}
                  class="flex mx-auto text-white bg-[#0F3460] border-0 py-2 px-8 focus:outline-none hover:bg-[#0F3480]  rounded text-lg"
                >
                  {loading ? <Oval height={25} color="white" /> : "Add"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddMovies;
