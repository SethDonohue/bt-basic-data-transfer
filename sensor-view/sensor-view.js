import React, { Component } from "react";
import { BleManager } from "react-native-ble-plx";
import { View, Text } from "react-native";

export default class SensorView extends Component {
    constructor() {
        super();
        this.manager = new BleManager()
        this.state ={
            info: "",
            values: {}
        }
        this.UUID = "FA7921A04707";
        this.sensors = {
            0: "Temperature",
        }
    }

    componentDidMount() {
        this.scanAndConnect()
    }

    setInfo(message) {
        this.setState({message})
    }

    setError(message) {
        this.setState({ info: "ERROR: " + message})
    }

    updateValue(key, value) {
        this.setState({values: {...this.state.values, [key]: value}})
    }

    scanAndConnect() {
        this.manager.startDeviceScan(null, null, (error, device) => {
            this.setInfo("Scanning...")
            console.log(device)
            
            if(error) {
                this.setError(error)
                return
            }

            if (device.name === 'Arduino Test' || device.name === 'Sensor') {
                this.setInfo("Connections to Sensor")
                this.manager.stopDeviceScan()
                device.connect()
                    .then((device) => {
                        this.setInfo("Discovering services and Characteristics")
                        return device.discoverAllServicesAndCharacteristics()
                    })
                    .then((device) => {
                        this.setInfo("Settings notifications")
                        return this.setupNotifications(device)
                    })
                    .then(() => {
                        this.setInfo("listening...")
                    }, (error) => {
                        this.setError(error.message)
                    })

            }
        })
    }

    render() {
        return (
            <View>
                <Text>Sensor View Placeholder</Text>
            </View>
        )
    }
}
