import React from 'react';
import {Font} from 'expo';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import questionApp from './reducers'
import Expo from 'expo';
import {StatusBar, View} from "react-native";

import QuestionOrSummary from "./src/QuestionOrSummary/QuestionOrSummary";


export default class App extends React.Component {


    constructor() {
        super();
        this.state = {
            fontLoaded: false,
            store: createStore(questionApp)
        };
    }


    async componentDidMount() {
        await Font.loadAsync({
            'nixie-one-regular': require('./assets/fonts/NixieOne-Regular.ttf'),
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });

        this.setState({fontLoaded: true})
    }

    render() {


        if (!this.state.fontLoaded) {
            return <Expo.AppLoading/>
        }

        return (
            <Provider store={this.state.store}>
                <View style={{flex: 1}}>
                    <StatusBar hidden/>
                    <QuestionOrSummary/>
                </View>
            </Provider>
        );
    }
}


