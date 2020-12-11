import React from 'react';
import './Directory.scss'
import MenuItem from '../menu-item/MenuItem'
import {connect} from 'react-redux'
import {selectDirectorySection} from '../../redux/directory/directory.selectors'
import {createStructuredSelector} from 'reselect'

const Directory=({sections})=> (
  
            <div className='directory-menu'>
                {sections.map(({id, ...otherSectionProps})=>{
                    return <MenuItem key={id} {...otherSectionProps} />
                })}
            </div>
        )
    

const mapStateToProps=createStructuredSelector({
  sections: selectDirectorySection
})

export default connect(mapStateToProps) (Directory)