import React, { useState } from "react";
import axios from "axios";
import heart from "../../assets/images/Heart.png";

export const TodoForm = ({ setIsTodoForm, fetchTodos }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [languages, setLanguages] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAddTodo = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !gender || !email || languages.length === 0) {
      alert("Please fill in all fields.");
      return;
    }

    const uniqueId = Date.now() + Math.random().toString(36).substr(2, 9);

    const todoData = {
      id: uniqueId,
      firstName,
      lastName,
      gender,
      email,
      languages,
    };

    try {
      // Sending the data to the backend
      const response = await axios.post("http://localhost:5000/api/add-todo", {
        todoData,
      });

      // Handle successful submission
      console.log("Response:", response.data);
      setIsSubmitted(true);

      // Fetch the updated todos after adding a new one
      fetchTodos();
    } catch (error) {
      // Handle errors
      console.error(
        "Error adding todo:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <>
      <div className="w-full h-screen fixed top-0 left-0 z-20 bg-[#00000099] flex items-center justify-center">
        {!isSubmitted ? (
          <div className="sm:w-[60rem] w-full p-8 bg-white sm:rounded-2xl relative">
            <div
              className="absolute top-8 right-8"
              onClick={() => setIsTodoForm(false)}
            >
              <i className="uil uil-times text-5xl cursor-pointer"></i>
            </div>
            <div className="w-full h-full flex flex-col justify-between gap-4">
              <h1 className="text-4xl text-black font-semibold">
                Get Started Today
              </h1>
              <p className="text-2xl text-[#424242]">
                Fill in your details and take control of your tasks.
              </p>

              <form className="w-full flex flex-col gap-6">
                <div className="w-full flex items-center justify-between gap-8">
                  <div className="w-full flex flex-col gap-4">
                    <label
                      htmlFor="firstname"
                      className="text-2xl text-black font-medium"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      placeholder="Enter your first name"
                      className="w-full h-20 bg-[#ffeef0] px-8 text-2xl"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="w-full flex flex-col gap-4">
                    <label
                      htmlFor="firstname"
                      className="text-2xl text-black font-medium"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastname"
                      id="lastname"
                      placeholder="Enter your last name"
                      className="w-full h-20 bg-[#ffeef0] px-8 text-2xl"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="w-full flex flex-col gap-4">
                  <span className="text-2xl text-black font-medium">
                    Gender
                  </span>
                  <div className="flex items-center gap-4">
                    <div className="w-48 py-4 px-4 flex items-center gap-4 bg-[#ffeef0]">
                      <input
                        type="radio"
                        className="w-8 h-8 accent-[#ff3e54]"
                        name="gender"
                        id="male"
                        value="male"
                        onChange={(e) => setGender(e.target.value)}
                        required
                      />
                      <label htmlFor="male" className="text-3xl text-[#686465]">
                        Male
                      </label>
                    </div>
                    <div className="w-48 py-4 px-4 flex items-center gap-4 bg-[#ffeef0]">
                      <input
                        type="radio"
                        className="w-8 h-8 accent-[#ff3e54]"
                        name="gender"
                        id="female"
                        value="female"
                        onChange={(e) => setGender(e.target.value)}
                        required
                      />
                      <label
                        htmlFor="female"
                        className="text-3xl text-[#686465]"
                      >
                        Female
                      </label>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col gap-4">
                  <span className="text-2xl text-black font-medium">
                    Language
                  </span>
                  <div className="flex flex-col gap-4">
                    <div className="w-72 py-4 px-4 flex items-center gap-4 bg-[#ffeef0]">
                      <input
                        type="checkbox"
                        className="w-8 h-8 accent-[#ff3e54]"
                        name="english"
                        id="english"
                        value="English"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setLanguages([...languages, e.target.value]);
                          } else {
                            setLanguages(
                              languages.filter(
                                (lang) => lang !== e.target.value
                              )
                            );
                          }
                        }}
                        required
                      />
                      <label
                        htmlFor="english"
                        className="text-3xl text-[#686465]"
                      >
                        English
                      </label>
                    </div>
                    <div className="w-72 py-4 px-4 flex items-center gap-4 bg-[#ffeef0]">
                      <input
                        type="checkbox"
                        className="w-8 h-8 accent-[#ff3e54]"
                        name="hindi"
                        id="hindi"
                        value="Hindi"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setLanguages([...languages, e.target.value]);
                          } else {
                            setLanguages(
                              languages.filter(
                                (lang) => lang !== e.target.value
                              )
                            );
                          }
                        }}
                        required
                        />
                      <label
                        htmlFor="hindi"
                        className="text-3xl text-[#686465]"
                      >
                        Hindi
                      </label>
                    </div>
                    <div className="w-72 py-4 px-4 flex items-center gap-4 bg-[#ffeef0]">
                      <input
                        type="checkbox"
                        className="w-8 h-8 accent-[#ff3e54]"
                        name="marathi"
                        id="marathi"
                        value="Marathi"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setLanguages([...languages, e.target.value]);
                          } else {
                            setLanguages(
                              languages.filter(
                                (lang) => lang !== e.target.value
                              )
                            );
                          }
                        }}
                        required
                        />
                      <label
                        htmlFor="marathi"
                        className="text-3xl text-[#686465]"
                      >
                        Marathi
                      </label>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col gap-4">
                  <label
                    htmlFor="firstname"
                    className="text-2xl text-black font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email address"
                    className="w-full h-20 bg-[#ffeef0] px-8 text-2xl"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="w-full flex items-center gap-4">
                  <input
                    type="checkbox"
                    name="terms-and-condition"
                    id="terms-and-condition"
                    className="w-8 h-8 accent-[#ff3e54]"
                  />
                  <label
                    htmlFor="terms-and-condition"
                    className="text-2xl text-[#686465]"
                  >
                    I agree to the{" "}
                    <a href="#" className="text-[#ff3e54]">
                      terms and condition
                    </a>
                  </label>
                </div>
                <div className="w-full">
                  <input
                    type="submit"
                    value="Done"
                    className="w-full h-20 bg-[#ff3e54] text-3xl text-white font-medium rounded-2xl cursor-pointer"
                    onClick={handleAddTodo}
                  />
                </div>
              </form>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 bg-white py-8 px-20 rounded-3xl">
            <img src={heart} className="w-16" alt="heart" />
            <h1 className="text-4xl text-black font-medium">
              Thank you for connect with us.
            </h1>
            <p className="text-2xl text-[#424242] ">
              Our team will contacting with you soon
            </p>
            <button
              className="w-[30rem] h-16 bg-[#ff3e54] text-white text-2xl font-medium rounded-2xl"
              onClick={() => {
                setIsTodoForm(false);
                fetchTodos();
              }}
            >
              Done
            </button>
          </div>
        )}
      </div>
    </>
  );
};

