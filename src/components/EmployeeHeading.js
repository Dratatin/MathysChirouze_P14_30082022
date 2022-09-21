function EmployeeHeading({ children, img, alt }) {
    return (
        <div className="section-heading">
            <img className="section-heading__img" src={img} alt={`${alt} icon`}></img>
            <h2 className="section-heading__title">{children}</h2>
        </div>
    )
}

export default EmployeeHeading
