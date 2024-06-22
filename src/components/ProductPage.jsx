import { render } from '@czechitas/render';
import { Product } from './Product';

export const ProductPage = () => {

document.querySelector('#root').innerHTML = render(
    <div className="container">
        
        <Product />
     
  
    </div>
  
)}