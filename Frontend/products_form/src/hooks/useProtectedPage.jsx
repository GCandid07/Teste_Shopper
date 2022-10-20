import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { goToHomePage } from '../router/Coordinator';

const useProtectedPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userExists = localStorage.getItem("user")

    if (userExists === null) {
      goToHomePage(navigate)
    }
  }, [navigate])
}

export default useProtectedPage;
