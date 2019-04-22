export default class Contact {
    id: number;
    firstName: string;
    lastName: string;
    position: string;
    address: {
        street: string;
        city: string;
        state: string;
        zip: number;
    };
    phone: number;
    email: string;
    twitter: string;
    facebook: string;
    photo: string;
}