import React, { Component } from 'react'
import { StyleSheet, View, Text, PixelRatio, ScrollView, TouchableOpacity } from 'react-native'
import TitleComponent from '../../../components/articles/TitleComponent'

export default class NewsComponent extends Component<{}>{
    onClick = (index) => {
        this.props.navigation.navigate('detail', { 'news': this.props.news[index] })
    }
    render(){
        let {news} = this.props 
        return(
            <ScrollView style={{backgroundColor:'#fff'}} style={styles.titleView}>
            {
                news.map((item,index) => (
                    <View key={index}>
                        <View style={styles.sourceView}>
                            <Text style={styles.source}>{item.source.name}</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.titleView}
                            onPress={()=>this.onClick(index)}
                        >
                            <TitleComponent
                                title={item.title}
                                publishedAt={item.publishedAt}
                                fontSize={PixelRatio.getPixelSizeForLayoutSize(7)}
                                onClick = {this.onClick}
                            />
                        </TouchableOpacity>
                    </View>
                ))
            }
                
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    titleView: {
        width:'95%',
        marginLeft:'2.5%',
    },
    source: {
        fontFamily: 'georgia',
        color: 'green',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(5)
    },
    sourceView:{
        marginTop: '2%'
    }
})