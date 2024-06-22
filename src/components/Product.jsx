import { render } from '@czechitas/render';


export const Product = async () => {

    const params = new URLSearchParams(window.location.search)
    const id = params.get('id')

    const response = await fetch (`http://localhost:4000/api/nakupy/${id}`)
    const json = await response.json()
    const bylinky = json.data
    console.log(bylinky)

document.querySelector('#root').innerHTML = render(
    <div className="container">
      <h2>{bylinky.name}</h2>
      <main className="product-detail">
      <img src={`http://localhost:4000${bylinky.img}`} alt={bylinky.name} className="detail-image" />
        <div className="details">
        <p><strong>Cena:</strong> {bylinky.price}</p>
        <p><strong>Použití:</strong> {bylinky.use}</p>
        </div>
      </main>
      <span className="backHome"><a href="index.html">zpět na hlavní stránku</a></span>
</div>
  );
}

