import React from 'react'
import {Form,  Input} from 'reactstrap'
function Searchbar() {
    return (
        <Form  className="search-bar">
        <Input className = "search-input" type="text"  placeholder="Search" name="search" />
    </Form>
    )
}

export default Searchbar
