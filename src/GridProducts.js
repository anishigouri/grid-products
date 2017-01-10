import React, { Component } from 'react';
import ItemProduct from './ItemProduct';
import { connect } from 'react-redux';
import { fetchProducts } from './actions/productActions.js';
import _ from 'lodash';

class GridProduct extends Component {

    constructor() {
        super();
        this.state = {
            products: []
        };
    }

    componentDidMount() {
        this.props.fetchProducts();
    }

    componentWillReceiveProps(props) {
        if(props.products) {
            this.removeInvisibles(props.products);
            this.setState({products: props.products});
        }
    }

    removeInvisibles(list) {
        _.remove(list, {
            visible: false
        });
    }

    render() {

        return (
            <div>
                <div className="page-header">
                    <h1>Grid Products</h1>
                </div>

                <div className="content" id="content">
                    <div className="row">
                        <div className="col-md-12 col-xs-12">
                            {
                                this.state.products.map((item, idx) => {
                                    let key = `product${idx}`;
                                    return <ItemProduct key={key} product={item} />
                                })
                            }
                        </div>

                    </div>
                </div>

            </div>

        )
    }
}

GridProduct.propTypes = {
    fetchProducts: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, {fetchProducts})(GridProduct);
