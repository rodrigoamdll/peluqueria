import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { View, Text, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Puedes usar cualquier librería de iconos

const Drawer = createDrawerNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Pantalla de Inicio</Text>
    </View>
  );
}

function MyAccountScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Mi Cuenta</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Configuración</Text>
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <View style={{ flex: 1, backgroundColor: '#5F4636' }}>
      <DrawerItemList {...props} />
      <View style={{ backgroundColor: "red", position: "absolute", bottom: 0 }}>
        <Button
          title="Cerrar Sesión"
          onPress={() => alert('Cerrar sesión')}
          color="#F4A460"
        />
      </View>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawerContent {...props} />}
        drawerStyle={{
          backgroundColor: '#A52A2A',
          width: 240, // Ajusta el ancho del menú
        }}
        drawerContentOptions={{
          activeTintColor: '#F4A460',
          inactiveTintColor: '#FFF',
          itemStyle: { marginVertical: 10 },
        }}
      >
        <Drawer.Screen
          name="Inicio"
          component={HomeScreen}
          options={{
            drawerItemStyle: { backgroundColor: "#775E4E" },
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} style={{ color: "#FCCC7C" }} />
            ),
            drawerLabelStyle: { color: "white" },
          }}
        />
        <Drawer.Screen
          name="Mi cuenta"
          component={MyAccountScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Configuración"
          component={SettingsScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="settings" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;