export const Error = ({ isError }) => {
  if (isError === true) {
   return <span className="error-message">City not found</span>
  }
}
