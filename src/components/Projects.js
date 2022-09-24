/* eslint-disable jsx-a11y/alt-text */
import React from "react";

export const Projects = () => {
  return (
    <div className="px-8 grid grid-cols-1 min-h-screen h-fit">
      <div className="pb-2 text-white text-4xl font-bold items-center flex justify-center border-b-2 border-white mb-5">
        Projects
      </div>

      <div className="w-full py-4 lg:px-10 md:px-5 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 place-items-center mb-8">
        <div className="group transform w-fit h-fit transition duration-500 px-10 py-4 hover:scale-125 flex flex-col items-center">
          <img
            src="/assets/discord_bot.png"
            className=" h-3/6 w-3/6 rounded-xl mb-2"
          />
          <div className="hidden flex-col group-hover:block text-lg bg-slate-700 bg-opacity-40 w-full py-2 px-4 text-[1rem] font-light rounded-xl text-gray-300 text-center">
            <p className="font-bold text-lg">Anduril BOT</p>
            <p>Moderation & Music discord bot with Lord of The Rings themes.</p>
            <div className="w-full text-end text-yellow-400 font-semibold text-sm">
              <p>JavaScript</p>
            </div>
          </div>
        </div>

        <div className="group transform w-fit h-fit transition duration-500 px-10 py-4 hover:scale-125 flex flex-col items-center">
          <img
            src="/assets/lost_mj.png"
            className=" h-3/6 w-3/6 rounded-lg mb-2"
          />
          <div className="hidden flex-col group-hover:block text-lg bg-slate-700 bg-opacity-40 w-full py-2 px-4 text-[1rem] font-light rounded-xl text-gray-300 text-center">
            <p className="font-bold text-lg">Lost & Found App</p>
            <p>
              Mobile application where found items are saved and lost items are
              found.
            </p>
            <div className="w-full flex flex-row justify-end space-x-1 ">
              <p className="text-sm text-blue-400 font-semibold">Flutter </p>
              <p className="text-sm text-purple-700 font-semibold">PHP </p>
            </div>
          </div>
        </div>

        <div className="group transform w-fit h-fit transition duration-500 px-10 py-4 hover:scale-125 flex flex-col items-center">
          <img
            src="/assets/car_dealer.png"
            className=" h-3/5 w-3/5 rounded-lg mb-2"
          />
          <div className="hidden flex-col group-hover:block text-lg bg-slate-700 bg-opacity-40 w-full py-2 px-4 text-[1rem] font-light rounded-xl text-gray-300 text-center">
            <p className="font-bold text-lg">House of Cars</p>
            <p>A website where the features of cars are exhibited and sold.</p>
            <div className="w-full flex flex-row justify-end space-x-1 ">
              <p className="text-sm text-orange-400 font-semibold">HTML </p>
              <p className="text-sm text-purple-400 font-semibold">CSS </p>
              <p className="text-sm text-yellow-400 font-semibold">
                JavaScript
              </p>
              <p className="text-sm text-purple-700 font-semibold">PHP</p>
            </div>
          </div>
        </div>

        <div className="group transform w-fit h-fit transition duration-500 px-10 py-4 hover:scale-125 flex flex-col items-center">
          <img
            src="/assets/chat_app.png"
            className=" h-3/6 w-3/6 rounded-xl mb-2"
          />
          <div className="hidden flex-col group-hover:block text-lg bg-slate-700 bg-opacity-40 w-full py-2 px-4 text-[1rem] font-light rounded-xl text-gray-300 text-center">
            <p className="font-bold text-lg">Lets Chat!</p>
            {/* <p>Mobile chat application.</p> */}
            <p>Take a selfie 😝</p>
            <p>Share with your friends what you are doing now!</p>
            <p>Send photo,video,code or message to your friends!</p>
            <div className="w-full flex flex-row justify-end space-x-1 ">
              <p className="text-sm text-orange-400 font-semibold">HTML </p>
              <p className="text-sm text-purple-400 font-semibold">CSS </p>
              <p className="text-sm text-yellow-400 font-semibold">
                JavaScript
              </p>
              <p className="text-sm text-purple-700 font-semibold">PHP</p>
            </div>
          </div>
        </div>

        <div className="group transform w-fit h-fit transition duration-500 px-10 py-4 hover:scale-125 flex flex-col items-center">
          <img
            src="/assets/transfer.png"
            className=" h-3/6 w-3/6 rounded-xl mb-2"
          />
          <div className="hidden flex-col group-hover:block text-lg bg-slate-700 bg-opacity-40 w-full py-2 px-4 text-[1rem] font-light rounded-xl text-gray-300 text-center">
            <p className="font-bold text-lg">SQL Managemer</p>
            <p>SQL extended management interface.</p>
            <p>Creating, editing sql tables and outputs class, json formats.</p>
            <div className="w-full flex flex-row justify-end space-x-1 ">
              <p className="text-sm text-blue-600 font-semibold">React </p>
              <p className="text-sm text-purple-500 font-semibold">Bootstrap</p>
            </div>
          </div>
        </div>

        <div className="group transform w-fit h-fit transition duration-500 px-10 py-4 hover:scale-125 flex flex-col items-center">
          <img
            src="/assets/dashboard.jpg"
            className=" h-3/6 w-3/6 rounded-xl mb-2"
          />
          <div className="hidden flex-col group-hover:block text-lg bg-slate-700 bg-opacity-40 w-full py-2 px-4 text-[1rem] font-light rounded-xl text-gray-300 text-center">
            <p className="font-bold text-lg">File Transfer Service</p>
            <p>Extanted SQL management desktop application.</p>
            <p>
              Editing SQL tables with grid views.Get backup, scripts. Convert to
              SQLite format or edit.
            </p>
            <div className="w-full flex flex-row justify-end space-x-1 ">
              <p className="text-sm text-green-500 font-semibold">NodeJS </p>
              <p className="text-sm text-white font-semibold">ExpressJS </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
