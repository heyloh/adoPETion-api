import { InMemoryGuardiansRepository } from "../repositories/implementations/in-memory-guardians-repository";
import { CreateGuardian } from "./create-guardian";
import { GuardianAlreadyExistsError } from '../exceptions/guardian-already-exists';

describe("Test guardian creation", () => {
  it("should be able to create a guardian if it doesn't exists", async () => {
    const guardianRepository = new InMemoryGuardiansRepository();
    const guardianToBeCreated = {
      name: "Fake Guardian",
      address: {
        street: "Fake Street",
        number: "123",
        neighborhood: "Fake Neighborhood",
        city: "Fake City",
        state: "Fake State",
      },
      contact: {
        phone: "123456789",
        email: "fake@email.com"
      }
    }
    const sut = new CreateGuardian(guardianRepository);
    const result = await sut.execute(guardianToBeCreated);
    expect(result).toBeTruthy();
    expect(result).toMatchObject({
      id: result.id,
      ...guardianToBeCreated
    });
  });

  it("should not be able to create a guardian with an already existing id", async () => {
    const guardianRepository = new InMemoryGuardiansRepository();
    const uuid = "123456789";
    const guardianToBeCreated = {
      id: uuid,
      name: "Fake Guardian",
      address: {
        street: "Fake Street",
        number: "123",
        neighborhood: "Fake Neighborhood",
        city: "Fake City",
        state: "Fake State",
      },
      contact: {
        phone: "123456789",
        email: "fake@email.com",
      }
    }
    const sut = new CreateGuardian(guardianRepository);
    const guardian_1 = await sut.execute(guardianToBeCreated);

    try {
      await sut.execute(guardianToBeCreated);
    } catch (error) {
      expect(error).toBeInstanceOf(GuardianAlreadyExistsError);
    }
  });
});
