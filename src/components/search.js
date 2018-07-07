import React from 'react';

const Search = props =>
    <
    div >
    <
    form className = "search" >
    <
    div className = "form-group" >
    <
    label htmlFor = "search"
className = "form-text-color" > Search
for Articles: < /label> <
input
value = { props.search }
onChange = { props.handleInputChange }
name = "search"
type = "text"
className = "form-control"
placeholder = "Type in an article title or a key word"
id = "search" /
    >
    <
    /div> <
div className = "form-group" >
    <
    label htmlFor = "start-date"
className = "form-text-color" > Start Date: < /label> <
input
value = { props.startDate }
onChange = { props.handleInputChange }
name = "startDate"
type = "number"
min = "0"
max = "3000"
className = "form-control"
placeholder = "Type in a start year - only numbers are allowed"
id = "start-date" /
    >
    <
    /div> <
div className = "form-group" >
    <
    label htmlFor = "end-date"
className = "form-text-color" > End Date: < /label> <
input
value = { props.endDate }
onChange = { props.handleInputChange }
name = "endDate"
type = "number"
min = "0"
max = "3000"
className = "form-control"
placeholder = "Type in an end year - only numbers are allowed"
id = "end-date" /
    >
    <
    /div>

<
button
type = "submit"
onClick = { props.handleFormSubmit }
className = "btn btn-warning" >
    Search <
    /button> < /
form > <
    /div>;

export default Search;