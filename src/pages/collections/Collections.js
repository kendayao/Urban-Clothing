import React from 'react'
import CollectionItem from '../../components/collection-item/CollectionItem'
import './Collections.scss'
import {connect} from 'react-redux'
import {selectShopCollection} from '../../redux/shop/shop.selectors'

const CollectionsPage=({collection})=>(
    

    
    <div className='collection-page'>
       
        <h2>Collections Page</h2>
    </div>

)
const mapStateToProps=(state, ownProps)=>({
    collection: selectShopCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps) (CollectionsPage)