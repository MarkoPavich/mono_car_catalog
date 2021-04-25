import { useTranslation } from 'react-i18next';
import { useAuthStore } from '../../../StoreProvider';
import UserMenuSmallScreen from './UserMenuSmallScreen';
import './NavbarResponsiveUserMenu.css';

function NavbarResponsiveUserMenu({
  isSmallScreen,
}: {
  isSmallScreen: boolean;
}) {
  const { t } = useTranslation();
  const { requestLogout, authState } = useAuthStore();

  const UserMenu = () => (
    <div className="l-navbar-user-menu">
      <ul>
        <li>
          <a href="/#/add-new-vehicle">{t('navOptions.addVehicle')}</a>
        </li>
        <li>
          <a href="/#/my-vehicles">{t('navOptions.myVehicles')}</a>
        </li>
        <li>
          <button type="button" onClick={requestLogout}>
            {t('common.logout')}
          </button>
        </li>
      </ul>
    </div>
  );

  if (!authState.isAuthenticated) return <></>;
  return isSmallScreen ? <UserMenuSmallScreen /> : <UserMenu />;
}

export default NavbarResponsiveUserMenu;
