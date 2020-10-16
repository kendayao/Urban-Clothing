import React from 'react'
import CollectionItem from '../../components/collection-item/CollectionItem'
import './Collections.scss'
import {connect} from 'react-redux'
import {selectShopCollection} from '../../redux/shop/shop.selectors'

const CollectionsPage=({collection})=>{
    
    const {title, items}=collection

return(
    <div className='collection-page'>
        <h2 className='title'>{title}</h2>
        <div className='items'>
            {items.map(item=>(
                <CollectionItem key={item.id} item={item}/>))
            }       
         </div>
    </div>
)
}
const mapStateToProps=(state, ownProps)=>({
    collection: selectShopCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps) (CollectionsPage)