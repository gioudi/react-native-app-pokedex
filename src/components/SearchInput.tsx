import React, {useEffect, useState} from 'react';
import {
  Platform,
  StyleProp,
  StyleSheet,
  TextInput,
  View,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDebounceValue} from '../hooks/useDebounceValue';

interface Props {
  // eslint-disable-next-line react-hooks/exhaustive-deps

  onDebounce: (value: string) => void;
  style?: StyleProp<ViewStyle>;
}

export const SearchInput = ({style, onDebounce}: Props) => {
  const [textValue, setTextValue] = useState('');
  const debouncedValue = useDebounceValue(textValue);

  useEffect(() => {
    onDebounce(debouncedValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

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
          value={textValue}
          onChangeText={setTextValue}
        />
        <Icon name="search-outline" color="#ccc" size={25} />
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
    fontSize: 16,
  },
});
