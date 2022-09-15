import React from 'react';
import {
  Platform,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  View,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  style?: StyleProp<ViewStyle>;
}

export const SearchInput = ({style}: Props) => {
  return (
    <View style={{...styles.pkdSearchContainer, ...(style as any)}}>
      <View style={styles.pkdSearchContainer__Bg_Text}>
        <TextInput
          style={{
            ...styles.pkdSearchContainer__Input,
            top: Platform.OS === 'ios' ? 0 : 2,
          }}
          placeholder="Search Pokemon"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Icon name="search-outline" color="#ccc" size={30} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pkdSearchContainer: {
    justifyContent: 'center',
  },
  pkdSearchContainer__Bg_Text: {
    backgroundColor: '#f3f1f3',
    borderRadius: 50,
    height: 40,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  pkdSearchContainer__Input: {
    flex: 1,
    fontSize: 18,
    top: 2,
  },
});
