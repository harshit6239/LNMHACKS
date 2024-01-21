import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FirstPage from './components/firstPage/FirstPage';
import Freelancer from './components/freelancerPage/Freelancer';
import ConnectPage from './components/Connection/ConnectPage';
import Client from './components/clientPage/clientPage'; // Change the file name to 'clientPage'

import Jobdes from './components/JobDes/jobdes';


function App() {
  // Assuming jobList is an array of job objects

  let jobList = [{id:1,title:"title", description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi at quod sapiente commodi. Placeat non ab itaque vitae possimus tempora labore repellat harum quia delectus ratione reprehenderit illo, iure consectetur reiciendis dolores nemo quo ullam soluta quas quae dolorem praesentium facere earum. Impedit quae, quasi voluptas laborum nobis dicta? Libero nulla non officiis, sequi quisquam ullam consectetur amet nihil minima, itaque totam recusandae repellendus necessitatibus. Sint non ratione nihil amet autem? Obcaecati alias commodi, praesentium omnis velit fugiat laudantium iusto voluptatem suscipit. Dolor, enim? Quaerat iusto exercitationem voluptatibus quos magnam.", price:"1500", skill:"React, Node, Express, MongoDB", clientName:"John Doe", clientEmail:"tempmail.com"},
  {id:2,title:"title", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nobis maiores ipsam voluptates repellat repudiandae atque iusto voluptate quaerat consequuntur esse delectus soluta saepe, asperiores quisquam, aperiam nesciunt neque alias cupiditate suscipit beatae. Nisi sint ab nostrum repellendus rerum provident laborum quas harum vel sequi, placeat distinctio similique totam nemo?", price:"120", skill:"React, Node, Express, MongoDB", clientName:"John Doe", clientEmail:"tempmail.com"},
  ];

  const [isfreelancer, setFreelancer] = useState(false);

  useEffect(() => {
    console.log(isfreelancer);
  }, [isfreelancer]);

  return (
    <>
      <Router>
        <Routes>

          <Route  path="/" element={<FirstPage setFreelancer={setFreelancer} />} />
          <Route  path="/freelancerConnect" element={<ConnectPage jobList={jobList}></ConnectPage>} />
          <Route  path="/freelancer/job/:id" element={<Jobdes jobList={jobList}></Jobdes>} />
          <Route  path="/client" element={<Client />} />

        </Routes>
      </Router> 

    

    </>
  );
}

export default App;
