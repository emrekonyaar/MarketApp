import React, { Component } from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as cartActions from "../../Redux/actions/cartActions"
import {Table,Button} from "reactstrap"
import alertify from "alertifyjs"
 class CartDetail extends Component {
   removeFromCart(product){
    this.props.actions.removeFromCart(product)
    alertify.error(product.productName+" Sepetten Silindi")
   }
    render() {
        return (
            <div>
                <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>ProductName</th>
              <th>Unit Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((cartItem) => (
              <tr key={cartItem.product.id}>
                <th scope="row">{cartItem.product.id}</th>
                <td>{cartItem.product.productName}</td>
                <td>{cartItem.product.unitPrice}</td>
                <td>{cartItem.quantity}</td>
                <td>
                   <Button onClick={() => this.removeFromCart(cartItem.product)} color="danger">Sil</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
      cart: state.cartReducer,
    };
  }
  function mapDispatchToProps(dispatch) {
    return {
      actions: {
        removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
      },
    };
  }
  export default connect(mapStateToProps, mapDispatchToProps)(CartDetail)