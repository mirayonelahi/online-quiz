import React, { Component } from 'react';
import { getList, addItem, deleteItem, updateItem } from './models/ApiDataFunctions';

class List extends React.Component {
    constructor() {
        super()
        this.state = {
            id: '',
            title: '',
            editDisabled: false,
            items: []
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    render() {
        return (
            <div>
                <div className="col-md-12">
                    
                  
                </div>
            </div>
        )


    }
}
export default List;