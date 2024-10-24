import {Link} from 'react-router-dom';
import axios from 'axios';

function ElementsArticle(props) {

  const deleteProd = async (id) => {
    if (!window.confirm("Are you sure you want to delete")) {
      return;
    }
    axios.delete('http://localhost:3001/produits/' + id)
      .then(() => {
        console.log('successfully deleted!')
        props.setArticles(prevArticles => prevArticles.filter((article) => article.id !== id));
      }).catch((error) => {
        console.log(error)
      })
  }

    return ( 
    <div className="row">
    {
      props.articles && props.articles.length>0 &&  props.articles.map((art)=>{
       return (
       <div key={art.id} className="col-sm-4">
 <div className="card" style={{"width": "18rem"}}>
  <img src={art.imageartpetitf} className="card-img-top" alt={art.designation}/>
  <div className="card-body">
    <h5 className="card-title">{art.designation}</h5>
    <p className="card-text">{art.prixVente} TND</p>
  </div>
  <div className="card-body">
    <Link to={`/edit/${art.id}`} className="card-link">Modifier</Link>
    <button className="btn btn-danger" onClick={()=>{deleteProd(art.id)}}>Supprimer</button>
  </div>
</div>
        </div>
       )
      })
    }
   
    </div> );
}

export default ElementsArticle;