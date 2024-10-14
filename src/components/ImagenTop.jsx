import { StyleSheet, View, Image, Dimensions } from "react-native";

import Logo from "../img/logo.png";
import Wave from "../img/wave.png";

export const ImagenTop = () => {
  return (
    <View style={styles.imageContainer}>
      <Image source={Logo} style={styles.logo} resizeMode="contain" />
      <Image source={Wave} style={styles.imageTop} resizeMode="cover" />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
  },
  imageTop: {
    width: "100%",
    height: Dimensions.get("window").height * 0.4,
  },
  logo: {
    width: 200,
    height: 200,
    position: "absolute",
    top: 0,
    zIndex: 1,
  },
});
