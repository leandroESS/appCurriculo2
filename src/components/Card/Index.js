import React from "react";
import {View, Text}  from 'react-native';

import style from 'style';

const Card = () => {
    return(
        <View style={style.card_container}>
        <View style={style.card}>
          <View style={style.card_header}>
            <Text>Experiência Profissional</Text>
          </View>
          <View style={style.card_content}>
            <Text style={style.card_content_text}>Python</Text>
            <Text style={style.card_content_text}>SQL</Text>
            <Text style={style.card_content_text}>HTML</Text>
          </View>
        </View>
      </View>
    )
}

export default Card