/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect, useState } from "react";

export const Git = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/acapnes/repos", {
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((data) => setRepos(data));
  }, []);

  return (
    <div className="px-8 grid grid-rows h-fit">
      <div className="pb-2 text-white text-4xl font-bold items-center flex justify-center border-b-2 border-white mb-5">
        GitHub
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
        {repos &&
          repos.map((repo, repoIndex) => (
            <a
              href="#_"
              className="relative inline-block px-4 py-2 font-medium group"
            >
              <span
                className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1
              bg-purple-500 group-hover:-translate-x-0 group-hover:-translate-y-0"
              ></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
              <span className="relative text-black group-hover:text-white">
                <div
                  className="group relative min-h-[7rem] grid grid-rows py-4 px-5 text-gray-600
              before:duration-300 before:content-[''] hover:text-white hover:border-white before:hover:scale-y-100"
                  key={repoIndex}
                >
                  <p className="w-fit font-bold text-lg underline">
                    {repo.name}
                  </p>
                  <p className="h-fit w-[68%]">{repo.description}</p>
                  <div
                    href={repo.html_url}
                    className="absolute top-4 right-8 flex flex-rows space-x-1 items-center"
                  >
                    <p className="text-[1.2rem]">{repo.stargazers_count}</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      fontWeight="light"
                      height="18"
                      fill="purple"
                      class="bi bi-star"
                      viewBox="0 0 16 16"
                      className="group-hover:fill-yellow-500"
                    >
                      <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                    </svg>
                  </div>
                  {repo.language && (
                    <p className="absolute bottom-4 right-8 font-semibold text-md">
                      {repo.language}
                    </p>
                  )}
                </div>
              </span>
            </a>
          ))}
      </div>
    </div>
  );
};
