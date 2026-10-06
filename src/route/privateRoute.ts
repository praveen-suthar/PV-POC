import { Matcher, redirect, route, map } from 'navi'
import { routesConstant } from '../appConstants'

export const privateRouteWithUserSetting = (props: any): Matcher<any, any> => {
  return map((request, context) =>
    context.isLoggedIn
      ? route({ getView: props.getView })
      : redirect(routesConstant.LANDING_PAGE)
  )
}
