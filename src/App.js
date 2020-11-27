import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Input, InputLabel } from '@material-ui/core';

import { convert, add } from './reducers/mainReducer';

import './App.css';

const App = ({ store }) => {

    const [result, setResult] = useState(undefined);
    const dispatch = useDispatch();

    const convertValue = (e) => {
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.onload = (function (JSONFile) {
            return function (e) {
                try {
                    let json = JSON.parse(e.target.result);
                    dispatch(convert(json.distance.unit, json.distance.value, json.convert_to));
                    setResult(JSON.stringify(store.getState().branch1.result));
                } catch (error) {
                    alert('Error');
                }
            }
        })(file);
        reader.readAsText(file);
        e.target.value = '';
    }

    const addUnit = (e) => {
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.onload = (function (JSONFile) {
            return function (e) {
                try {
                    let json = JSON.parse(e.target.result);
                    //json = JSON.stringify(json);
                    dispatch(add(json.unit1, json.unit2, json.ratio));
                    console.log(store.getState().branch1.dependencies);
                } catch (error) {
                    alert('Error');
                }
            }
        })(file);
        reader.readAsText(file);
        e.target.value = '';
    }



    return (
        <div className='App'>
            <div className='wrapper'>
                <InputLabel>Convert</InputLabel>
                <Input type='file' onChange={(e) => convertValue(e)} />
            </div>
            <div className='wrapper'>
                <InputLabel>Add unit of measure</InputLabel>
                <Input type='file' onChange={(e) => addUnit(e)} />
            </div>
            <div className='wrapper'>
                {result !== 'null' && result}
            </div>
        </div>
    );
}

export default App;
