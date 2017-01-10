import React, { Component } from 'react';
import numeral from 'numeraljs';

class ItemProduct extends Component {

    render() {

        return (
            <div className="col-md-3 col-xs-12 panel-item-product">
                <div className="thumbnail">

                    <img
                        className="img-thumbnail"
                        alt="product"
                        src={this.props.product.mainImgUrl}
                        title={this.props.product.description}
                    />

                    <div className="caption ">
                        <h3>{this.props.product.name}</h3>
                    </div>
                    <div className="caption">
                        <h4>{numeral(this.props.product.price).format('$0,0.00')}</h4>
                    </div>
                    <div>
                        {this.props.product.brand.name}
                    </div>
                </div>
            </div>

        )
    }
}

export default ItemProduct;
