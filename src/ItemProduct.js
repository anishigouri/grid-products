import React, { Component } from 'react';
import numeral from 'numeraljs';

class ItemProduct extends Component {

    render() {

        return (
            <div className="col-md-4 col-xs-12 col-sm-6 col-lg-3 panel-item-product">
                <div className="thumbnail">

                    <img
                        className="img-thumbnail"
                        alt="product"
                        src={this.props.product.mainImgUrl}
                        title={this.props.product.description}
                    />

                    <div className="caption description">
                        <h4>{this.props.product.name}</h4>
                    </div>
                    <div className="caption brand">
                        <h5>{this.props.product.brand.name}</h5>
                    </div>
                    <div className="caption price">
                        <h4>{numeral(this.props.product.price).format('$0,0.00')}</h4>
                    </div>
                </div>
            </div>

        )
    }
}

export default ItemProduct;
