import styled from 'styled-components/native';
import { ContainerProps } from '../../../utils/interface';

export const ContainerAll = styled.View<ContainerProps>`
  display: flex;
  ${({ flex }) => flex && `flex: ${flex};`}
  ${({ theme, width }) => width && `width: ${theme.metrics.px(width)}px;`}
  ${({ widthPercent }) => widthPercent && `width: ${widthPercent}%;`}
  ${({ theme, height }) => height && `height: ${theme.metrics.px(height)}px;`}
  ${({ heightPercent }) => heightPercent && `height: ${heightPercent}%;`}
  ${({ flexDirection }) => flexDirection && `flex-direction: ${flexDirection};`}
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
  ${({ justifyContent }) => justifyContent && `justify-content: ${justifyContent};`}
  ${({ theme, marginTop }) => marginTop && `margin-top: ${theme.metrics.px(marginTop)}px;`}
  ${({ theme, marginBottom }) => marginBottom && `margin-bottom: ${theme.metrics.px(marginBottom)}px;`}
  ${({ theme, marginLeft }) => marginLeft && `margin-left: ${theme.metrics.px(marginLeft)}px;`}
  ${({ theme, marginRight }) => marginRight && `margin-right: ${theme.metrics.px(marginRight)}px;`}
  ${({ theme, paddingTop }) => paddingTop && `padding-top: ${theme.metrics.px(paddingTop)}px;`}
  ${({ theme, paddingBottom }) => paddingBottom && `padding-bottom: ${theme.metrics.px(paddingBottom)}px;`}
  ${({ theme, paddingLeft }) => paddingLeft && `padding-left: ${theme.metrics.px(paddingLeft)}px;`}
  ${({ theme, paddingRight }) => paddingRight && `padding-right: ${theme.metrics.px(paddingRight)}px;`}
  ${({ theme, borderRadius }) => borderRadius && `border-radius: ${theme.metrics.px(borderRadius)}px;`}
  ${({ theme, backgroundColor }) => backgroundColor && `background-color: ${theme.colors[backgroundColor]};`}
  ${({ theme, borderTopLeftRadius }) => borderTopLeftRadius && `border-top-left-radius: ${theme.metrics.px(borderTopLeftRadius)}px;`}
  ${({ theme, borderTopRightRadius }) => borderTopRightRadius && `border-top-right-radius: ${theme.metrics.px(borderTopRightRadius)}px;`}
`;