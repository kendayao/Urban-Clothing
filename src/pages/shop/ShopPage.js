import React, {Component} from 'react';
import SHOP_DATA from './ShopData';
import CollectionPreview from '../../components/collection-preview/CollectionPreview'

class ShopPage extends Component {

    constructor(){
        super();

        this.state={
            collections: SHOP_DATA
        }
        
    }




    render(){
        const{collections}=this.state
        return <div className='shop-page'>
            {
                collections.map(({id, ...otherCollectionProps})=>{
                    return <CollectionPreview key={id}{...otherCollectionProps}/>
                })
            }
        </div>
    }
}

export default ShopPage