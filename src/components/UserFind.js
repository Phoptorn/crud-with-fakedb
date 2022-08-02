import React, {useState, useEffect} from "react";
import "./User.css";

const UserFind = ({loading, success, status}) => {
    const [data, setData] = useState([]);
    // const [showData, setShowData] = useState(false);
    const [search, setSearch] = useState("");
    const [searchData, setSearchData] = useState([]);
    const [searchResult, setSearchResult] = useState([]);
    const [searchResultShow, setSearchResultShow] = useState(false);
    const [submitted, setSubmitted] = useState('');
    const [getResult, setGetResult] = useState(null);
    const [error, setError] = useState('');

    

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("http://localhost/FakeDB");
            const json = await res.json();
            setData(json);
        }

        fetchData();
    }
    , []);

    const searchChange = (e) => {
        setSearch(e.target.value);
    }

    const searchSubmit = (e) => {
        e.preventDefault();
        const newData = data;
        const newSearchData = newData.filter(item => {
            return item.firstname.toLowerCase().includes(search.toLowerCase()) || item.lastname.toLowerCase().includes(search.toLowerCase());
        }
        );
        setSearchData(newSearchData);
        setSearchResult(newSearchData);
        setSearchResultShow(true);
    }

    // to call onChange event after pressing Enter key  tag <form>
    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(search);
        setSearch('');
      }
    // const searchResultClick = (e) => {
    //     setSearchResultShow(!searchResultShow);
    // }


    return (
        <div className="UserFind">
            <h2>Find User</h2>
            <div className="UserFind-search">
            
                <form onSubmit={handleSubmit}> 
                <input type="text" value={search} onChange={searchChange} />
                <button onClick={searchSubmit}>
                    Search
                </button>
                </form>
            </div>
            <div className="UserFind-searchResult">
                <ul>
                {searchResult.map(item => {
                    return searchResultShow ? (
                        <div key={item.id}>
                            Firstname: {item.firstname} <br />
                            Lastname:  {item.lastname}
                        </div>
                    ) : (
                        ""
                    );
                }

                )}
                </ul>
            </div>
        </div>
    );
}

    export default UserFind;