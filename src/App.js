
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./About";
import { Blog, CreateBlog, EditBlog, ListBlog } from "./Blogs";


function App() {
  return (
    <main className="App">  
    <Router>   
        <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/blogs' element={<Blog/>}/>
            <Route path='/blogs/create' element={<CreateBlog/>}/>
            <Route path='/blogs/list' element={<ListBlog/>}/>
        </Routes>
    </Router>
    </main>
  );
}

export default App;
