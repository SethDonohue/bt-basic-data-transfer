import React, { Component } from "react";
import { BleManager } from "react-native-ble-plx";
import { View, Text } from "react-native";

export default class SensorView extends Component {
    constructor() {
        super();
        this.manager = new BleManager();
    }

    render() {
        return (
            <View>
                <Text> Test Test for SensorView</Text>
            </View>
        )
    }
}
