import React, {useState} from 'react';

const AddProduct = (props) => {

    const initProduct = {id: null, pic: '', Pname: '',price:' '};

    const [product, setProduct] = useState(initProduct);

    const handleChange = e => {
        const {name, value} = e.target;
        setProduct({...product, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (product.pic && product.Pname && product.price) {
            handleChange(e, props.addProduct(product));
        }
    }

    return (
        <form className='formDesign'>
            <label>Image</label>
            <input className="u-full-width" type="text" value={product.pic} name="pic" onChange={handleChange} />
            <label>Name</label>
            <input className="u-full-width" type="text" value={product.Pname} name="Pname" onChange={handleChange} />
            <label>Price</label>
            <input className="u-full-width" type="text" value={product.price} name="price" onChange={handleChange} />
            <button className="button-primary" type="submit" onClick={handleSubmit} >Add Product</button>
        </form>
    )
}

export default AddProduct;