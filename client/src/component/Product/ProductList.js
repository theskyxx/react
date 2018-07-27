import React,{Component} from "react";
import ProductItem from "./ProductItem"

class ProductList extends Component{

    showProduct(){
        if (this.props.products){
            return this.props.products.map(product =>(   
                <ProductItem productName={product.productName}  unitPrice={product.unitPrice} />
            ))
        }
    }

    render(){
        return (
            <div className="row">
                {this.showProduct()}
            </div>
        )
    }

}

export default ProductList