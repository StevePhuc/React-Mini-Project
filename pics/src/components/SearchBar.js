import React from 'react';

class SeachBar extends React.Component {

    state = { term: '' }

    onFormSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state.term);
        
    }

    render() {
        return (
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='fiend'>
                        <label>Image Search</label>
                        <input
                            type='text'
                            value={this.state.term}
                            onChange={e => this.setState({ term: e.target.value })} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SeachBar;