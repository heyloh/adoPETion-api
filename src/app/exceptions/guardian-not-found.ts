export class GuardianNotFoundError extends Error {
  constructor() {
    super("Guardian not Found.");
    this.name = "GuardianNotFoundError";
  }
}
