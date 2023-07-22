import '../styles/Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {
  return (
    <div class="footer-basic">
        <footer>
            <div class="social"><a href="https://www.instagram.com/"><InstagramIcon /></a><a href="https://twitter.com/"><TwitterIcon /></a><a href="https://www.facebook.com/facebook/?locale=fr_FR"><FacebookIcon /></a></div>
            <ul class="list-inline">
                <li class="list-inline-item"><a href='https://www.google.fr/'>Publicité</a></li>
                <li class="list-inline-item"><a href='https://www.google.fr/'>Conditions générales d'utilisation</a></li>
                <li class="list-inline-item"><a href='https://www.google.fr/'>Politique de confidentialité</a></li>
                <li class="list-inline-item"><a href='https://www.google.fr/'>Crée par TRAN Tristan</a></li>
            </ul>
            <p class="copyright">TRAN Tristan © 2023</p>
        </footer>
    </div>
  );
}

export default Footer;
