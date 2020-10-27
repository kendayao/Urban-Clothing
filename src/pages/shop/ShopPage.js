import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import CollectionsOverviewContainer from '../../components/collections-overview/CollectionsOverview.container'
import CollectionsPageContainer from '../collections/Collections.container'
import {connect} from 'react-redux'
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import CollectionPageContainer from '../collections/Collections.container';






class ShopPage extends Component{


componentDidMount(){
    const{fetchCollectionsStartAsync}=this.props
    fetchCollectionsStartAsync();
}

render(){
    const{match}=this.props
    return (<div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}/>
        <Route path={`${match.path}/:collectionId`} component={CollectionsPageContainer} />
    </div>)

}
       
}

const mapDispatchToProps=dispatch=>({
    fetchCollectionsStartAsync: ()=>dispatch(fetchCollectionsStartAsync())
})


export default connect(null, mapDispatchToProps)(ShopPage)