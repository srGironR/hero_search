import React from 'react';
import '../Search/search.css';
import axios from 'axios';
import Hero from "../HeroCard/hero";




const api_key = "a8921501ae755d651f1b6edb43b58ccc";
const ts = "1589412760782";
const hash  = "e37bb9c7ce9c98d80c776c1c4aafbb0b";
const endpoint = "https://gateway.marvel.com:443/v1/public/characters";


class Search extends  React.Component {
    

	constructor( props ) {
		super( props );

		this.state = {
			query: '',
                        results: {},
                        
                        message: '',
		};
        this.cancel='';
    }

    fetchSearchResults = (query ) => {
        const api_query = `${endpoint}?nameStartsWith=${query}&apikey=${api_key}&ts=${ts}&hash=${hash}`;

        if(this.cancel){
            this.cancel.cancel();
        }
        this.cancel =axios.CancelToken.source();
        axios.get(api_query, {
			cancelToken: this.cancel.token,
        })
            .then(res =>{
               /* console.warn(res.data.data.results);*/
               const resultnofoundmsg = !res.data.data.results.length ? 'There are no more search results' :'';
                this.setState({
                    results: res.data.data.results,
                    message:resultnofoundmsg,
                    
                })
            })      
            .catch((error) => {
                if (axios.isCancel(error) || error) {
                    this.setState({
                        
                        message: 'Failed',
                    });
                }
            });
            
    }

    renderSearchResults = () => {
             
        const{results} = this.state;
  
        if(Object.keys(results).length && results.length){
            return(
                <div className="o-ResultsCards">
                    {results.map(result =>{
                        return(
                            <div key={result.id} className="o-result-items">
                            <Hero 
                            title={result.name}  
                            isrc={result.thumbnail.path+"."+result.thumbnail.extension}
                        
                            description={result.comics.items.map(comic =>{
                                return(  
                                   
                                    <p><a href={comic.resourceURI}>{comic.name}</a></p>       
                                )
                            })}
                            ></Hero>
                            
                            
                                
                            </div>
                            );                                    
                })}
                </div>

    )
}

};
  
	render() {
        const {query} = this.state;
		return (
            
			<div className="o-container">
				{/*Heading*/}
				<h2 className="o-heading">Marvel's character search</h2>

				{/*Search Input*/}
				<label className="o-search-label" htmlFor="search-input">
					<input
                        type="text"
                        value={query}
						id="search-input"
                        placeholder="Search..."
                        onChange={event => {this.setState({query: event.target.value})}}
                        onKeyPress={event => {
                          
                                this.setState({ query:query, message:'' },() =>{this.fetchSearchResults(query);} );
                            
                          }
                        }
                        
					/>
					<i className="fa fa-search o-search-icon"/>

				</label>
                
               {this.renderSearchResults()}
				
			</div>
			)
    }
    
}

export default Search;