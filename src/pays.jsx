function Pays() {
    const pays=[
        {nom:"Tunisie",ville:"Sfax",photos:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/26/a5/5d/la-mairie.jpg?w=1400&h=1400&s=1"},
        {nom:"Allemagne",ville:"Bern",photos:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyWm8i29Qa-l0izU5GYZbkewbl6bddSslvyA&s"},
        {nom:"France",ville:"Marseille",photos:"i3.jfif"},
        {nom:"Maroc",ville:"Aghadir",photos:"i4.jfif"}
      ]
    return ( 
        <table className="table table-dark table-striped-columns">
    <thead>
      <tr>
      <th>Nom</th>
      <th>Ville</th>
      <th>Image</th>
      </tr>
    </thead>
    <tbody>
 {
  pays.map((value,index)=>{
    return <tr key={index}>
     <td> {value.nom} </td>
     <td>  {value.ville} </td>
     <td>  <img src={value.photos} alt="" width="80" height="80"/></td>
    </tr>
  })
 }
 </tbody>
 </table>
     );
}

export default Pays;