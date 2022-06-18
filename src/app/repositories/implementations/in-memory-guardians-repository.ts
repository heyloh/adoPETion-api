import { GuardiansRepositoryInterface } from "../interfaces/guardians-repository";
import { Guardian } from "../../../domain/entities/guardian";
import { GuardianNotFoundError } from "../../exceptions/guardian-not-found";

export class InMemoryGuardiansRepository implements GuardiansRepositoryInterface {
  private guardians: Guardian[];
  constructor() {
    this.guardians = [];
  }

  async findById(id: string): Promise<Guardian|undefined> {
    const guardian = this.guardians.find((guardian) => guardian.props.id === id);
    return guardian;
  }

  async create(guardian: Guardian): Promise<Guardian> {
    this.guardians.push(guardian);
    return guardian;
  }
}
