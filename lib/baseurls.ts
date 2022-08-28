export const _searchCompany = (): string => {
    let baseurl = window.location.origin
    return `${baseurl}/api/search`
}

export const _createCompany = (): string => {
    let baseurl = window.location.origin
    return `${baseurl}/api/create`
}

export const _getCompany = (): string => {
    let baseurl = window.location.origin
    return `${baseurl}/api/companies`
}