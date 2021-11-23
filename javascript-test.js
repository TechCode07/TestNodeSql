//input array
const users = [
    {
        firstName: "Oliver",
        lastName: "Jake",
        isActive: true,
        role: "student",
        registeredAt: 1625112000000
    },
    {
        firstName: "Connor",
        lastName: "Liam",
        isActive: true,
        role: "student",
        registeredAt: 1609477200000
    },
    {
        firstName: "Charlie",
        lastName: "",
        isActive: true,
        role: "admin",
        registeredAt: 1619841600000
    },
    {
        firstName: "Thomas",
        lastName: "",
        isActive: true,
        role: "student",
        registeredAt: 1612155600000
    },
    {
        firstName: "George",
        lastName: "Reece",
        isActive: true,
        role: "superAdmin",
        registeredAt: 1614574800000
    },
    {
        firstName: "Oscar",
        lastName: "Rhys",
        isActive: false,
        role: "superAdmin",
        registeredAt: 1617249600000
    },
    {
        firstName: "William",
        lastName: "Damian",
        isActive: false,
        role: "student",
        registeredAt: 1609477200000
    }
];

const filterDeactivatedUsers = () => {
    return new Promise((resolve, reject) => {
        const deactivateUserList = users.filter((user) => user.isActive === false);
        //console.log(`deactivateUserList - ${JSON.stringify(deactivateUserList)}`)
        resolve(deactivateUserList);
    }).catch((err) => {
        console.log(err);
    });
}

const getUserFirstAndLastNameAppended = () => {
    return new Promise((resolve, reject) => {
        const firstLastNameList = [];
        users.every((user) => firstLastNameList.push(`${user.firstName}${user.lastName}`));
        //console.log(`firstLastNameList - ${JSON.stringify(firstLastNameList)}`)
        resolve(firstLastNameList);
    }).catch((err) => {
        console.log(err);
    });
    
}

const getCountOfUsersAfterGivenDate = (role, date) => {
    return new Promise((resolve, reject) => {
        const filterList = users.filter((user) => user.role === role && user.registeredAt > date);
        //console.log(`filterListAfterGivenDate - ${JSON.stringify(filterList)}`)
        resolve(filterList);
    }).catch((err) => {
        console.log(err);
    });
}

const sortUsersByDate = (sortOrder) => {
    return new Promise((resolve, reject) => {
        const usersToSort = [...users];
        const sortedUserList = usersToSort.sort((a,b) => {
            if(sortOrder === 'asc') {
                return a.registeredAt - b.registeredAt;
            }
            else {
                return b.registeredAt - a.registeredAt;
            }
        });
        //console.log(`sortedUserList - ${JSON.stringify(sortedUserList)}`);
        resolve(sortedUserList);
    }).catch((err) => {
        console.log(err);
    });
}

const allFunction = async() => {
    const promiseArr = [filterDeactivatedUsers(), 
        getUserFirstAndLastNameAppended(), 
        getCountOfUsersAfterGivenDate('superAdmin', 1614574800000),
        sortUsersByDate('asc')];

    const result = await Promise.allSettled(promiseArr);
    if(result && Array.isArray(result)){
        result.forEach((res, i) => {
            console.log(`${i} - ${JSON.stringify(res.value)}`);
        });
    }
}

allFunction();