import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableHighlight,
    Image,
    ScrollView
} from 'react-native';

export default class Wiki extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

    render() {
    return (
        <View style={styles.container}>
            <View style={styles.listHeader}>
                <Image
                    style={[styles.image, styles.whiteIcon, styles.listFuncImage]}
                    source={require("../../assets/images/home/tabBar/arrow.png")}
                />
                <Text style={styles.listTitle}>Bien préparer{"\n"}sa randonnée</Text>
            </View>

            <ScrollView contentContainerStyle={styles.listFunc}>
                <View style={styles.listFunc}>
                    <Image
                        style={[styles.image, styles.whiteIcon, styles.listFuncImage]}
                        source={require("../../assets/images/home/tabBar/map.png")}
                    />
                    <Text style={styles.listFuncTitle}>Avant de prendre la route, pensez à vérifier la météo sur l'intégralité du chemin.</Text>
                </View>
                <View style={styles.listFunc}>
                    <Image
                        style={[styles.image, styles.whiteIcon, styles.listFuncImage]}
                        source={require("../../assets/images/home/tabBar/map.png")}
                    />
                    <Text style={styles.listFuncTitle}>Un téléphone, une bouteille d'eau c'est utile.</Text>
                </View>
                <View style={styles.listFunc}>
                    <Image
                        style={[styles.image, styles.whiteIcon, styles.listFuncImage]}
                        source={require("../../assets/images/home/tabBar/map.png")}
                    />
                    <Text style={styles.listFuncTitle}>1-Prévenez un proche que vous partez randonnée, ou mieux : emmener le avec vous.</Text>
                </View>
                <View style={styles.listFunc}>
                    <Image
                        style={[styles.image, styles.whiteIcon, styles.listFuncImage]}
                        source={require("../../assets/images/home/tabBar/map.png")}
                    />
                    <Text style={styles.listFuncTitle}>2-Prévenez un proche que vous partez randonnée, ou mieux : emmener le avec vous.</Text>
                </View>
                <View style={styles.listFunc}>
                    <Image
                        style={[styles.image, styles.whiteIcon, styles.listFuncImage]}
                        source={require("../../assets/images/home/tabBar/map.png")}
                    />
                    <Text style={styles.listFuncTitle}>3-Prévenez un proche que vous partez randonnée, ou mieux : emmener le avec vous.</Text>
                </View>
                <View style={styles.listFunc}>
                    <Image
                        style={[styles.image, styles.whiteIcon, styles.listFuncImage]}
                        source={require("../../assets/images/home/tabBar/map.png")}
                    />
                    <Text style={styles.listFuncTitle}>4-Prévenez un proche que vous partez randonnée, ou mieux : emmener le avec vous.</Text>
                </View>
                <View style={styles.listFunc}>
                    <Image
                        style={[styles.image, styles.whiteIcon, styles.listFuncImage]}
                        source={require("../../assets/images/home/tabBar/map.png")}
                    />
                    <Text style={styles.listFuncTitle}>5-Prévenez un proche que vous partez randonnée, ou mieux : emmener le avec vous.</Text>
                </View>
            </ScrollView>
        </View>
    )}
}
const styles = StyleSheet.create({  
	/*
	*
	*CONTAINER*/
    container: {
        flex: 1,
        backgroundColor: '#000000',
        opacity: 1
    },
    highlighter: {
        borderRadius: 15
    },
	/*
	*
    *LISTFUNC*/
    listHeader: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'red',
        marginTop: 10,
        height: 100,
        padding: 10,
    },
    listFunc: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginTop: 10,
        height: 100,
        padding: 10,
    },
    listTitle: {
        flex: 3,
        fontSize: 25,
        color: 'white',
    },
    listFuncTitle: {
        flex: 3,
        backgroundColor: 'transparent',
        textAlign: 'left',
        color: 'white',
        fontSize: 18,
        paddingLeft: 20,
    },
    listFuncImage: {
        flex: 1,
        height: 50,
        width: 50,
    },
	/*
	*
	*IMAGES*/
    image: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
    },
    whiteIcon: {
        tintColor: 'white',
    },
    ScrollView: {
        backgroundColor: 'red',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
});