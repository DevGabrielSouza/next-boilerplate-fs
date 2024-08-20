import { prisma } from '@/lib/prisma'
import { LoginSchema } from '@/schemas'
import { comparePassword } from '@/shared/utils/bcrypt'
import { Credentials } from './types/credentials.type'

export async function authenticateUser(credentials: Credentials) {
  const result = LoginSchema.safeParse(credentials)

  if (!result.success) return null

  const { email, password } = result.data
  const user = await prisma.user.findUnique({
    where: { email }
  })

  if (!user) return null

  const isValidPassword = await comparePassword(password, user.password)
  return isValidPassword ? user : null
}
