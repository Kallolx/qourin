import { useNavigate, useLocation } from 'react-router-dom';

export const useScrollToContact = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    
    if (contactSection) {
      // If we're already on the page with the contact section
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If we're on a different page, navigate to home and then scroll
      navigate('/', { state: { scrollToContact: true } });
    }
  };

  return scrollToContact;
}; 