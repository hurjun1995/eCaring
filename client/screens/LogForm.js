import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, TextInput} from 'react-native';
import { Icon, Slider, CheckBox, Rating, Overlay } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";

export const LogForm = ({navigation}) => {
    const [hydration, setHydration] = useState(0);

    const [breakfast, setBreakfast] = useState(false);
    const [lunch, setLunch] = useState(false);
    const [dinner, setDinner] = useState(false);
    const [snack, setSnack] = useState(false);

    const [stable, setStable] = useState(false);
    const [unstable, setUnstable] = useState(false);
    const [na, setNa] = useState(false);

    const [mental, setMental] = useState(0);

    const [pain, setPain] = useState(0);

    const [medicine, setMedicine] = useState([]);
    const [visible, setVisible] = useState(false);
    const [medName, setMedName] = useState("");
    const [medDose, setMedDose] = useState("");

    const [notes, setNotes] = useState("");

    const logo = (
        <View style={{position:"absolute", top: 70, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap'}}>
            <Icon name="favorite" color="#FF7676" size={15} style={{marginBottom:20, marginRight:6}}/>
            <Text style={{color: "#515C77", fontWeight:"500", fontSize:25}}>Wellness Log</Text>
        </View>
    );

    const takenMeds = medicine ? (medicine.map( meds => (
            <View style={[{backgroundColor:'#fff', borderColor:"#C7D6FF", borderLeftWidth:2, borderRightWidth:2, borderBottomWidth:2, borderTopWidth:72}, styles.vitalBox]} key={meds.name}>
                <Icon name="clear" color={"#FF7676"} size={10} containerStyle={{borderWidth:1, borderRadius:20, borderColor:"#FF7676", position:"absolute", right:4, top:-65}}/>
                <Text style={[{width:50, paddingTop:5, position:"absolute", top:-54}, styles.medicineText]}>{meds.name}</Text>
                <Text style={styles.medicineDosage}>{meds.dosage} mg</Text>
            </View>
        ))
    ): <View/>;

    const updateMeds = () => {
        const newMed = {name: medName, dosage: medDose};
        const newArr = [...medicine, newMed];
        setMedicine(newArr);
    };

    const vis = () => {
        setVisible(!visible);
    };

    const addMeds = visible ? (
        <View style={styles.centeredView}>
            <Overlay
                animationType="fade"
                transparent={true}
                isVisible={visible}
                fullScreen={true}
                overlayStyle={{ backgroundColor: "rgba(0, 0, 0, 0.35)" }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableOpacity style={{position:"absolute", left:28, top:35, zIndex:99}} onPress={() => setVisible(!visible)}>
                            <Icon name="navigate-before" color="#000"/>
                        </TouchableOpacity>
                        <Text style={{fontWeight:"600", fontSize:15, color:"#6067A9", textAlign:"center", paddingTop:15}}>Add Medicine</Text>
                        <Text style={styles.inputLabel}>MEDICINE NAME</Text>
                        <TextInput
                            value={medName}
                            onChangeText={(text) => {
                                setMedName(text);
                            }}
                            style={styles.input}
                        />
                        <Text style={styles.inputLabel}>DOSAGE (mg)</Text>
                        <TextInput
                            value={medDose}
                            onChangeText={(text) => {
                                setMedDose(text);
                            }}
                            style={styles.input}
                            keyboardType="decimal-pad"
                        />
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                onPress={() => {updateMeds(); vis()}}
                                style={styles.saveButton}
                            >
                                <Text
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        fontWeight: "600",
                                    }}
                                >
                                    Save
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Overlay>
        </View>
    ): (<View/>);

    return (
      <View style={styles.container}>
          <LinearGradient
              colors={['#C7D6FF', '#C9F2FF', '#FFFFFF']}
              style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  top: 0,
                  height: '35%',
                  flex: 1,
              }}
          />
        <TouchableOpacity style={{position:"absolute", left:24, top:66}} onPress={() => {navigation.pop()}}>
            <Icon name="navigate-before" color="#515C77"/>
        </TouchableOpacity>
        {logo}
        <SafeAreaView style={styles.logForm}>
            <ScrollView style={{padding:31}} showsVerticalScrollIndicator={false}>
                <Text style={styles.label}>HYDRATION</Text>
                <Slider value={hydration}
                        onValueChange={(value) => setHydration(value)}
                        maximumValue={5}
                        minimumValue={0}
                        thumbStyle={{width:23, height:23, backgroundColor:'#fff',borderWidth:3,borderColor:'#A2AFD0'}}
                        trackStyle={{height:10, borderRadius:19}}
                        maximumTrackTintColor={'#C7D6FF'}
                        minimumTrackTintColor={'#C7D6FF'}
                />
                <Text style={{textAlign:"center", fontSize:12, fontWeight:"700"}}>{hydration.toPrecision(2)} L</Text>

                <Text style={[styles.label, styles.spacedLabel]}>FOOD INTAKE</Text>
                <View style={styles.checkGroup}>
                    <View style={[{backgroundColor: breakfast === true ? '#C7D6FF': '#E8ECF9'}, styles.foodBox]}>
                        <CheckBox checked={breakfast}
                                  onPress={() => setBreakfast(!breakfast)}
                                  checkedColor={"#6067A9"}
                                  uncheckedColor={"#6067A9"}
                                  size={16}
                                  containerStyle={{marginLeft:-8}}
                        />
                        <Text style={styles.checkLabel}>Breakfast</Text>
                    </View>
                    <View style={[{backgroundColor: lunch === true ? '#C7D6FF': '#E8ECF9'}, styles.foodBox]}>
                        <CheckBox checked={lunch}
                                  onPress={() => setLunch(!lunch)}
                                  checkedColor={"#6067A9"}
                                  uncheckedColor={"#6067A9"}
                                  size={16}
                                  containerStyle={{marginLeft:-14}}
                        />
                        <Text style={styles.checkLabel}>Lunch</Text>
                    </View>
                </View>
                <View style={styles.checkGroup}>
                    <View style={[{backgroundColor: dinner === true ? '#C7D6FF': '#E8ECF9'}, styles.foodBox]}>
                        <CheckBox checked={dinner}
                                  onPress={() => setDinner(!dinner)}
                                  checkedColor={"#6067A9"}
                                  uncheckedColor={"#6067A9"}
                                  size={16}
                                  containerStyle={{marginLeft:-8}}
                        />
                        <Text style={styles.checkLabel}>Dinner</Text>
                    </View>
                    <View style={[{backgroundColor: snack === true ? '#C7D6FF': '#E8ECF9'}, styles.foodBox]}>
                        <CheckBox checked={snack}
                                  onPress={() => setSnack(!snack)}
                                  checkedColor={"#6067A9"}
                                  uncheckedColor={"#6067A9"}
                                  size={16}
                                  containerStyle={{marginLeft:-14}}
                        />
                        <Text style={styles.checkLabel}>Snack</Text>
                    </View>
                </View>

                <Text style={[styles.label, styles.spacedLabel]}>VITAL SIGNS</Text>
                <View style={styles.checkGroup}>
                    <View style={[{backgroundColor: stable === true ? '#C7D6FF': '#E8ECF9'}, styles.vitalBox]}>
                        <CheckBox checked={stable}
                                  onPress={() => setStable(!stable)}
                                  checkedColor={"#6067A9"}
                                  uncheckedColor={"#6067A9"}
                                  size={16}
                                  containerStyle={{marginLeft:15, marginTop:-10}}
                        />
                        <Text style={styles.vitalLabel}>Stable</Text>
                    </View>
                    <View style={[{backgroundColor: unstable === true ? '#C7D6FF': '#E8ECF9'}, styles.vitalBox]}>
                        <CheckBox checked={unstable}
                                  onPress={() => setUnstable(!unstable)}
                                  checkedColor={"#6067A9"}
                                  uncheckedColor={"#6067A9"}
                                  size={16}
                                  containerStyle={{marginLeft:15, marginTop:-10}}
                        />
                        <Text style={styles.vitalLabel}>Unstable</Text>
                    </View>
                    <View style={[{backgroundColor: na === true ? '#C7D6FF': '#E8ECF9'}, styles.vitalBox]}>
                        <CheckBox checked={na}
                                  onPress={() => setNa(!na)}
                                  checkedColor={"#6067A9"}
                                  uncheckedColor={"#6067A9"}
                                  size={16}
                                  containerStyle={{marginLeft:15, marginTop:-10}}
                        />
                        <Text style={[{width:60, textAlign:"center"}, styles.vitalLabel]}>Not Applicable</Text>
                    </View>
                </View>

                <Text style={[styles.label, styles.spacedLabel]}>MEDICINE TAKEN</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={[{backgroundColor:'#fff', borderColor:"#C7D6FF", borderWidth:2}, styles.vitalBox]}>
                        <TouchableOpacity onPress={() => setVisible(!visible)} style={{borderWidth:2, borderRadius:20, borderColor:"#6067A9"}}>
                            <Icon name="add" size={20} color={"#6067A9"}/>
                        </TouchableOpacity>
                        <Text style={[{width:50, paddingTop:5}, styles.medicineText]}>Add Medicine</Text>
                    </View>
                    {takenMeds}
                </ScrollView>
                {addMeds}

                <Text style={[styles.label, styles.spacedLabel]}>MENTAL HEALTH</Text>
                <View style={styles.ratingBox}>
                    <Rating
                        onFinishRating={(value) => setMental(value)}
                        ratingCount={5}
                        defaultRating={5}
                        imageSize={36}
                        type='heart'
                        style={{alignSelf:"center"}}
                    />
                </View>

                <Text style={[styles.label, styles.spacedLabel]}>PAIN LEVEL</Text>
                <View style={styles.ratingBox}>
                    <Rating
                        onFinishRating={(value) => setPain(value)}
                        ratingCount={5}
                        defaultRating={5}
                        imageSize={30}
                        type='rocket'
                        style={{alignSelf:"center"}}
                    />
                </View>

                <Text style={[styles.label, styles.spacedLabel]}>SPECIAL NOTES</Text>
                <TextInput
                    style={styles.noteInput}
                    onChangeText={text => setNotes(text)}
                    value={notes}
                />

                <TouchableOpacity style={styles.saveButton}>
                    <Text style={{color:'#fff', fontWeight:"600", fontSize:15}}>Save</Text>
                </TouchableOpacity>
                <View style={{height: 260}}/>
            </ScrollView>
        </SafeAreaView>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#fff"
    },
    logForm: {
        backgroundColor: '#fff',
        height: 999,
        width:"100%",
        position:"absolute",
        top:120,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
    },
    label: {
        fontWeight: "600",
        fontSize: 12,
        color:"#8A8A8A",
        letterSpacing: 0.8,
    },
    spacedLabel: {
        paddingTop:20,
        paddingBottom:2
    },
    saveButton: {
        backgroundColor: "#83E1FF",
        width:130,
        height:38,
        borderRadius:19,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop:30
    },
    foodBox: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width:117,
        height:46,
        borderRadius: 19,
        marginRight: 11,
        marginTop:10
    },
    checkLabel: {
        fontWeight:"400",
        fontSize:12,
        color:"#6067A9",
        marginLeft:-10
    },
    checkGroup: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    vitalBox: {
        alignItems: 'center',
        justifyContent: 'center',
        width:75,
        height:92,
        borderRadius: 19,
        marginRight: 11,
        marginTop:10
    },
    vitalLabel: {
        fontWeight:"400",
        fontSize:10,
        color:"#6067A9",
        marginTop:-12
    },
    ratingBox: {
        borderWidth:3,
        borderColor:"#C7D6FF",
        borderRadius:19,
        height:90,
        width:335,
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 8
    },
    noteInput: {
        height: 38,
        borderColor: '#6067A9',
        borderWidth:1,
        borderRadius:10,
        width:335,
        alignSelf:"center",
        marginTop:10,
        paddingLeft:15,
        paddingRight:15,
        paddingTop:8,
        paddingBottom:8,
        color: "#4B4B4B",
        fontSize:15,
        fontWeight:"600"
    },
    medicineText: {
        fontWeight:"600",
        fontSize:10,
        textAlign:"center",
        color:"#6067A9"
    },
    medicineDosage: {
        fontSize:8,
        fontWeight:"600",
        color:"#8D9ABA",
        position:"absolute",
        bottom: 20
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        margin: 20,
        backgroundColor: "#fff",
        borderRadius: 41,
        padding: 24,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        position: "relative",
        height: 320,
        width: 333,
    },
    inputLabel: {
        fontSize: 12,
        paddingBottom: 6,
        fontWeight: "600",
        color: "#8A8A8A",
        letterSpacing: 0.8,
        paddingTop: 20
    },
    input: {
        borderRadius:10,
        borderWidth:1,
        borderColor:"#6067A9",
        height:38,
        width:293,
        alignSelf: "center",
        paddingLeft:15,
        paddingRight:15,
        paddingTop:8,
        paddingBottom:8,
        color: "#4B4B4B",
        fontSize:15,
        fontWeight:"600"
    }
});
