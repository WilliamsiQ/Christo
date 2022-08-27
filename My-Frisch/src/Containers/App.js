import React, {Component} from 'react';
import Scroll from '../Components/Scroll';
import  { connect }  from 'react-redux';
import Errorboundary from '../Components/Errorboundary';
import Cardlist from '../Components/Cardlist';
import Searchbox from '../Components/Searchbox';
import './App.css';
import { setSearchField, setFrisch} from '../actions';


const mapStateToProps = state=>{
    return {
        searchField: state.searchFrischs.searchField,
        frischs: state.requestFrischs.frischs,
        isPending: state.requestFrischs.isPending,
        error: state.requestFrischs.error
    }
}

const mapDispatchToProps = dispatch=> {
    return {
        onSearchChange: (event)=>dispatch(setSearchField(event.target.value)),
        onRequestFrischs: ()=> dispatch(setFrisch())
    }
}

class App extends Component  {
    
    componentDidMount() {
        this.props.onRequestFrischs()
                
    }
    
    render () {

        const {onSearchChange, frischs, searchField, isPending} = this.props
        const filteredFrischs = frischs.filter(frisch=>{
            return frisch.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return isPending?
                <h1 className='tc'> LOADING </h1>:
                (
                    <div className='tc'>
                        <h1 className='f1' style={{color: 'purple'}} > FRISCH </h1>
                        < Searchbox searchChange= {onSearchChange} />
                        <Scroll>
                            <Errorboundary>
                                <Cardlist frischs={filteredFrischs} />
                            </Errorboundary>   
                        </Scroll>         
                    </div>
                    
                )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);