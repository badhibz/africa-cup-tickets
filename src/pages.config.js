import EnterPassword from './pages/EnterPassword';
import Home from './pages/Home';
import More from './pages/More';
import SignIn from './pages/SignIn';
import SignOut from './pages/SignOut';
import Splash from './pages/Splash';
import Transfers from './pages/Transfers';
import Welcome from './pages/Welcome';
import TransferDetails from './pages/TransferDetails';


export const PAGES = {
    "EnterPassword": EnterPassword,
    "Home": Home,
    "More": More,
    "SignIn": SignIn,
    "SignOut": SignOut,
    "Splash": Splash,
    "Transfers": Transfers,
    "Welcome": Welcome,
    "TransferDetails": TransferDetails,
}

export const pagesConfig = {
    mainPage: "Welcome",
    Pages: PAGES,
};