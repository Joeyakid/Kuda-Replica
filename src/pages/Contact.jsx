import React from 'react'
import { useState } from 'react'

const Contact = () => {
    const [myName, setMyName] = useState("");
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("");
    const [phoneNumber, setPhoneNumber] = useState(0);
    const [storage, setStorage] = useState([]);

    console.log(storage);

const submitData = (e) => {
  e.preventDefault();
  setStorage([...storage, {myName, email, bio, phoneNumber}]);


  setMyName("");
  setEmail("");
  setBio("");
  setPhoneNumber("");
};

  return (
    <div className='relative h-screen w-screen bg-pink-500 flex justify-between '>
      <div className='bg-amber-400 h-screen w-40 rounded-tr-[100px] rounded-br[100px]'>

      </div>
      <div className='p-8 bg-purple-900 rounded-4xl' >
         <h1 className='text-5xl text-white'>Welcome to the contact page</h1>
         <p className='text-center text-white'>Please kindly <b>fill</b> the form below for consultation</p>
      <section>
        <main>
          <form onSubmit={submitData} className=" flex flex-col max-w-[500px] gap-4">
            <input type="text" placeholder='Enter your full name' value={myName} onChange={(e) =>{
              setMyName(e.target.value)
            }} />
            <input type="email" placeholder='Enter your email' value={email} onChange={(e) =>{
              setEmail(e.target.value)
            }} />
             <textarea placeholder='Enter your bio' value={bio} onChange={(e) =>{
              setBio(e.target.value)
            }}/>
            <input type="tel" placeholder='Enter your phone number' value={phoneNumber} onChange={(e) =>{
              setPhoneNumber(e.target.value)
            }}/>
             <button className='bg-black flex justify-center max-w-30 rounded-xl text-2xl text-white' type='submit'>Submit</button>
          </form>
        </main>
        <main className='flex flex-wrap'>
          {storage.map((data, index) => (
          <div className='bg-purple-400  max-w-50 p-9 m-4' key={index}>
            <h2>
              <b> Name : {data.myName} </b>
            </h2>
            <h2>
              <i><b>Email : {data.email}</b></i>
            </h2>
            <h2>
              <b> Bio : {data.bio} </b>
            </h2>
            <h2>
              <b> Phone Number : {data.phoneNumber} </b>
            </h2>
          </div>
          ))}
        </main>
      </section>
      </div>
      <div className='bg-amber-800 h-screen w-40 rounded-tl-[100px] rounded-bl-[100px]'>

      </div>
    </div>
  )
}

export default Contact