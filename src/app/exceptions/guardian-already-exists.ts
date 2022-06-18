export class GuardianAlreadyExistsError extends Error {
  constructor() {
    super("Guardian already exists.");
    this.name = "GuardianAlreadyExistsError";
  }
}
