import crypto from 'crypto';
import { Pet } from './pet';

export type Address = {
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
}

export type Contact = {
  phone: string;
  email: string;
}

export type GuardianProps = {
  id?: string;
  name: string;
  address: Address;
  contact: Contact;
  pets?: Pet[];
}

export class Guardian {
  constructor(private _props: GuardianProps) {
    this._props.id = _props.id ?? crypto.randomUUID();
    this._props.pets = _props.pets || [];
  }

  public get props(): GuardianProps {
    return this._props;
  }

  public toJSON(): GuardianProps {
    return this._props;
  }
}
