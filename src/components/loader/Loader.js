export const Loader = ({ isLoading }) => {
  if(isLoading === true) {
    return  <div className="loader-container">
    <div className="loader"></div>
    <p className="loader-text">Loading...</p>
  </div>
  }
}