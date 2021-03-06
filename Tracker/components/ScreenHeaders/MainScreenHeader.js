import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import * as Animate from "react-native-animatable";
import { useTheme } from "@react-navigation/native";

import Colours from "../Utilities/Colours";

/**
 * This component is the header component for the main screen of the application.
 * @param {Set search filter for the token list} param0
 */
export default function MainScreenHeader({ onChange }) {
  const [show, setShow] = useState(false);
  const navigatorTheme = useTheme();

  // Theme variable which is used to render this component conditionally based on the theme
  const theme = navigatorTheme.dark ? Colours.dark : Colours.light;

  return (
    <View style={!show ? styles.container : styles.headerContainer}>
      <View></View>
      <View>
        {!show ? (
          <Text style={[styles.headerTitle, { color: theme.primary }]}>
            Tracker
          </Text>
        ) : null}
      </View>
      <View>
        {!show ? (
          <TouchableOpacity
            onPress={() => {
              setShow(true);
            }}
            hitSlop={{ top: 25, right: 10, left: 50, bottom: 15 }}
          >
            <View style={styles.searchIcon}>
              <Ionicons name="ios-search" size={28} color={theme.primary} />
            </View>
          </TouchableOpacity>
        ) : (
          <Animate.View animation="slideInRight" duration={100}>
            <View style={styles.searchContainer}>
              <View>
                <TextInput
                  style={styles.textInput}
                  onChangeText={(text) => onChange(text)}
                  autoFocus={true}
                  color={theme.primary}
                />
              </View>
              <TouchableOpacity
                onPress={() => {
                  setShow(false);
                  onChange("");
                }}
                hitSlop={{ top: 30, right: 30, left: 30, bottom: 30 }}
              >
                <AntDesign
                  name="closecircleo"
                  size={24}
                  color={theme.primary}
                  style={styles.closeIcon}
                />
              </TouchableOpacity>
            </View>
          </Animate.View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 375,
    height: 65,
    padding: 22,
  },
  closeIcon: {
    position: "absolute",
    top: -12,
    right: 12,
  },
  headerTitle: {
    fontSize: 18,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 400,
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 340,
    height: 65,
  },
  textInput: {
    height: 40,
    width: 340,
    borderColor: Colours.light.graph,
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
  },
  searchIcon: {
    position: "absolute",
    top: -11,
    right: 0,
  },
});
