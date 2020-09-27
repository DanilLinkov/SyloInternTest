import { useRoute } from "@react-navigation/native";
import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "../components/Screen";
import TimeFrameConxtext from "../components/TimeFrameContext";
import TimeSelector from "../components/TimeSelector";
import TokenCard from "../components/TokenCard";

export default function TokenScreen() {
  const route = useRoute();
  const { id, symbol, market_cap, volume_24h } = route.params;
  const timeFrame = useContext(TimeFrameConxtext);

  return (
    <Screen>
      <TimeSelector />
      <View style={styles.tokenCardContainer}>
        <TokenCard
          id={id}
          symbol={symbol}
          disabled={true}
          timeFrame={timeFrame.timeFrame}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textPrimary}>Information</Text>
        <View style={styles.infoContainer}>
          <View>
            <Text style={styles.textSecondary}>Symbol: </Text>
            <Text style={styles.textSecondary}>Market cap: </Text>
            <Text style={styles.textSecondary}>24h Volume: </Text>
          </View>
          <View>
            <Text style={styles.textSecondary}>{symbol}</Text>
            <Text style={styles.textSecondary}>${market_cap}</Text>
            <Text style={styles.textSecondary}>${volume_24h}</Text>
          </View>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  tokenCardContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  textContainer: {
    alignItems: "flex-start",
    marginTop: 30,
  },
  textPrimary: {
    color: Colours.light.primary,
    fontSize: 15,
    alignSelf: "center",
    marginBottom: 5,
  },
  textSecondary: {
    color: Colours.light.secondary,
    margin: 7,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 34,
  },
});
