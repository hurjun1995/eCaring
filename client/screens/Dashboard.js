import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const Dashboard = ({navigation}) => {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#C7D6FF', '#EAD9FF', '#FFFFFF']}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    height: '100%',
                    width: '100%',
                    alignSelf:'center',
                    flex: 1,
                    flexShrink: 0,
                    flexGrow: 1,
                }}
            />
            <Button title="LOG FORM" onPress={() => navigation.navigate('LogForm')}/>
            <Text>Hi here is poop</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        flexGrow: 1,
    }
});
