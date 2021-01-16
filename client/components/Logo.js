import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements'

const Logo = () => {
    return (
        <View style={styles.container}>
            <Icon name="favorite" color="#FF7676" style={styles.heart} size={8}/>
            <Text style={styles.logo}>
                eCaring
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    logo: {
        fontWeight: "500",
        fontSize: 10,
        lineHeight: 15,
    },
    heart: {
        marginRight: 6,
        marginBottom: 10
    }
});

export {Logo}
