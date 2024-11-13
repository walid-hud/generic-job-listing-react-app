import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider , useNavigate
} from "react-router-dom"
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import NotFound from "./pages/NotFound";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";
const addJob = async (newJob) => {
  const res = await fetch('/api/jobs ' , {
    method: 'POST',
    headers:{
      'Content-Type' : 'application/json'
    },
    body:JSON.stringify(newJob),
  });
  return;
}

const deleteJob =  async (id)=>{const res = await fetch(`/api/jobs/${id}` , {method: 'DELETE'}) 
  return ;
}

const editJob =async (id , newJob)=>{
  const res = await fetch(`/api/jobs/${id}` , {
    method:"PUT",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify(newJob)
    
  })
  return res
}
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/add" element={<AddJobPage addJobSubmit={addJob} />} />
      <Route loader={jobLoader}  path="/jobs/:id" element={<JobPage deleteJob={deleteJob} />} />
      <Route loader={jobLoader}  path="/edit/:id" element={<EditJobPage editJob={editJob} />} />
      <Route path="*" element={<NotFound></NotFound>} />

    </Route>
  ));



export default function App() {
  return <RouterProvider router={router}></RouterProvider>
}
