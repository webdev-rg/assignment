import React, { useState } from "react";
import image from "../../assets/images/image-1.png";
import playIcon from "../../assets/images/play.svg";
import google from "../../assets/images/google.svg";
import facebook from "../../assets/images/facebook.svg";
import youtube from "../../assets/images/yt.svg";
import pinterest from "../../assets/images/pinterest.svg";
import twitch from "../../assets/images/twitch.svg";
import { TodoForm } from "../TodoForm/TodoForm";

export const Hero = ({ fetchTodos }) => {
  const [isTodoForm, setIsTodoForm] = useState(false);
  return (
    <>
      <div className="w-full h-full bg-[#f7f7fb] py-8 lg:px-48 md:px-36 px-5">
        <div className="w-full h-full">
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-[#170f49] text-center font-semibold lg:leading-relaxed leading-snug">
            Simply Your Life With Our
            <br />
            Todo App
          </h1>
          <p className="lg:text-[1.8rem] text-xl text-[#6F6C90] text-center mt-4">
            Stay organized and boost your productivity with our intuitive todo
            website.
            <br />
            Experience a modern approach to task management that fits your
            lifestyle.
          </p>
          <div className="mt-4 flex items-center justify-center gap-6">
            <button
              className="bg-[#ff3e54] w-60 h-20 rounded-full text-2xl text-white"
              onClick={() => setIsTodoForm(true)}
            >
              Get Started
            </button>
            <button className="bg-transparent w-60 h-20 rounded-full text-2xl border border-[#ff3e54] text-[#ff3e54] hover:bg-[#ff3e54] hover:text-white transition-all duration-200 ease-in-out">
              Learn More
            </button>
          </div>

          <div className="w-full flex md:flex-row flex-col-reverse items-center justify-between gap-8 mt-8">
            <div className="md:w-[70%] w-full h-[60rem] bg-[#ff3e54] rounded-3xl">
              <div className="w-full h-full sm:py-16 py-10 sm:px-20 px-10 flex flex-col justify-between">
                <div className="w-full">
                  <h1 className="sm:text-9xl text-8xl font-medium text-[#ff9faa]">
                    Organize.
                  </h1>
                  <h1 className="sm:text-9xl text-8xl font-medium text-white">
                    Achieve.
                  </h1>
                  <h1 className="sm:text-9xl text-8xl font-medium text-white">
                    Relax.
                  </h1>
                </div>
                <div>
                  <p className="text-4xl text-[#ffd8dd] leading-snug">
                    Turn clutter into clarity, chaos into control, and dreams
                    into done.bold visions into market success
                  </p>
                </div>
                <div className="flex items-center gap-8">
                  <button className="bg-white py-6 px-8 rounded-full text-2xl text-black">
                    Get Started Today
                  </button>
                  <button className="bg-[#ff5165] py-6 px-8 rounded-full text-2xl text-white">
                    Discover Features
                  </button>
                </div>
              </div>
            </div>
            <div className="md:w-[30%] w-full h-[60rem]">
              <div className="w-full h-full bg-[#ff3e54] rounded-3xl overflow-hidden">
                <div className="w-full h-full relative">
                  <img
                    src={image}
                    className="w-full h-[60rem] object-cover"
                    alt="image"
                  />
                  <div className="w-full h-full flex flex-col justify-between absolute top-0 left-0 right-0">
                    <div className="w-full flex justify-between pt-12 px-12">
                      <div>
                        <h1 className="text-6xl text-[#dbbcb5] font-semibold">
                          Your Tasks.
                        </h1>
                        <h1 className="text-6xl text-white font-semibold">
                          Our Tools.
                        </h1>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-4 h-4 bg-white border border-white rounded-full"></div>
                        <div className="w-4 h-4 border border-white rounded-full"></div>
                        <div className="w-4 h-4 border border-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="w-full flex items-center justify-between px-12">
                      <i className="uil uil-angle-left-b text-white text-5xl"></i>
                      <i className="uil uil-angle-right-b text-white text-5xl"></i>
                    </div>
                    <div className="w-full">
                      <p className="flex items-center gap-2 text-3xl text-white font-medium px-12">
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.4226 16.5261C9.85294 16.5261 7.76978 14.443 7.76978 11.8733C7.76978 9.30356 9.85294 7.2204 12.4226 7.2204C14.9923 7.2204 17.0755 9.30356 17.0755 11.8733C17.0755 14.443 14.9923 16.5261 12.4226 16.5261Z"
                            fill="white"
                          />
                          <path
                            d="M3.40869 13.4626C2.06033 13.7004 1.1361 15.0029 1.6537 16.2705C2.37632 18.0401 3.52916 19.6168 5.02375 20.8489C7.16089 22.6105 9.85645 23.5519 12.6257 23.5036C15.3949 23.4553 18.056 22.4204 20.1304 20.5851C21.581 19.3017 22.6782 17.6857 23.3386 15.892C23.8117 14.6071 22.8425 13.3376 21.4867 13.1471C20.1309 12.9565 18.9135 13.9434 18.2438 15.1376C17.8808 15.7849 17.4096 16.3722 16.845 16.8717C15.6548 17.9247 14.128 18.5184 12.5392 18.5462C10.9503 18.5739 9.40372 18.0338 8.17754 17.023C7.59585 16.5435 7.10443 15.9731 6.71904 15.3388C6.00809 14.1687 4.75705 13.2249 3.40869 13.4626Z"
                            fill="white"
                          />
                          <path
                            d="M23.9646 13.3269C24.024 12.8506 24.0546 12.3655 24.0546 11.8732C24.0546 5.44898 18.8467 0.241089 12.4224 0.241089C5.99817 0.241089 0.790283 5.44898 0.790283 11.8732C0.790283 12.505 0.84065 13.125 0.937593 13.7295C1.47188 12.9981 2.30577 12.4759 3.20648 12.3171C4.18101 12.1453 5.06671 12.3816 5.81558 12.8234C5.77134 12.5131 5.74845 12.1958 5.74845 11.8732C5.74845 8.18732 8.73651 5.19925 12.4224 5.19925C16.1083 5.19925 19.0964 8.18732 19.0964 11.8732C19.0964 12.1163 19.0834 12.3563 19.0581 12.5926C19.7912 12.1247 20.6682 11.8574 21.6483 11.9952C22.5538 12.1225 23.4051 12.6149 23.9646 13.3269Z"
                            fill="white"
                          />
                        </svg>
                        logoipsum
                      </p>
                      <div className="w-full px-12 py-12 bg-gradient-to-t from-white to-transparent">
                        <div className="flex items-end justify-between">
                          <div>
                            <h1 className="text-4xl text-black">
                              Freddie Halvorson
                            </h1>
                            <h1 className="text-2xl text-black opacity-60 mt-2">
                              Chief Productivity Enthusiast
                            </h1>
                          </div>
                          <div className="w-24 h-24 flex">
                            <img src={playIcon} alt="playIcon" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-around flex-wrap gap-8 mt-12">
          <img src={google} className="w-40" alt="" />
          <img src={facebook} className="w-40" alt="" />
          <img src={youtube} className="w-40" alt="" />
          <img src={pinterest} className="w-40" alt="" />
          <img src={twitch} className="w-40" alt="" />
        </div>
      </div>
      {isTodoForm && (
        <TodoForm setIsTodoForm={setIsTodoForm} fetchTodos={fetchTodos} />
      )}
    </>
  );
};
