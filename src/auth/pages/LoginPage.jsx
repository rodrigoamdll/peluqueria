import { View, StyleSheet, Text, Button, StatusBar } from "react-native";
import { ImagenTop } from "../../components/ImagenTop";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";
import { loginWithEmailPassword } from "../../firebase/providers";

export const LoginPage = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;
    if (!email || !password) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    } else {
      const { ok } = await loginWithEmailPassword({ email, password });
      if (ok) {
        console.log("entramos a login page ❤️");
      } else {
        Alert.alert("Error", "Error al ingresar a la cuenta");
      }
    }
  };

  return (
    <View style={styles.mainContainer}>
      <ImagenTop />
      <View style={styles.container}>
        <Text style={styles.titulo}>BIENVENIDO</Text>
        <Text style={styles.subtitulo}>Ingresa en tu cuenta</Text>
        <Input
          name="email"
          placeholder="Correo electronico"
          control={control}
        />
        <Input
          name="password"
          placeholder="Contraseña"
          control={control}
          secureTextEntry
          addStyle={{ marginBottom: 20 }}
        />
        <Button title="Iniciar sesión" onPress={handleSubmit(onSubmit)} />
        <Text style={styles.olvidocontra}>Aún no tienes una cuenta?</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    justifyContent: "center",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginBottom: "40%",
  },
  titulo: {
    fontSize: 30,
    color: "#34434D",
    fontWeight: "bold",
  },
  subtitulo: {
    fontSize: 20,
    color: "grey",
  },
  textinput: {
    padding: 10,
    paddingStart: 30,
    width: "80%",
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: "#fff",
  },
  olvidocontra: {
    fontSize: 14,
    color: "gray",
    marginTop: 20,
  },
});
