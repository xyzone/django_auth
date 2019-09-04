import { NavigationActions } from 'react-navigation';

let navigationContainer;

export const setNavigator = nav => {
    console.log(nav)
    navigationContainer = nav;
};

export const navigateAction = (routeName, params) => {
    navigationContainer.dispatch(
        NavigationActions.navigate({
        routeName,
        params
        })
    );
};
