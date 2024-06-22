import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import './detail.css';

import { ProductPage } from '../components/ProductPage';


document.querySelector('#root').innerHTML = render(
    <div className="container">
      <main>
        <ProductPage />
      </main>
      
    </div>
  )
  