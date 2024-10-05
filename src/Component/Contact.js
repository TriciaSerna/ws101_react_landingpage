export default function Contact() {
    return (
      <div className="contact-page">
        <h3>Get in Touch</h3>
        <div className="contact-info">
          <p>Have a question?</p>
        </div>
        <form>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name"/><br/><br/>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email"/><br/><br/>
          <label for="message">Message:</label>
          <textarea id="message" name="message"></textarea><br/><br/>
          <input type="submit" value="Send Message"/>
        </form>
        <footer>
        <p>&copy; 2024 Tricia Serna. All rights reserved.</p>
      </footer>
      </div>
    );
  }