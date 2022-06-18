import { Guardian, GuardianProps } from "../../domain/entities/guardian";
import { GuardianAlreadyExistsError } from "../exceptions/guardian-already-exists";
import { GuardiansRepositoryInterface } from "../repositories/interfaces/guardians-repository";

export class CreateGuardian {
  constructor(private guardiansRepository: GuardiansRepositoryInterface) {}

  public async execute(guardianDTO: GuardianProps): Promise<GuardianProps> {
    if (guardianDTO.id) {
      const guardian = await this.guardiansRepository.findById(guardianDTO.id);
      if (guardian) {
        throw new GuardianAlreadyExistsError();
      }
    }
    const guardian = new Guardian(guardianDTO);
    await this.guardiansRepository.create(guardian);
    return guardian.toJSON();
  }
}
