import { render } from '@czechitas/render';

export const HomePage = async () => {
    const response = await fetch ("http://localhost:4000/api/nakupy")
    const json = await response.json()
    const nakupy = json.data
    
    
    document.querySelector('#root').innerHTML = render(
    <div className="container">
    <h1>Vykutálené Bylinky</h1>
    <main className="product-grid">
        {
            nakupy.map((item) => (
                <div className="product-card" key={item.id}>
                    <a href={`detail.html?id=${item.id}`}>
                        <img src={`http://localhost:4000${item.img}`} alt={item.name} />
                        <h2>{item.name}</h2>
                    </a>
                    <button id={`btndetail-${item.id}`} type="button">Detail</button>
                </div>
            ))
        }
    </main>
    </div>
    )

    nakupy.forEach((item) => {
      document.querySelector(`#btndetail-${item.id}`).addEventListener('click', () => {
          window.location.href = `detail.html?id=${item.id}`;
      });
  });
}

