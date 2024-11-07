import {View, Image, Platform, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Calling, Home, Recents, Settings} from '../screens';
import {COLORS, icons} from '../constants';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true, // Enable tab labels
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
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowRadius: 0,
          shadowColor: COLORS.transparent,
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name="Calling"
        component={Calling}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? icons.internet : icons.internetOutline}
              resizeMode="contain"
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? COLORS.primary : COLORS.gray,
              }}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? COLORS.primary : COLORS.gray,
                fontSize: 12,
                fontWeight: '600',
              }}>
              Calling
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: COLORS.primary,
                height: Platform.OS === 'ios' ? 70 : 60,
                width: Platform.OS === 'ios' ? 70 : 60,
                top: Platform.OS === 'ios' ? -40 : -30,
                borderRadius: Platform.OS === 'ios' ? 35 : 30,
                borderWidth: 3,
                borderColor: 'transparent',
              }}>
              <Image
                source={icons.plus}
                resizeMode="contain"
                style={{
                  width: 24,
                  height: 24,
                  tintColor: COLORS.white,
                }}
              />
            </View>
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? COLORS.primary : COLORS.gray,
                fontSize: 12,
                fontWeight: '600',
              }}>
              Add Post
            </Text>
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? icons.settings : icons.settingsOutline}
              resizeMode="contain"
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? COLORS.primary : COLORS.gray,
              }}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? COLORS.primary : COLORS.gray,
                fontSize: 12,
                fontWeight: '600',
              }}>
              Settings
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
