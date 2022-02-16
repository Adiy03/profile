import './productList.css'
import Product from '../product/Product'
import {products} from '../../data'

const ProductList = () => {
  return (
    <div className='pl'>
      <div className="pl-texts">
        <h1 className="pl-title">Project</h1>
        <p className="pl-desc">
          This is some project have completed from several projects, those that came from Glints Academy, my own projects and from real company projects that I can't explain here because they belong to company property
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  )
}

export default ProductList