import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export const LogForm = ({navigation}) => {
    return (
      <View>
        <Button title="back" onPress={() => {
            navigation.pop();
        }}/>
        <Text>
            Log Form
        </Text>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
