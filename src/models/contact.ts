export interface ContactData
{
    id: number;
    firstName: string;
    lastName?: string;

    phone: string;
    address?: string;
}

export default class Contact implements ContactData
{
    public id: number;
    public firstName: string;
    public lastName?: string;

    public phone: string;
    public address?: string;

    public get completeName(): string
    {
        return [this.firstName, this.lastName].filter((x) => !!x).join(" ");
    }

    public constructor({ id, firstName, lastName, phone, address }: ContactData)
    {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;

        this.phone = phone;
        this.address = address;
    }
}
