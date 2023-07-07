import { HomePageModel } from "../model/HomePageModel"
import { buildHomePageComponent } from "../ui/HomePage"

export const buildHomePage = (homePageModel: HomePageModel) => {
    return buildHomePageComponent(homePageModel)
}