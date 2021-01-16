import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export const LogForm = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>
            Log Form
        </Text>
          <Button title="back" onPress={() => {
              navigation.pop();
          }}/>
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
