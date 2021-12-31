import React from 'react';

const ProductListCard = (props) => {
    return (
       <>
       <div className='cardDesign'>
       
        { props.products.length > 0  ? (props.products.map(product => {
            const{id,pic,Pname,price} = product;
            return (
                <div className="card" style={{width: "18rem"}}>
                <div className="card-body" key={id}>
                     <img className="card-img-top" src={product.pic} alt="Card pic cap"></img>
                     
                    <h5>Product Name:{product.Pname}</h5>
                    <h5>Product Price{product.price}</h5>
                    <div>
                        <button className='buttonDesign' onClick={() => props.deleteProduct(id)}>Delete</button>
                        <button className='buttonDesign' onClick={() => props.editProduct(id, product)}>Edit</button>
                   </div>
                </div>
            
    </div>
            )
          })
        
        ) : (
            <h4>No Product Found</h4>
        )  
        }

        </div>
        </>
    )      
}

export default ProductListCard;