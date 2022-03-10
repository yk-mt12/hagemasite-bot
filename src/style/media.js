import { css } from 'styled-components'
import constant from './constant'

export const sp = (first, ...interpolations) => css`
  @media (max-width: ${constant.spMax}px) {
    ${css(first, ...interpolations)}
  }
`

export const tb = (first, ...interpolations) => css`
  @media (min-width: ${constant.spMax + 1}px) and (max-width: ${constant.tbMax}px) {
    ${css(first, ...interpolations)}
  }
`

export const sptb = (first, ...interpolations) => css`
  @media (max-width: ${constant.tbMax}px) {
    ${css(first, ...interpolations)}
  }
`

export const pc = (first, ...interpolations) => css`
  @media (min-width: ${constant.tbMax + 1}px) and (max-width: ${constant.pcMax}px) {
    ${css(first, ...interpolations)}
  }
`

export const lg = (first, ...interpolations) => css`
  @media (min-width: ${constant.pcMax + 1}px) {
    ${css(first, ...interpolations)}
  }
`

export const vw = (pxValue) => {
  return (pxValue / constant.vwWidth) * 100 + 'vw'
}
