import { ReactNode } from "react";
import { colors } from "../global/styles/colors";
import { fonts } from "../global/styles/fonts";

export interface MetricsProps {
  children?: ReactNode;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  borderRadius?: number;
  width?: number;
  height?: number;
  widthPercent?: number;
  heightPercent?: number;
}

export interface ContainerProps extends MetricsProps {
  flexDirection?: 'column' | 'row' | 'column-reverse' | 'row-reverse';
  alignItems?: 'baseline' | 'center' | 'flex-end' | 'flex-start';
  justifyContent?: 'center' | 'space-between' | 'flex-start' | 'flex-end' | 'space-around' | 'space-evenly';
  backgroundColor?: keyof typeof colors;
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
  flex?: number;
}

export interface CustomTextProps extends MetricsProps {
  color?: keyof typeof colors;
  fontFamily?: keyof typeof fonts;
  fontSize?: number;
  textAlign?: 'center' | 'end' | 'start' | 'justify' | 'left' | 'right';
  numberOfLines?: number;
}

export interface ItemLink {
  id: string;
  link: string;
  long_url: string;
}

export interface StorageLink {
  [id: string]: {
    data: ItemLink;
  }
}

export interface ModalProps {
  onClose?: () => void;
  data: ItemLink;
}

export interface AlertModalProps {
  alertText: string;
}