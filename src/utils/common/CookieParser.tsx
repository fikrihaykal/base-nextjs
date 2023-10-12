const getCookie = (key: string) => {
    const cookies = document.cookie.split('; ')

    for (let i = 0; i < cookies.length; i++) {
        const [cKey, value] = cookies[i].split('=')
        if (key === cKey) return value
    }

    return null
}

export { getCookie }