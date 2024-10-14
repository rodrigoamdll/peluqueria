import { View, StyleSheet, Text, Button, StatusBar, Alert } from "react-native";
import { ImagenTop } from "../../components/ImagenTop";
import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import { registerUserWithEmailPassword } from "../../firebase/providers";

export const RegisterPage = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const { displayName, email, password } = data;
    if (!displayName || !email || !password) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    } else {
      const { ok } = await registerUserWithEmailPassword({
        email,
        password,
        displayName,
      });
      if (ok) {
        console.log("registrado");
        console.log(respuesta, "revisando la informacion que necesitamos");
      } else {
        Alert.alert("Error", "Error al registrar usuario");
      }
    }
  };

  return (
    <View style={styles.mainContainer}>
      <ImagenTop />
      <View style={styles.container}>
        <Text style={styles.titulo}>CREA TU CUENTA</Text>
        <Input name="displayName" placeholder="Nombre" control={control} />
        <Input
          name="email"
          placeholder="Correo electrónico"
          control={control}
        />
        <Input
          name="password"
          placeholder="Contraseña"
          control={control}
          secureTextEntry
          addStyle={{ marginBottom: 20 }}
        />
        <Button title="Crear cuenta" onPress={handleSubmit(onSubmit)} />
        <Text style={styles.olvidocontra}>¿Ya tienes una cuenta?</Text>
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
