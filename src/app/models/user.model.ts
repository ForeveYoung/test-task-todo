export interface User {
    address: UserAddress;
    company: AddressCompany
    email: string;
    id: number;
    name: string;
    phone: string;
    username: string;
    website: string;
}

export interface UserAddress {
    city: string;
    street: string;
    suite: string;
    zipcode: string
    geo: AddressGeo;

}

export interface AddressGeo {
    lat: string;
    lng: string;
}

export interface AddressCompany {
    bs: string;
    catchPhrase: string;
    name: string;
}

export interface UserDTO {
    name: string,
    username: string,
    email: string,
    phone: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string
    }
}
