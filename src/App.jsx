import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListArticles from './components/ListArticles'
import AddArticle from './components/AddArticle'
import EditArticle from './components/EditArticle'
import Menu from './Menu';
function App() {
return ( 
<Router>
    <Menu/>
    <Routes>
        <Route path="/" element={<ListArticles/>} />
        <Route path="/liste" element={<ListArticles/>} /> 
        <Route path="/add" element={<AddArticle/>} />
        <Route path="/edit/:id" element={<EditArticle/>} />
    </Routes>
</Router>
);
}
export default App;
