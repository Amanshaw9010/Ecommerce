import Checkout from '../Component/Checkout';
import { connect } from 'react-redux';
import { addToCart } from '../Service/actions/action';
import { removeToCart } from '../Service/actions/action';

const mapStateToProps = state => ({
    data: state.cardItems
})

export default connect(mapStateToProps)(Checkout);