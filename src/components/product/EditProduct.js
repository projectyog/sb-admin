import React, {useState, useEffect} from 'react';

const EditProduct = (props) => {

    useEffect(() => {
        setProduct(props.currentProduct)
    }, [props])

    const [product, setProduct] = useState(props.currentProduct);

    const handleChange = e => {
        const {name, value} = e.target;
        setProduct({...product, [name]: value});
        }

    const handleSubmit = e => {
        e.preventDefault();
        if (product.pic && product.Pname && product.price) props.updateProduct(product);
    }

    return (
        <form className="formDesign">
            <label>Image</label>
            <input className="u-full-width" type="text" value={product.pic} name="pic" onChange={handleChange} />
            <label>Name</label>
            <input className="u-full-width" type="text" value={product.Pname} name="Pname" onChange={handleChange} />
            <label>Price</label>
            <input className="u-full-width" type="text" value={product.price} name="price" onChange={handleChange} />
            <button className="button-primary" type="submit" onClick={handleSubmit} >Edit Product</button>
            <button type="submit" onClick={() => props.setEditing(false)} >Cancel</button>
        </form>
    )
}

export default EditProduct;