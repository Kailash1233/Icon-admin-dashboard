"use client"
import { useState } from "react";
import Modal from "./components/Modal";

export default function Home() {
  const [data, setData] = useState([])
  const [source, setSource] = useState(null)
  const [header, setHeader] = useState('Click any of the above buttons');
  const [alldata, setAlldata] = useState(false)
  
  const getAll = async () => {
        clearDataArray();
        setAlldata(true);
        const res = await fetch("./api/getall");
        const response = await res.json();
        setDataArray(response);

  }
  const getPaperDeFiesta = async () => {
    clearDataArray();
    const res = await fetch("./api/getpapaerdefiesta");
    const response = await res.json();
    setDataArray(response);

  }
  const getDatabaseDetectives = async () => {
    clearDataArray();
    const res = await fetch("./api/getdatabasedetectives");
    const response = await res.json();
    setDataArray(response);

  }
  const getAlgorhythm = async () => {
    clearDataArray();
    const res = await fetch("./api/getalgorhythm");
    const response = await res.json();
    setDataArray(response);

  }
  const getTechQuest = async () => {
    clearDataArray();
    const res = await fetch("./api/gettechquest");
    const response = await res.json();
    setDataArray(response);

  }
  const getVoxreck = async () => {
    clearDataArray();
    const res = await fetch("./api/getvoxreck");
    const response = await res.json();
    setDataArray(response);

  }
  const getIgniteTheSatge = async () => {
    clearDataArray();
    const res = await fetch("./api/getignitethestage");
    const response = await res.json();
    setDataArray(response);

  }
  const getAdrenalineRush = async () => {
    clearDataArray();
    const res = await fetch("./api/getadrenalinerush");
    const response = await res.json();
    setDataArray(response);

  }
  const getIplAuction = async () => {
    clearDataArray();
    const res = await fetch("./api/getiplauction");
    const response = await res.json();
    setDataArray(response);

  }
  const getWorkshop = async () => {
    clearDataArray();
    const res = await fetch("./api/getall");
    const response = await res.json();
    setDataArray(response);

  }
  const date = (x) => {
    return new Date(x).toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
  }
  const handleclose = () => {
    setSource(null)
  }
  const clearDataArray = () => {
    setHeader("Loading, Please wait...")
    setData([]);
    setAlldata(false);
  }
  const setDataArray = (response) => {    
    if(alldata && response.data.length > 0){
      setData(response.data)
      setHeader("All Events Total Registration : " + response.data.length);
    }else if(!alldata && response.data.length > 0){
      setData(response.data);
      setHeader((response.data[0].eventname + " Total Registration : " + response.data.length));  
    }else if(response.data.length == 0 && response.msg != "You are not authorized to view this data"){
      setData([])
      setHeader("NO REGISTRATIONS YET!");
    }else if(response.msg == "You are not authorized to view this data"){
      setData([])
      setHeader(response.msg);
    }
  }
  const teamEvents = ["PAPER-DE-FIESTA", "TECH QUEST", "IGNITE THE STAGE", "ADRENALINE RUSH", "IPL AUCTION"];

  return (
      <>
      <div className="border-spacing-y-2 ml-3 mr-3">
      <span><button type="button" onClick={getAll} className="border-spacing-y-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Get All data</button></span> 
      <span><button type="button" onClick={getPaperDeFiesta} className="border-spacing-y-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">PAPER-DE-FIESTA</button></span> 
      <span><button type="button" onClick={getDatabaseDetectives} className="border-spacing-y-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">DATABASE DETECTIVES</button></span> 
      <span><button type="button" onClick={getAlgorhythm} className="border-spacing-y-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">ALGO-RHYTHM</button></span> 
      <span><button type="button" onClick={getTechQuest} className="border-spacing-y-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">TECH QUEST</button></span> 
      <span><button type="button" onClick={getVoxreck} className="border-spacing-y-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">VOXRECK</button></span> 
      <span><button type="button" onClick={getIgniteTheSatge} className="border-spacing-y-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">IGNITE THE STAGE</button></span> 
      <span><button type="button" onClick={getAdrenalineRush} className="border-spacing-y-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">ADRENALINE RUSH</button></span> 
      <span><button type="button" onClick={getIplAuction} className="border-spacing-y-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">IPL AUCTION</button></span> 
      </div>
      <div className="flex items-center sm:justify-center ml-3 mr-3 border-spacing-y-2 text-2xl font-bold bg-red-800 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-red-500">{header ? header : ""}</div>
      <div className="flex items-center sm:justify-center ml-3 mr-3 sm:ml-3">
          <table className="text-sm border-separate border-spacing-y-1">
            {data && data.length > 0 && <thead class="sr-only text-left font-medium text-lg sm:not-sr-only">
              <tr>
                <th>S.No</th>
                <th>Name</th>
                {(teamEvents.includes(header.split(" Total")[0]) || alldata) &&<th>Members</th>}
                <th>Email</th>                
                <th>Phone</th>
                <th>College</th>
                <th>Dept</th>
                <th>Year</th>                
                {alldata && <th>Event</th>}
                <th>Date</th>
                <th>Payment</th>
              </tr>
            </thead>}
            <tbody>
            {data && data.map((event, index) => (              
              <tr key={index} className="tr-class">
                <td className="td-class">{index + 1}</td>
                <td className="td-class">{event.fullname}</td>
                {(teamEvents.includes(header.split(" Total")[0]) || alldata) && <td className="td-class">{event.teammembers}</td>}
                <td className="td-class">{event.email}</td>
                <td className="td-class">{event.phonenumber}</td>
                <td className="td-class">{event.collegename}</td>
                <td className="td-class">{event.department}</td>
                <td className="td-class">{event.year}</td>
                {alldata && <td className="td-class">{event.eventname}</td>}
                <td className="td-class">{date(event.date)}</td>
                <td className="sr-only sm:not-sr-only td-class"><button type="button" onClick={() => setSource(event.paymentfile)} className="border-spacing-y-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Show</button></td>
                <td className="not-sr-only sm:sr-only td-class"><img src={event.paymentfile} alt="" /></td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>
        {source && 
        <Modal source={source} onclose={handleclose}/>
        }
    </>
  );
}