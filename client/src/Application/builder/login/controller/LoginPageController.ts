import { LoginPageModel } from '../model/LoginPageModel'
import { buildLoginPageComponent } from '../ui/LoginPage'

export const buildLoginPage = (loginPageModel: LoginPageModel) => {
  return buildLoginPageComponent(loginPageModel)
}