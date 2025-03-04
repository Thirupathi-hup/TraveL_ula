import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-family: 'Poppins', sans-serif;
  max-width: 1200px;
  margin: auto;
  padding: 20px;
  color: #333;
`;

const Header = styled.header`
  background: url('/images/maasai-mara.jpg') center/cover no-repeat;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
`;

const Section = styled.section`
  margin: 30px 0;
  line-height: 1.6;
`;

const Button = styled.button`
  background: #ff5733;
  color: white;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  border-radius: 5px;
  transition: background 0.3s ease;
  &:hover {
    background: #e04d2b;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 25px;
  border-radius: 8px;
  text-align: center;
  width: 450px;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 12px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  margin: 12px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 120px;
`;

const TravelLanding = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking Inquiry:', formData);
    setModalOpen(false);
  };

  return (
    <Container>
      <Header>Big Cats Week - Maasai Mara</Header>
      <Section>
        <h2>Overview</h2>
        <p>Join us for an unforgettable journey to Maasai Mara in November, one of the best times to visit Kenya.</p>
      </Section>
      <Section>
        <h2>Itinerary</h2>
        <ul>
          <li>Day 1: Arrival and first game drive</li>
          <li>Day 2: Full day safari</li>
          <li>Day 3: Border safari and exploration</li>
          <li>Day 4: Departure</li>
        </ul>
      </Section>
      <Button onClick={() => setModalOpen(true)}>Plan Your Trip</Button>
      {isModalOpen && (
        <Modal>
          <ModalContent>
            <CloseButton onClick={() => setModalOpen(false)}>&times;</CloseButton>
            <h2>Inquire Now</h2>
            <form onSubmit={handleSubmit}>
              <Input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
              <Input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
              <TextArea 
                name="message" 
                placeholder="Your Message" 
                value={formData.message} 
                onChange={handleChange} 
                required 
              />
              <Button type="submit">Submit Inquiry</Button>
            </form>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

export default TravelLanding;
