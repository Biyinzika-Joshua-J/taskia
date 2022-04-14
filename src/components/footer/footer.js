import "./footer.css";
import Button from '../UI/button';

const Footer = () => {
  return (
    <div className="footer">
      <h2>Get better work done</h2>

      <p>See why millions of people across 195 countries use Taskia.</p>

      <div className="email">
        <input placeholder="elon@tesla.com" type="email" />
        <Button class="heroBtn2" text="Try it Free" color="#fff" bg="#525FFB" />
      </div>
    </div>
  );
};

export default Footer;