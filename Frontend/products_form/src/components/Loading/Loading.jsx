import { Spinner, SpinnerRotate } from "./Styles"

export const Loading = () => {
  return (
    <Spinner>
      <span></span>
      <span></span>
      <span></span>
    </Spinner>
  )
}

export const LoadingRotate = () => {
  return (
    <SpinnerRotate>
      <span></span>
      <span></span>
      <span></span>
    </SpinnerRotate>
  )
} 
