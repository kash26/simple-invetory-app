import { useState } from "react";

function AddItem(props) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [type, setType] = useState("");
    const [brand, setBrand] = useState("");

    const addItemSearchButtonPressed = () => {
        props.addItem({
            name: name, 
            price: price, 
            type: type, 
            brand: brand
        });
        setName("");
        setPrice(0);
        setType("");
        setBrand("");
    }

    return (
        <div>
            <div className="row">
                <h2>Add an Item</h2>
            </div>
            <form>
                <div className="row">
                    <label htmlFor="name-field">Name: </label>
                    <input 
                        id="name-field" 
                        type="text" 
                        className="form-control"
                        value={name}
                        onChange={ (e) => setName(e.target.value) } />
                    <label htmlFor="price-field">Price: </label>
                    <input 
                        id="price-field" 
                        type="number" 
                        className="form-control"
                        value={price}
                        onChange={ (e) => setPrice(e.target.value) } />
                    <label htmlFor="type-field">Type: </label>
                    <input 
                        id="type-field" 
                        type="text" 
                        className="form-control"
                        value={type}
                        onChange={ (e) => setType(e.target.value) } />
                    <label htmlFor="brand-field">Brand: </label>
                    <input 
                        id="brand-field" 
                        type="text" 
                        className="form-control"
                        value={brand}
                        onChange={ (e) => setBrand(e.target.value) } />
                </div>
                <div className="row mt-3">
                    <button 
                        type="button" 
                        className="btn btn-primary"
                        onClick={addItemSearchButtonPressed}>Add Item</button>
                </div>
            </form>
            <div className="m-5"></div>
        </div>
    );
}

export default AddItem;