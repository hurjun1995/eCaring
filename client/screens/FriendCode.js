import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Icon } from "react-native-elements";

export const FriendCode = ({navigation}) => {
    const code = 4384;
    const strCode = code.toString();
    const codeDisplay = () => {
      let codeArr = [];
      for(let i=0; i<strCode.length; i++){
          codeArr.push(
              <View>
              <Text style={{fontWeight:"500", fontSize:40, color:"#4B4B4B"}}>{strCode[i]}</Text>
              </View>
          )
      }
      return(
          <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', width: 190}}>
              {codeArr}
          </View>
      );
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={{position:"absolute", left:24, top:66}} onPress={() => {navigation.pop()}}>
                <Icon name="navigate-before"/>
            </TouchableOpacity>
            <Image source={require("../assets/lady2.png")} style={styles.patientImg}/>
            <View style={{alignItems:"center", marginTop:190}}>
                <Text style={{fontSize:15, fontWeight:"500"}}>Jane's Friend-Code</Text>
                <View style={styles.codeBox}>
                    {codeDisplay()}
                </View>
                <Text style={{fontSize:12, fontWeight:"400", textAlign:"center", width:311, color:"#4B4B4B"}}>
                    This is a unique, one-time friend code.
                </Text>
                <Text style={{fontSize:12, fontWeight:"400", textAlign:"center", width:311, color:"#4B4B4B"}}>
                    Pass this code on to the patient’s guardian, to finalize their profiles.
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    patientImg: {
        position: "absolute",
        width: 295,
        height: 295,
        top: 120,
        left: 160,
    },
    codeBox: {
        marginTop:13,
        height: 90,
        width:270,
        borderWidth:5,
        borderColor:"#C7D6FF",
        borderRadius:15,
        marginBottom: 19,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
    }
});
