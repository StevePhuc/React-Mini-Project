import React from 'react';

class ImageCard extends React.Component{

    render(){

        const {descripttion, urls}= this.props.image;
        return(
            <div>
                <img
                    alt={descripttion}
                    src={urls.regular}
                />
            </div>
        )
    }
}

export default ImageCard