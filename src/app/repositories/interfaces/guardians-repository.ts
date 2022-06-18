import { Guardian } from "../../../domain/entities/guardian";

export interface GuardiansRepositoryInterface {
  create(guardian: Guardian): Promise<Guardian>;
  findById(id: string): Promise<Guardian|undefined>;
}
