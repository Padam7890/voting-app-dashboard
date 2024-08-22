export interface XapiResponseInterface {
    token: string,
    organization: OrganizationDetails
}
export interface OrganizationDetails {
    id: string,
    name: string,
    email: string
}
export interface XapiResponse {
    success: boolean,
    data: XapiResponseInterface,
    message: string,
}