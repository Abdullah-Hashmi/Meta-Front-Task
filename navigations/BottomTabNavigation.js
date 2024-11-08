import {View, Image, Platform, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';
import {Notifications, Home, Profile} from '../screens';
import {COLORS, icons} from '../constants';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: true,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: COLORS.white,
          height: Platform.OS === 'ios' ? 110 : 60,
          borderTopLeftRadius: 32,
          borderTopRightRadius: 32,
          elevation: 0,
          shadowOpacity: 0,
          shadowOffset: {width: 0, height: 0},
          shadowRadius: 0,
          shadowColor: COLORS.transparent,
        },
      }}>
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.Notification1}
              resizeMode="contain"
              style={{
                width: 34,
                height: 34,
                tintColor: focused ? COLORS.secondary : COLORS.gray,
              }}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? COLORS.secondary : COLORS.gray,
                fontSize: 12,
                fontWeight: '600',
              }}>
              Notifications
            </Text>
          ),
        }}
      />

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <LinearGradient
              colors={['#00A4E4', '#1EB0E9']} // Gradient colors
              start={{x: 0.5, y: 0}}
              end={{x: 0.5, y: 1}}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'transparent',
                height: Platform.OS === 'ios' ? 70 : 60,
                width: Platform.OS === 'ios' ? 70 : 60,
                top: Platform.OS === 'ios' ? -10 : -10,
                borderRadius: Platform.OS === 'ios' ? 35 : 30,
                borderWidth: 3,
                borderColor: 'white',
                borderWidth: 4,
                shadowOffset: {width: 0, height: 10},
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 0,
              }}>
              <Image
                source={icons.Home1}
                resizeMode="contain"
                style={{
                  width: 24,
                  height: 24,
                  tintColor: COLORS.white,
                }}
              />
            </LinearGradient>
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? COLORS.primary : COLORS.gray,
                fontSize: 12,
                fontWeight: '600',
              }}></Text>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.Profile1}
              resizeMode="contain"
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? COLORS.secondary : COLORS.gray,
              }}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? COLORS.secondary : COLORS.gray,
                fontSize: 12,
                fontWeight: '600',
              }}>
              Profile
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
