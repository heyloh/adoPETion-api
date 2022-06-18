import crypto from 'crypto';

export type Size = "small" | "medium" | "large";

export type PetProps = {
  id?: string;
  name: string;
  age: number;
  size: Size;
  personality: string;
  adoptable: boolean;
}

export class Pet {
  constructor(private props: PetProps) {
    this.props.id = props.id ?? crypto.randomUUID();
  }

  public toJSON(): PetProps {
    return this.props;
  }
}
