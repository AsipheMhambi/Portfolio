module.exports = async (req, res) => {
  const { name, email, message } = req.body;

  // Perform any necessary processing (e.g., send email, save to a database)

  // For demonstration purposes, log the form data
  console.log('Form Data:', { name, email, message });

  return res.status(200).json({ message: 'Form submitted successfully!' });
};
