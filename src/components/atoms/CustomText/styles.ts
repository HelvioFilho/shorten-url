import styled from 'styled-components/native';
import { CustomTextProps } from '../../../utils/interface';

export const Text = styled.Text<CustomTextProps>`
  ${({ theme, width }) => width && `width: ${theme.metrics.px(width)}px;`}
  ${({ widthPercent }) => widthPercent && `width: ${widthPercent}%;`}
  ${({ theme, height }) => height && `height: ${theme.metrics.px(height)}px;`}
  ${({ heightPercent }) => heightPercent && `height: ${heightPercent}%;`}
  ${({ theme, fontFamily }) => fontFamily && `font-family: ${theme.fonts[fontFamily]};`}
  ${({ theme, fontSize }) => fontSize && `font-size: ${theme.metrics.px(fontSize)}px;`}
  ${({ theme, color }) => color && `color: ${theme.colors[color]};`}
  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
  ${({ theme, marginTop }) => marginTop && `margin-top: ${theme.metrics.px(marginTop)}px;`}
  ${({ theme, marginBottom }) => marginBottom && `margin-bottom: ${theme.metrics.px(marginBottom)}px;`}
  ${({ theme, marginLeft }) => marginLeft && `margin-left: ${theme.metrics.px(marginLeft)}px;`}
  ${({ theme, marginRight }) => marginRight && `margin-right: ${theme.metrics.px(marginRight)}px;`}
  ${({ theme, paddingTop }) => paddingTop && `padding-top: ${theme.metrics.px(paddingTop)}px;`}
  ${({ theme, paddingBottom }) => paddingBottom && `padding-bottom: ${theme.metrics.px(paddingBottom)}px;`}
  ${({ theme, paddingLeft }) => paddingLeft && `padding-left: ${theme.metrics.px(paddingLeft)}px;`}
  ${({ theme, paddingRight }) => paddingRight && `padding-right: ${theme.metrics.px(paddingRight)}px;`}
`;