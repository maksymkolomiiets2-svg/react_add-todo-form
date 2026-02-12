import type { User } from '../../types/User';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  if (!user) {
    return null;
  }
  <a
    className= "UserInfo"
    href = {`mailto:${user.email}`}>
    { user.name }
  </a>
};
