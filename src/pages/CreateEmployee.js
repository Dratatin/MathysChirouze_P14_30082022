function CreateEmployee() {
    return (
        <section className="create-section">
            <h2 className="create-section__title">Create Employee</h2>
            <form className="create-section__form">
                <fieldset className="create-section__form__fieldset">
                    <div className="create-section__form__fieldset__wrapper">
                        <label htmlFor="firstName">First name</label>
                        <input id="firstName" name="firstName" type="text"></input>
                    </div>
                    <div className="create-section__form__fieldset__wrapper">
                        <label htmlFor="lastName">Last name</label>
                        <input id="lastName" name="lastName" type="text"></input>
                    </div>
                    <div className="create-section__form__fieldset__wrapper">
                        <label htmlFor="dateOfBirth">Date of birth</label>
                        <input id="dateOfBirth" name="dateOfBirth" type="text"></input>
                    </div>
                    <div className="create-section__form__fieldset__wrapper">
                        <label htmlFor="startDate">Start date</label>
                        <input id="startDate" name="startDate" type="text"></input>
                    </div>
                    <div className="create-section__form__fieldset__wrapper">
                        <label htmlFor="departement">Departements</label>
                        <select name="departements" id="departement">
                            <option value="Sales">Sales</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Engineering">Engineering</option>
                            <option value="Human Ressources">Human Ressources</option>
                            <option value="Legal">Legal</option>
                        </select>
                    </div>
                </fieldset>
                <fieldset className="create-section__form__fieldset">
                    <legend>Address</legend>
                    <div className="create-section__form__fieldset__wrapper">
                        <label htmlFor="street">Street</label>
                        <input id="street" name="street" type="text"></input>
                    </div>
                    <div className="create-section__form__fieldset__wrapper">
                        <label htmlFor="city">City</label>
                        <input id="city" name="city" type="text"></input>
                    </div>
                    <div className="create-section__form__fieldset__wrapper">
                        <label htmlFor="state">State</label>
                        <input id="state" name="state" type="text"></input>
                    </div>
                    <div className="create-section__form__fieldset__wrapper">
                        <label htmlFor="zipCode">Zip Code</label>
                        <input id="zipCode" name="zipCode" type="number"></input>
                    </div>
                </fieldset>
                <div className="create-section__form__submit">
                    <input className="create-section__form__submit__button" type="submit" value="Save"></input>
                </div>
            </form>
        </section>
    )
}

export default CreateEmployee