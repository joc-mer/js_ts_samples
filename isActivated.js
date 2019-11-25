function isActivated(bool) {
    return {
        'isActivated': bool || (() => { 
            throw new Error('Something wrong happened') 
        })()
    }
}
