import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import './CollectionsOverview.scss'
import CollectionPreview from '../collection-preview/CollectionPreview'
import {selectShopCollectionsForPreview} from '../../redux/shop/shop.selectors'

const CollectionsOverview=({collections})=>(
    <div className='collections-overview'>
         {
            collections.map(({id, ...otherCollectionProps})=>{
                return <CollectionPreview key={id} {...otherCollectionProps}/>
            })
         }
    </div>
)

const mapStateToProps=createStructuredSelector({
    collections:selectShopCollectionsForPreview
})

export default connect(mapStateToProps) (CollectionsOverview)