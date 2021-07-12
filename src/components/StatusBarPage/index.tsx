import React from 'react';
import { StatusBar, StatusBarProps } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

type Props = StatusBarProps & {
  color: string;
}

export function StatusBarPage({ color, ...rest }: Props) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar backgroundColor={color} {...rest} /> : null;
}