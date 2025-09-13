import Contact from '../models/Contact.js';

export const submitContactForm = async (req, res) => {
  try {
    const { name, email, location, message } = req.body;

    if (!name || !email || !location || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const contact = new Contact({ name, email, location, message });
    await contact.save();

    res.status(201).json({ success: true, message: 'Alert received.' });
  } catch (err) {
    console.error('❌ Contact form error:', err.message);
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
};