import React from "react";

const VirtualReality = () => {
  return (
    <div className="bg-gray-100 p-2">
      <div className="bg-white border-1 border-gray-200 rounded-xl  p-4">
        <div
          style={{ height: "600px" }}
          className="overflow-scroll overflow-x-hidden"
        >
          <div className="">
            <h1 className="text-2xl font-bold text-black">VirtualReality</h1>
            <p>Check the sales, value and bounce rate by country.</p>
          </div>
          <div className="pr-4">
            <div className="flex justify-between">
              <div
                style={{ border: "1px solid #e5e6e3" }}
                className="p-4 bg-gray-100 rounded-xl mt-4 w-64 mr-8"
              >
                <div
                  style={{ borderBottom: "1px solid lightgray" }}
                  className="flex justify-between  pb-4"
                >
                  <div>
                    <p className="text-gray-600">Today's Money</p>
                    <p className="font-bold text-2xl">$53K</p>
                  </div>
                  <h1 className="bg-slate-900 pt-3 pb-0 pl-3 pr-3 rounded-xl">
                    <i className="bi text-white bi-wallet-fill text-3xl"></i>
                  </h1>
                </div>
                <p className="mt-1 text-gray-600">
                  <span className="text-green-700 font-bold mr-1">+53%</span>
                  than last week
                </p>
              </div>
              <div
                style={{ border: "1px solid #e5e6e3" }}
                className="p-4 bg-gray-100 rounded-xl mt-4 w-64 mr-8"
              >
                <div
                  style={{ borderBottom: "1px solid lightgray" }}
                  className="flex justify-between  pb-4"
                >
                  <div>
                    <p className="text-gray-600">Today's users</p>
                    <p className="font-bold text-2xl">2300</p>
                  </div>
                  <h1 className="bg-slate-900 pt-3  pl-3 pr-3 rounded-xl">
                    <i className="bi bi-person-fill text-white text-3xl"></i>
                  </h1>
                </div>
                <p className="my-1 text-gray-600">
                  <span className="text-green-700 mr-1 font-bold">+72%</span>
                  than last week
                </p>
              </div>
              <div
                style={{ border: "1px solid #e5e6e3" }}
                className="p-4 bg-gray-100 rounded-xl mt-4 w-64 mr-8"
              >
                <div
                  style={{ borderBottom: "1px solid lightgray" }}
                  className="flex justify-between pb-4"
                >
                  <div>
                    <p className="text-gray-600">Ads views</p>
                    <p className="font-bold text-2xl">30,446</p>
                  </div>
                  <h1 className="bg-slate-900 pt-3  pl-3 pr-3 rounded-xl">
                    <i className="bi text-white bi-reception-3 text-3xl"></i>
                  </h1>
                </div>
                <p className="mt-1 text-gray-600">
                  <span className="text-red-700 font-bold mr-1">-28%</span>than
                  last week
                </p>
              </div>
              <div
                style={{ border: "1px solid #e5e6e3" }}
                className="p-4 bg-gray-100 rounded-xl mt-4 w-64 "
              >
                <div
                  style={{ borderBottom: "1px solid lightgray" }}
                  className="flex justify-between  pb-4"
                >
                  <div>
                    <p className="text-gray-600">Sales</p>
                    <p className="font-bold text-2xl">$535K</p>
                  </div>
                  <h1 className="bg-slate-900 pt-3  pl-3 pr-3 rounded-xl">
                    <i className="bi text-white bi-printer-fill text-3xl"></i>
                  </h1>
                </div>
                <p className="mt-2 text-gray-500">
                  <span className="text-green-700 font-bold mr-1">+96%</span>
                  than last week
                </p>
              </div>
            </div>
            <div className="flex justify-between">
              <div
                style={{ border: "1px solid #e5e6e3" }}
                className="p-4 bg-gray-100 rounded-xl mt-4 w-80"
              >
                <h1 className="font-bold text-2xl">Website Views</h1>
                <p>Last Campaign Performance</p>
                <hr />
                <p className="text-gray-400">camaign sent 2 days ago</p>
              </div>
              <div
                style={{ border: "1px solid #e5e6e3" }}
                className="p-4 bg-gray-100 rounded-xl mt-4 w-80"
              >
                <h1 className="font-bold text-2xl">Website Views</h1>
                <p>Last Campaign Performance</p>
                <hr />
                <p className="text-gray-400">camaign sent 2 days ago</p>
              </div>
              <div
                style={{ border: "1px solid #e5e6e3" }}
                className="p-4 bg-gray-100 rounded-xl mt-4 w-80"
              >
                <h1 className="font-bold text-2xl">Website Views</h1>
                <p>Last Campaign Performance</p>
                <hr />
                <p className="text-gray-400">camaign sent 2 days ago</p>
              </div>
            </div>
            <div className="flex justify-between">
              <div
                style={{ border: "1px solid #e5e6e3" }}
                className="p-4 bg-gray-100 rounded-xl mt-4 w-80"
              >
                <h1 className="font-bold text-2xl">Website Views</h1>
                <p>Last Campaign Performance</p>
                <hr />
                <p className="text-gray-400">camaign sent 2 days ago</p>
              </div>
              <div
                style={{ border: "1px solid #e5e6e3" }}
                className="p-4 bg-gray-100 rounded-xl mt-4 w-80"
              >
                <h1 className="font-bold text-2xl">Website Views</h1>
                <p>Last Campaign Performance</p>
                <hr />
                <p className="text-gray-400">camaign sent 2 days ago</p>
              </div>
              <div
                style={{ border: "1px solid #e5e6e3" }}
                className="p-4 bg-gray-100 rounded-xl mt-4 w-80"
              >
                <h1 className="font-bold text-2xl">Website Views</h1>
                <p>Last Campaign Performance</p>
                <hr />
                <p className="text-gray-400">camaign sent 2 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualReality;
