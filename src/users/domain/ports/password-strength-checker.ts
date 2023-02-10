export interface IPasswordStrengthChecker {
  isStrong(password: string): boolean;
}
