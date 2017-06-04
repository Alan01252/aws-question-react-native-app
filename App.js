import React from 'react';
import {Font} from 'expo';
import Question from "./src/Question/Question";
import {View} from "native-base";
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import questionApp from './reducers'


export default class App extends React.Component {

    state = {
        fontLoaded: false,
    };

    constructor() {
        super();
        this.state = {
            isLoading: false,
            store: createStore(questionApp),
        };
    }


    async componentDidMount() {
        await Font.loadAsync({
            'nixie-one-regular': require('./assets/fonts/NixieOne-Regular.ttf'),
        });

        this.setState({fontLoaded: true})
    }

    render() {

        return (
            <Provider store={this.state.store}>
                <View style={{flex: 1}}>
                    <Question/>
                </View>
            </Provider>
        );
    }
}


