import React from 'react';
import { StatusBar } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { CustomStatusBarProps } from '../../../utils/interface';

export function StatusBarPage({ color, ...rest }: CustomStatusBarProps) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar backgroundColor={color} {...rest} /> : null;
}