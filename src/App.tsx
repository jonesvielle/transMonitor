import React from "react";
import NavbarComponent from "./components/navbarComponent";
import TileComponent from "./components/tileComponent";
import SideBarComponent from "./components/sideBarComponent";
import GraphCardImage from "./images/small chart.png";
import ShortCardComponent from "./components/shortCardComponent";
import LineChartComponent from "./components/LineCharttComponent";
import { IoSearchOutline } from "react-icons/io5";
import TableTileComponent from "./components/tableTileComponent";

function App() {
  return (
    <div className="App flex flex-col">
      <NavbarComponent />
      <div className="flex">
        <SideBarComponent />
        <div className="bg-light w-10/12 p-5">
          {/* top row */}
          <div className="flex">
            <div>
              <ShortCardComponent
                text="Daily Transaction Volume"
                image={GraphCardImage}
              />
            </div>
            <div className="ml-5">
              <ShortCardComponent
                text="Daily Transaction Volume"
                image={GraphCardImage}
              />
            </div>
            <div className="ml-5">
              <ShortCardComponent
                text="Daily Transaction Volume"
                image={GraphCardImage}
              />
            </div>
            <div className="ml-5">
              <ShortCardComponent
                text="Daily Transaction Volume"
                image={GraphCardImage}
              />
            </div>
          </div>
          <div className="flex mt-8">
            <div className="bg-white w-8/12 p-5">
              <LineChartComponent />
            </div>
            <div className="w-5/12">
              <div className="bg-white ml-5 p-5">
                <div className="font-bold text-xs">Orders</div>
                <div className="flex my-5">
                  <div className="bg-green w-4/12 p-1"></div>
                  <div className="bg-yellow-400 w-8/12  p-1"></div>
                </div>
                <div className="flex">
                  <div className="text-xs">Pending Orders: </div>
                  <div className="font-bold text-yellow-400 ml-1 text-xs">
                    80
                  </div>
                </div>
                <div className="flex mt-3">
                  <div className="text-xs">Completed Orders: </div>
                  <div className="font-bold text-green ml-1 text-xs">20</div>
                </div>
                <div className="flex mt-3">
                  <div className="text-xs">Total: </div>
                  <div className="font-bold text-blue ml-1 text-xs">100</div>
                </div>
              </div>
              {/* .... */}
              <div className="bg-white ml-5 p-5 mt-2">
                <div className="font-bold text-xs">Payments</div>
                <div className="flex my-5">
                  <div className="bg-green w-4/12 p-1"></div>
                  <div className="bg-yellow-400 w-8/12  p-1"></div>
                </div>
                <div className="flex">
                  <div className="text-xs">Reconciled Payments: </div>
                  <div className="font-bold text-yellow-400 ml-1 text-xs">
                    80
                  </div>
                </div>
                <div className="flex mt-3">
                  <div className="text-xs">Unreconcilled Payments: </div>
                  <div className="font-bold text-green ml-1 text-xs">20</div>
                </div>
                <div className="flex mt-3">
                  <div className="text-xs">Total: </div>
                  <div className="font-bold text-blue ml-1 text-xs">100</div>
                </div>
              </div>
            </div>
          </div>
          {/* Payments */}
          <div className="mt-5">
            <div className="text-4xl">Payments</div>
            <div className="mt-5 text-sm  flex items-center">
              <div>Showing</div>
              {/* <div>20</div> */}
              <select
                className="bg-white border-0 ml-3"
                style={{ outline: "none" }}
              >
                <option>20</option>
                <option>30</option>
                <option>40</option>
                <option>50</option>
              </select>
              <div className="ml-3">out of 500 payments</div>
              <div className="ml-10 flex items-center">
                <IoSearchOutline />
                <div>
                  <input
                    className="ml-1 border-b-1 bg-light"
                    placeholder="Search"
                    style={{ outline: "none" }}
                  />
                  <div
                    className="mt-1"
                    style={{ borderColor: "black", borderBottomWidth: 1 }}
                  ></div>
                </div>
              </div>
              <div className=" ml-20">Show</div>
              <select
                className="bg-white border-0 ml-3"
                style={{ outline: "none" }}
              >
                <option>All</option>
                <option>Reconcilled</option>
                <option>Un-reconcilled</option>
                <option>Settled</option>
                <option>Unsettled</option>
              </select>
            </div>
            {/* table section */}
            <div className="flex text-sm text-white items-center py-5 mt-2 bg-darkGrey">
              {" "}
              <div className=" w-1/12 flex"></div>{" "}
              <div className=" w-5/12">Item Type</div>
              <div className=" w-1/12">Price</div>
              <div className=" w-2/12">Transaction No</div>
              <div className=" w-1/12">Time</div>
            </div>
            <TableTileComponent
              itemType="Apple Mac Book 15” 250 SSD 12GB"
              price="76336"
              transactionNo="6356376764"
              time="12:50"
              paymentState="Reconcilled"
            />
            <TableTileComponent
              itemType="Apple Mac Book 15” 250 SSD 12GB"
              price="76336"
              transactionNo="6356376764"
              time="12:50"
              paymentState="Unreconcilled"
            />
            <TableTileComponent
              itemType="Apple Mac Book 15” 250 SSD 12GB"
              price="76336"
              transactionNo="6356376764"
              time="12:50"
              paymentState="Pending"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
