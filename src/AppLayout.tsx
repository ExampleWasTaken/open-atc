import { Outlet } from 'react-router-dom';

export const AppLayout = () => {
  return (
    <div className="bg-black text-white">
      <Outlet />
    </div>
  );
};
