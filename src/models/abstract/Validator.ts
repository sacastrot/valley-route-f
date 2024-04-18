export abstract class Validator {
  public abstract validate(value: string): boolean
  abstract validMessage(): string
  abstract invalidMessage(): string
}
