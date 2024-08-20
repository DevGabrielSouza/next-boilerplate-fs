import bcrypt from 'bcryptjs'

/**
 * Hashes a password using bcrypt with a predefined number of salt rounds.
 * @param password - The plain text password to hash.
 * @returns A promise that resolves to the hashed password.
 */
export async function saltAndHashPassword(password: string): Promise<string> {
  const saltRounds = 10
  const salt = await bcrypt.genSalt(saltRounds)
  const hash = await bcrypt.hash(password, salt)
  return hash
}

/**
 * Compares a plain text password to a hashed password.
 * @param password - The plain text password to compare.
 * @param hash - The hashed password to compare.
 * @returns A promise that resolves to a boolean indicating whether the passwords match.
 */

export async function comparePassword(
  password: string,
  hash: string
): Promise<boolean> {
  return bcrypt.compare(password, hash)
}
