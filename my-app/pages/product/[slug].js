import React from "react";
import { urlFor ,client} from "../../lib/client";

const ProductDetail = () => {
  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={urlFor(image && image[0])} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

// export const getStaticPaths = async ()=>{
//     const query = `*[_type == 'product']{
//        slug{
//         current
//        }
//     }
// }`;

// const products = await client.fetch(query);
// const paths = products.map((product)=>({
//     params:{
//         slug : product.slug.current
//     }
// }))
// return{
//     paths,
//     fallback:'blocking'
// }
export default ProductDetail;
