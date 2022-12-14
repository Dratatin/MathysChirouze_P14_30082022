const employeeList = [
    {
        firstName: "Jolie",
        lastName: "Nguyen",
        birthdate: "1975/04/20",
        startDate: "1999/07/22",
        street: "875 Nulla St.",
        city: "Montgomery",
        state: "Alabama",
        zipCode: "76617",
        departement: "Marketing"
    },
    {
        firstName: "Fulton",
        lastName: "Sampson",
        birthdate: "1980/01/01",
        startDate: "2000/08/09",
        street: "159 Sodales Avenue",
        city: "Houston",
        state: "Texas",
        zipCode: "12566",
        departement: "Sales"
    },
    {
        firstName: "Andrew",
        lastName: "Roman",
        birthdate: "1978/09/97",
        startDate: "2003/09/30",
        street: "722 Curabitur St.",
        city: "Dover",
        state: "Delaware",
        zipCode: "22193",
        departement: "Sales"
    },
    {
        firstName: "Cleo",
        lastName: "Brewer",
        birthdate: "1978/04/20",
        startDate: "1999/07/23",
        street: "261 Mauris. Av",
        city: "Cheyenne",
        state: "Wyoming",
        zipCode: "23482",
        departement: "Engineering"
    },
    {
        firstName: "Reese",
        lastName: "Valencia",
        birthdate: "1976/04/20",
        startDate: "1999/07/24",
        street: "703 Erat St.",
        city: "Nashville",
        state: "Tennessee",
        zipCode: "23482",
        departement: "Marketing"
    },
    {
        firstName: "Ima",
        lastName: "Hull",
        birthdate: "1975/04/28",
        startDate: "1999/09/22",
        street: "945 Et, Ave",
        city: "Miami",
        state: "Florida",
        zipCode: "73/652",
        departement: "Engineering"
    },
    {
        firstName: "Odysseu",
        lastName: "Hensley",
        birthdate: "1975/09/20",
        startDate: "2003/09/30",
        street: "908 Auctor. St",
        city: "Phoenix",
        state: "Arizona",
        zipCode: "55275",
        departement: "Sales"
    },
    {
        firstName: "Kevin",
        lastName: "Perkins",
        birthdate: "1979/06/20",
        startDate: "2003/09/09",
        street: "138 In Rd.",
        city: "Little Rock",
        state: "Arkansas",
        zipCode: "58536",
        departement: "Marketing"
    },
    {
        firstName: "Teagan",
        lastName: "Ortega",
        birthdate: "1986/04/20",
        startDate: "2003/09/12",
        street: "138 In Rd",
        city: "Phoenix",
        state: "Arizona",
        zipCode: "53735",
        departement: "Engineering"
    },
    {
        firstName: "Hashim",
        lastName: "Pitts",
        birthdate: "1975/12/20",
        startDate: "2003/10/30",
        street: "541 Ultrices. Rd.",
        city: "Springfield",
        state: "Illinois",
        zipCode: "79788",
        departement: "Marketing"
    },
    {
        firstName: "Paula",
        lastName: "Booker",
        birthdate: "1979/09/29",
        startDate: "2004/05/30",
        street: "538 Tempus, Ave",
        city: "Boston",
        state: "Massachusetts",
        zipCode: "97883",
        departement: "Human Resources"
    },
    {
        firstName: "Brittany",
        lastName: "Blair",
        birthdate: "1975/04/20",
        startDate: "2004/05/30",
        street: "15 Orci Rd.",
        city: "Hartford",
        state: "Connecticut",
        zipCode: "77884",
        departement: "Legal"
    },
    {
        firstName: "Wayne",
        lastName: "Simon",
        birthdate: "1975/04/20",
        startDate: "2004/05/30",
        street: "343 Ornare, Rd.",
        city: "Phoenix",
        state: "Arizona",
        zipCode: "90258",
        departement: "Legal"
    },
    {
        firstName: "Petra",
        lastName: "Wells",
        birthdate: "1975/04/20",
        startDate: "2004/05/30",
        street: "442 Eleifend Ave",
        city: "Columbus",
        state: "Ohio",
        zipCode: "82288",
        departement: "Human Resources"
    },
    {
        firstName: "Leo",
        lastName: "Works",
        birthdate: "1975/04/21",
        startDate: "2004/05/30",
        street: "442 str Ave",
        city: "Columbus",
        state: "Ohio",
        zipCode: "86288",
        departement: "Human Resources"
    },
    {
        firstName: "Joey",
        lastName: "Clark",
        birthdate: "1975/08/20",
        startDate: "2004/05/30",
        street: "15 Orci Rd.",
        city: "Hartford",
        state: "Connecticut",
        zipCode: "72884",
        departement: "Legal"
    },
    {
        firstName: "Kevina",
        lastName: "Perkineuch",
        birthdate: "1979/09/28",
        startDate: "2003/09/09",
        street: "138 InView Rd.",
        city: "Little Rock",
        state: "Arkansas",
        zipCode: "58536",
        departement: "Marketing"
    },
    {
        firstName: "Cloe",
        lastName: "Brewerers",
        birthdate: "1978/04/20",
        startDate: "1999/07/23",
        street: "261 Mauris. Av",
        city: "Cheyenne",
        state: "Wyoming",
        zipCode: "55348",
        departement: "Engineering"
    },
    {
        firstName: "Reesa",
        lastName: "Val",
        birthdate: "1976/04/20",
        startDate: "1999/07/24",
        street: "703 Erat St.",
        city: "Nashville",
        state: "Tennessee",
        zipCode: "55482",
        departement: "Marketing"
    },
    {
        firstName: "Imann",
        lastName: "Hullington",
        birthdate: "1975/04/28",
        startDate: "1999/09/22",
        street: "945 Et, Ave",
        city: "Miami",
        state: "Florida",
        zipCode: "73652",
        departement: "Engineering"
    },
    {
        firstName: "Paul",
        lastName: "Bookerachyer",
        birthdate: "1979/09/29",
        startDate: "2004/05/30",
        street: "538 Tempus, Ave",
        city: "Boston",
        state: "Massachusetts",
        zipCode: "79583",
        departement: "Human Resources"
    },
]

let DEFAULT_EMPLOYEES_LIST = employeeList.map(employee => Object.fromEntries(Object.entries(employee).map(
    ([key, value]) => [key, typeof value == 'string' ? value.toLowerCase() : value])));

export default DEFAULT_EMPLOYEES_LIST