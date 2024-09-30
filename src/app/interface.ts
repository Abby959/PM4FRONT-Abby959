export interface Products {

    id: number
    name: string
    description: string
    price: number
    stock: number
    image: string
    categoryId: number
}

export interface UserCredentials {
    email: string
    password: string
}

export interface Order {
    id: number;
    status: string;
    date: string;
}

export interface UserDetails extends UserCredentials {
    email: string
    password: string
    name: string
    address: string
    phone: string
    userId?: number;
    orders?: Order[];
}

export interface UserSession {
    login: boolean;
    user: UserDetails;
    token: string;
}