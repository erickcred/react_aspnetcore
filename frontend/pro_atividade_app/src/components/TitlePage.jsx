const TitlePage = ({ title, children }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mt-2 mb-3 pt-2 pb-3 border-bottom border-1">
      <h1 className="p-0 m-0">{title}</h1>
      {children}
    </div>
  )
}

export default TitlePage
