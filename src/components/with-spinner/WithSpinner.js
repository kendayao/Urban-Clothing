import React from 'react';
import {SpinnerOverlay, SpinnerContainer} from './WithSpinner.styles'

const WithSpinner=WrappedCommponent=>({isLoading, ...otherProps})=>{
    return isLoading?(
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ): (
        <WrappedCommponent {...otherProps}/>
    )

}

export default WithSpinner