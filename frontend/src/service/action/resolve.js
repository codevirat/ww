const resolve = (payload) => {
    if(payload.success) {
        return {
            success: true, data: payload.data.data[0].msg
        }
    } else {
        return {
            success: false, data: payload.data.data[0].msg[0].msg
        }
    }
}

export {
    resolve
}