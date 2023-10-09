import { NavigationModel } from "../model/navigationModel"
import { buildNavigationComponent } from "../ui/Navigation"

export const buildNavigation = (navigationModel: NavigationModel) => {
    return buildNavigationComponent(navigationModel)
  }
  