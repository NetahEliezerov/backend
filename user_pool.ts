var user_pool = {};
//@ts-ignore
function addNewUser(userObject: any) {
    //@ts-ignore
    if (!user_pool[userObject.email]) {
        //@ts-ignore
        user_pool[userObject.email] = userObject;
    } else {
        return false;
    }
    return true;
}

function updateUser(loginId: any, field: any, data: any) {
    //@ts-ignore
    if (user_pool[loginId]) {
        //@ts-ignore
        user_pool[loginId][field] = data;
    } else {
        return false;
    }
    return true;
}

function getUser(loginId: any) {
    //@ts-ignore
    if (user_pool[loginId]) {
        //@ts-ignore
        return user_pool[loginId];
    } else {
        return null;
    }
}

function getAll() {
    return user_pool;
}

export default {
    addNewUser,
    updateUser,
    getUser,
    getAll
}